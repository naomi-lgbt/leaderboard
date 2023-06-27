import { Cache } from "../interfaces/Cache";

/**
 * Validates that the environment variables are present, and
 * returns the expected environment object.
 *
 * @returns {Cache["env"]} The environment object.
 */
export const validateEnv = (): Cache["env"] => {
  if (!process.env.GITHUB_TOKEN) {
    throw new Error("Missing GITHUB_TOKEN in .env");
  }
  if (!process.env.GHOST_KEY) {
    throw new Error("Missing GHOST_KEY in .env");
  }
  if (!process.env.GHOST_ADMIN_KEY) {
    throw new Error("Missing GHOST_ADMIN_KEY in .env");
  }
  if (!process.env.CROWDIN_KEY) {
    throw new Error("Missing CROWDIN_KEY in .env");
  }
  if (!process.env.FORUM_KEY) {
    throw new Error("Missing FORUM_KEY in .env");
  }
  if (!process.env.FORUM_USERNAME) {
    throw new Error("Missing FORUM_USERNAME in .env");
  }
  return {
    githubToken: process.env.GITHUB_TOKEN,
    ghostKey: process.env.GHOST_KEY,
    ghostAdminKey: process.env.GHOST_ADMIN_KEY,
    crowdinKey: process.env.CROWDIN_KEY,
    forumKey: process.env.FORUM_KEY,
    forumUsername: process.env.FORUM_USERNAME,
  };
};
