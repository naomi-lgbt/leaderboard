import { Cache } from "../interfaces/Cache";
import { generateGravatarUrl } from "../modules/generateGravatarUrl";
import { errorHandler } from "../utils/errorHandler";
import { logHandler } from "../utils/logHandler";

import { MockPublicData } from "./__mocks__/MockPublicData";
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
  const records = Object.entries(cache.data);
  let unknown = 1;
  for (const [email, record] of records) {
    const name =
      record.github.username ||
      record.forum.username ||
      record.crowdin.username ||
      record.news.username ||
      record.youtube.username ||
      `Unknown User ${unknown++}`;
    cache.public.push({
      ...record,
      displayName: name,
      avatarUrl: generateGravatarUrl(email),
    });
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
    if (process.env.NODE_ENV !== "production") {
      logHandler.log(
        "warn",
        "Production mode is not enabled. To avoid API calls, mock data will be sent."
      );
      cache.public = MockPublicData;
      return;
    }
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
