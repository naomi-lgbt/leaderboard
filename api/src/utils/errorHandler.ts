import { logHandler } from "./logHandler";
import { isNodeError } from "./typeGuards";

/**
 * Formats and logs an error to the terminal.
 *
 * @param { string } context A description of the code context in which the error occurred.
 * @param {unknown} error The error.
 */
export const errorHandler = (context: string, error: unknown) => {
  if (!isNodeError(error)) {
    logHandler.log("error", `There was an error in the ${context}!`);
    logHandler.log("error", error);
    return;
  }
  logHandler.log("error", `There was an error in the ${context}!`);
  logHandler.log("error", error.message);
  if (error.stack) {
    logHandler.log("error", error.stack);
  }
};
