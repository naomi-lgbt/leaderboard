import { Octokit, RestEndpointMethodTypes } from "@octokit/rest";
import { DateTime } from "luxon";

import { GithubRepositories } from "../../config/GithubRepositories";
import { Cache } from "../../interfaces/Cache";
import { errorHandler } from "../../utils/errorHandler";
import { logHandler } from "../../utils/logHandler";

/**
 * Collects the Github Pull request data from the freeCodeCamp repositories.
 * Returns only the pulls which have been merged.
 *
 * @param {Cache} cache The global cache object.
 * @returns {Promise<RestEndpointMethodTypes["pulls"]["list"]["response"]["data"]>} The Github Pull request data.
 */
export const getGithubPulls = async (
  cache: Cache
): Promise<RestEndpointMethodTypes["pulls"]["list"]["response"]["data"]> => {
  try {
    logHandler.log("info", "Fetching pull requests...");
    const github = new Octokit({ auth: cache.env.githubToken });

    const totalData: RestEndpointMethodTypes["pulls"]["list"]["response"]["data"] =
      [];

    for (const repo of GithubRepositories) {
      let page = 1;

      logHandler.log("info", `Fetching ${repo} page ${page}`);

      let pulls = await github.pulls.list({
        owner: "freeCodeCamp",
        repo: repo,
        state: "closed",
        per_page: 100,
        page: page,
      });
      totalData.push(...pulls.data.filter((issue) => issue.merged_at));

      while (
        DateTime.fromISO(pulls.data[pulls.data.length - 1].created_at) >
          DateTime.now().minus({ days: 365 }) &&
        pulls.data.length === 100
      ) {
        page++;
        logHandler.log(
          "info",
          `Fetching ${repo} page ${page} - Looking at ${
            pulls.data[pulls.data.length - 1].created_at
          }`
        );
        pulls = await github.pulls.list({
          owner: "freeCodeCamp",
          repo: repo,
          state: "closed",
          per_page: 100,
          page: page,
        });
        totalData.push(...pulls.data.filter((issue) => issue.merged_at));
      }

      logHandler.log(
        "info",
        `Finished ${repo} with PR created at ${
          pulls.data[pulls.data.length - 1].created_at
        }`
      );
    }

    logHandler.log("info", "Finished collecting PRs.");

    return totalData;
  } catch (err) {
    errorHandler("get github pull requests", err);
    return [];
  }
};

/**
 * Collects the Github issue data from the freeCodeCamp repositories.
 * Returns only the issues which have been closed via a linked PR.
 *
 * @param {Cache} cache The global cache object.
 * @returns {Promise<RestEndpointMethodTypes["issues"]["list"]["response"]["data"]>} The Github issue request data.
 */
export const getGithubIssues = async (
  cache: Cache
): Promise<RestEndpointMethodTypes["issues"]["list"]["response"]["data"]> => {
  try {
    logHandler.log("info", "Fetching issues...");
    const github = new Octokit({ auth: cache.env.githubToken });

    const totalData: RestEndpointMethodTypes["issues"]["list"]["response"]["data"] =
      [];

    for (const repo of GithubRepositories) {
      let page = 1;
      logHandler.log("info", `Fetching ${repo} page ${page}`);

      let issues = await github.issues.list({
        owner: "freeCodeCamp",
        repo: repo,
        state: "closed",
        per_page: 100,
        page: page,
      });

      for (const issue of issues.data) {
        const events = await github.issues.listEvents({
          owner: "freeCodeCamp",
          repo: repo,
          issue_number: issue.number,
        });
        const closeEvent = events.data.findLast((e) => e.event === "closed");
        if (!closeEvent) {
          continue;
        }
        // closed via a commit directly
        if (closeEvent.commit_id) {
          totalData.push(issue);
          continue;
        }
        // closed via a connected PR
        if (closeEvent.event === "connected") {
          totalData.push(issue);
          continue;
        }
      }

      while (
        DateTime.fromISO(issues.data[issues.data.length - 1].created_at) >
          DateTime.now().minus({ days: 365 }) &&
        issues.data.length === 100
      ) {
        page++;
        logHandler.log(
          "info",
          `Fetching ${repo} page ${page} - Looking at ${
            issues.data[issues.data.length - 1].created_at
          }`
        );
        issues = await github.issues.list({
          owner: "freeCodeCamp",
          repo: repo,
          state: "closed",
          per_page: 100,
          page: page,
        });

        for (const issue of issues.data) {
          const events = await github.issues
            .listEvents({
              owner: "freeCodeCamp",
              repo: repo,
              issue_number: issue.number,
            })
            .catch(() => null);
          if (!events) {
            continue;
          }
          const closeEvent = events.data.findLast((e) => e.event === "closed");
          if (!closeEvent) {
            continue;
          }
          // closed via a commit directly
          if (closeEvent.commit_id) {
            totalData.push(issue);
            continue;
          }
          // closed via a connected PR
          if (closeEvent.event === "connected") {
            totalData.push(issue);
            continue;
          }
        }
      }

      logHandler.log(
        "info",
        `Finished ${repo} with issue created at ${
          issues.data[issues.data.length - 1].created_at
        }`
      );
    }

    logHandler.log("info", "Finished collecting issues.");

    return totalData;
  } catch (err) {
    errorHandler("get github issues", err);
    return [];
  }
};
