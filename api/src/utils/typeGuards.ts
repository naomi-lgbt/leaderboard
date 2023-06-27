/**
 * Because TypeScript updated catch blocks to type error as unknown,
 * we need to check if the error is a NodeJS error.
 *
 * @param {unknown} error The error object.
 * @returns {boolean} Whether or not the error is a NodeJS error.
 */
export const isNodeError = (error: unknown): error is Error => {
  return error instanceof Error;
};
