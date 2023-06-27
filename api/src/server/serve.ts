import Fastify from "fastify";

import { Cache } from "../interfaces/Cache";
import { logHandler } from "../utils/logHandler";

/**
 * Mounts the server and starts listening on port 3000.
 *
 * @param {Cache} cache The data cache to pass to the route handlers.
 */
export const serve = async (cache: Cache) => {
  logHandler.log("info", "Booting server...");
  const server = Fastify({ logger: true });

  server.get("/", () => {
    return "Server is live!";
  });

  await server.listen({ port: 3000 });
  logHandler.log("info", "Server is running!");
};
