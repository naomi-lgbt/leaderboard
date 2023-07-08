import { assert } from "chai";

import { MockPublicData } from "../../src/data/__mocks__/MockPublicData";
import { aggregateData } from "../../src/data/aggregateData";
import { Cache } from "../../src/interfaces/Cache";
import { validateEnv } from "../../src/utils/validateEnv";

suite("aggregateData module", () => {
  test("should set the mock data when not in production mode", () => {
    process.env.TEST_ENV = "true";
    const cache = { env: validateEnv(), data: {}, public: [] } as Cache;
    process.env.NODE_ENV = "development";
    aggregateData(cache);
    assert.deepEqual(cache.public, MockPublicData);
    delete process.env.TEST_ENV;
    delete process.env.NODE_ENV;
  });
});
