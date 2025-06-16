import { Request, Response, NextFunction } from 'express'
import { ErrorHandler } from '../errors/index.js'

/**
 * Express error handling middleware for the `@ingeze/api-error` package.
 * This middleware processes errors thrown during request handling in an Express application,
 * formatting them into a standardized JSON response for API consistency.
 * If the error is an instance of `ErrorHandler`, it uses the error's status code and JSON representation.
 * Otherwise, it returns a generic 500 Internal Server Error response with a default message.
 *
 * @param err - The error object thrown during request processing.
 * @param req - The Express request object.
 * @param res - The Express response object used to send the response.
 * @param next - The Express next function (not used in this middleware).
 * @returns void - This middleware does not return a value; it sends a response directly via the `res` object.
 *
 * @example
 * ```typescript
 * import express from 'express';
 * import { expressErrorMiddleware } from '@ingeze/api-error';
 *
 * const app = express();
 * app.use(expressErrorMiddleware);
 * ```
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function expressErrorMiddleware(err: Error, req: Request, res: Response, next: NextFunction): void {
  if (err instanceof ErrorHandler) {
    res.status(err.statusCode).json(err.toJSON())
  } else {
    res.status(500).json({
      success: false,
      statusCode: 500,
      type: 'INTERNAL_SERVER_ERROR',
      message: 'An unexpected error occurred'
    })
  }
}
