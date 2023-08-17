import cors from "@fastify/cors";
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

  await server.register(cors, {
    origin: (origin, cb) => {
      if (!origin) {
        cb(new Error("No origin"), false);
        return;
      }
      const hostname = new URL(origin).hostname;
      if (hostname === "localhost") {
        cb(null, true);
        return;
      }
      cb(new Error("Not allowed"), false);
    },
  });

  server.get("/", () => {
    return "Server is live!";
  });

  server.get("/leaderboard", () => {
    return cache.public;
  });

  await server.listen({ port: 3000 });
  logHandler.log("info", "Server is running!");
};
