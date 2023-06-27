import { RestEndpointMethodTypes } from "@octokit/rest";
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
export const parseGithubPulls = (
  cache: Cache,
  pulls: RestEndpointMethodTypes["pulls"]["list"]["response"]["data"]
) => {
  for (const pull of pulls) {
    if (!pull.user || !pull.user.email) {
      continue;
    }
    if (!cache.data[pull.user.email]) {
      cache.data[pull.user.email] = initialiseDataRecord();
      cache.data[pull.user.email].github.username =
        pull.user.name || pull.user.login;
      cache.data[pull.user.email].github.url = pull.user.html_url;
    }
    if (
      DateTime.fromISO(pull.created_at) > DateTime.now().minus({ days: 28 })
    ) {
      cache.data[pull.user.email].github.month.pulls++;
    }
    if (
      DateTime.fromISO(pull.created_at) > DateTime.now().minus({ days: 365 })
    ) {
      cache.data[pull.user.email].github.year.pulls++;
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
export const parseGithubIssues = (
  cache: Cache,
  issues: RestEndpointMethodTypes["issues"]["list"]["response"]["data"]
) => {
  for (const issue of issues) {
    if (!issue.user || !issue.user.email) {
      continue;
    }
    if (!cache.data[issue.user.email]) {
      cache.data[issue.user.email] = initialiseDataRecord();
      cache.data[issue.user.email].github.username =
        issue.user.name || issue.user.login;
      cache.data[issue.user.email].github.url = issue.user.html_url;
    }
    if (
      DateTime.fromISO(issue.created_at) > DateTime.now().minus({ days: 28 })
    ) {
      cache.data[issue.user.email].github.month.issues++;
    }
    if (
      DateTime.fromISO(issue.created_at) > DateTime.now().minus({ days: 365 })
    ) {
      cache.data[issue.user.email].github.year.issues++;
    }
  }
};
