import { Octokit, RestEndpointMethodTypes } from "@octokit/rest";
import { DateTime } from "luxon";

import { Cache } from "../../interfaces/Cache";
import { initialiseDataRecord } from "../../modules/initialiseDataRecord";

/**
 * Parses the Github pull requests into the format the cache object expects.
 * Mounts the data to the cache object.
 *
 * @param {Cache} cache The cache object.
 * @param {RestEndpointMethodTypes["pulls"]["list"]["response"]["data"]} pulls The pull data from Github.
 */
export const parseGithubPulls = async (
  cache: Cache,
  pulls: RestEndpointMethodTypes["pulls"]["list"]["response"]["data"]
) => {
  const github = new Octokit({ auth: cache.env.githubToken });
  for (const pull of pulls) {
    if (!pull.user) {
      continue;
    }
    const emails = await github.users.getByUsername({
      username: pull.user.login,
    });
    const key = emails.data.email || pull.user.email || pull.user.login;
    if (!cache.data[key]) {
      cache.data[key] = initialiseDataRecord();
      cache.data[key].github.username = pull.user.name || pull.user.login;
      cache.data[key].github.url = pull.user.html_url;
    }
    if (
      DateTime.fromISO(pull.created_at) > DateTime.now().minus({ days: 28 })
    ) {
      cache.data[key].github.month.pulls++;
    }
    if (
      DateTime.fromISO(pull.created_at) > DateTime.now().minus({ days: 365 })
    ) {
      cache.data[key].github.year.pulls++;
    }
  }
};

/**
 * Parses the Github issues into the format the cache object expects.
 * Mounts the data to the cache object.
 *
 * @param {Cache} cache The cache object.
 * @param {RestEndpointMethodTypes["issues"]["list"]["response"]["data"]} issues The issue data from Github.
 */
export const parseGithubIssues = async (
  cache: Cache,
  issues: RestEndpointMethodTypes["issues"]["list"]["response"]["data"]
) => {
  const github = new Octokit({ auth: cache.env.githubToken });
  for (const issue of issues) {
    if (!issue.user) {
      continue;
    }
    const emails = await github.users.getByUsername({
      username: issue.user.login,
    });
    const key = emails.data.email || issue.user.email || issue.user.login;
    if (!cache.data[key]) {
      cache.data[key] = initialiseDataRecord();
      cache.data[key].github.username = issue.user.name || issue.user.login;
      cache.data[key].github.url = issue.user.html_url;
    }
    if (
      DateTime.fromISO(issue.created_at) > DateTime.now().minus({ days: 28 })
    ) {
      cache.data[key].github.month.issues++;
    }
    if (
      DateTime.fromISO(issue.created_at) > DateTime.now().minus({ days: 365 })
    ) {
      cache.data[key].github.year.issues++;
    }
  }
};
