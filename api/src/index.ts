import { Cache } from "./interfaces/Cache";
import { serve } from "./server/serve";
import { validateEnv } from "./utils/validateEnv";

(async () => {
  const cache = {} as Cache;
  validateEnv(cache);

  await serve(cache);
})();
