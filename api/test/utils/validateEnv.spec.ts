import { assert } from "chai";

import { validateEnv } from "../../src/utils/validateEnv";

suite("validateEnv util", () => {
  test("should return a mock environment when test mode is enabled", () => {
    process.env.TEST_ENV = "true";
    const result = validateEnv();
    delete process.env.TEST_ENV;
    assert.deepEqual(result, {
      githubToken: "github",
      ghostKey: "ghost",
      ghostAdminKey: "ghost admin",
      crowdinKey: "crowdin",
      forumKey: "forum",
      forumUsername: "forum username",
    });
  });

  test("should throw an error if GITHUB_TOKEN is not set", () => {
    assert.throw(() => validateEnv(), Error, "Missing GITHUB_TOKEN in .env");
  });

  test("should throw an error if GHOST_KEY is not set", () => {
    process.env.GITHUB_TOKEN = "github";
    assert.throw(() => validateEnv(), Error, "Missing GHOST_KEY in .env");
  });

  test("should throw an error if GHOST_ADMIN_KEY is not set", () => {
    process.env.GHOST_KEY = "ghost";
    assert.throw(() => validateEnv(), Error, "Missing GHOST_ADMIN_KEY in .env");
  });

  test("should throw an error if CROWDIN_KEY is not set", () => {
    process.env.GHOST_ADMIN_KEY = "ghost admin";
    assert.throw(() => validateEnv(), Error, "Missing CROWDIN_KEY in .env");
  });

  test("should throw an error if FORUM_KEY is not set", () => {
    process.env.CROWDIN_KEY = "crowdin";
    assert.throw(() => validateEnv(), Error, "Missing FORUM_KEY in .env");
  });

  test("should throw an error if FORUM_USERNAME is not set", () => {
    process.env.FORUM_KEY = "forum";
    assert.throw(() => validateEnv(), Error, "Missing FORUM_USERNAME in .env");
  });

  test("should mount the environment variables to the cache if all are set", () => {
    process.env.FORUM_USERNAME = "forum username";
    const result = validateEnv();
    delete process.env.GITHUB_TOKEN;
    delete process.env.GHOST_KEY;
    delete process.env.GHOST_ADMIN_KEY;
    delete process.env.CROWDIN_KEY;
    delete process.env.FORUM_KEY;
    delete process.env.FORUM_USERNAME;
    assert.deepEqual(result, {
      githubToken: "github",
      ghostKey: "ghost",
      ghostAdminKey: "ghost admin",
      crowdinKey: "crowdin",
      forumKey: "forum",
      forumUsername: "forum username",
    });
  });
});
