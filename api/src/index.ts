import { aggregateData } from "./data/aggregateData";
import { Cache } from "./interfaces/Cache";
import { serve } from "./server/serve";
import { validateEnv } from "./utils/validateEnv";

(async () => {
  const cache = { env: {}, data: {}, public: {} } as Cache;
  validateEnv(cache);

  await aggregateData(cache);

  await serve(cache);
})();
