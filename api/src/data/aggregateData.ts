import { Cache } from "../interfaces/Cache";
import { errorHandler } from "../utils/errorHandler";
import { logHandler } from "../utils/logHandler";

import {
  getGithubIssues,
  getGithubPulls,
} from "./fetch/getGithubContributions";
import {
  parseGithubIssues,
  parseGithubPulls,
} from "./parse/parseGithubContributions";

/**
 * Parses the internal cache data to a format that can be publicised.
 * Primary concern is ensuring email addresses are not exposed.
 *
 * @param {Cache} cache The global cache object.
 */
export const sanitiseData = (cache: Cache) => {
  const records = Object.values(cache.data);
  let unknown = 1;
  for (const record of records) {
    const name =
      record.github.username ||
      record.forum.username ||
      record.crowdin.username ||
      record.news.username ||
      record.youtube.username ||
      `Unknown User ${unknown++}`;
    cache.public.push({ ...record, displayName: name });
  }
};

/**
 * Top-level wrapper to call the various fetch and parse modules
 * for contributor data. Then sanitises the data for use in the
 * server.
 *
 * @param {Cache} cache The global cache object.
 */
export const aggregateData = async (cache: Cache) => {
  try {
    logHandler.log("info", "Fetching contribution data.");
    const githubPulls = await getGithubPulls(cache);
    const githubIssues = await getGithubIssues(cache);
    await parseGithubPulls(cache, githubPulls);
    await parseGithubIssues(cache, githubIssues);
    logHandler.log("info", "Finished fetching contribution data.");
    logHandler.log("info", "Preparing public data.");
    sanitiseData(cache);
    logHandler.log("info", "Finished preparing public data.");
  } catch (err) {
    errorHandler("aggregate data", err);
  }
};
