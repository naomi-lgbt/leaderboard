import Fastify from "fastify";

import { Cache } from "../interfaces/Cache";
import { logHandler } from "../utils/logHandler";
import { FastifySchemas } from "../config/FastifySchemas";

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

  server.get("/leaderboard", { schema: FastifySchemas.Leaderboard }, () => {
    return cache.public;
  });

  await server.listen({ port: 3000 });
  logHandler.log("info", "Server is running!");
};
