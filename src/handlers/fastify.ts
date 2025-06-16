import { FastifyReply, FastifyRequest } from 'fastify'
import { ErrorHandler } from 'src/errors'

/**
 * Fastify middleware for handling errors in a Fastify application.
 * This middleware processes errors thrown during request handling, formatting them into a standardized JSON response.
 * If the error is an instance of `ErrorHandler`, it uses the error's status code and JSON representation.
 * Otherwise, it returns a generic 500 Internal Server Error response with a default message.
 *
 * @param err - The error object thrown during request processing.
 * @param req - The Fastify request object.
 * @param reply - The Fastify reply object used to send the response.
 * @returns void - This middleware does not return a value; it sends a response directly via the `reply` object.
 *
 * @example
 * ```typescript
 * import fastify from 'fastify';
 * import { fastifyErrorMiddleware } from '@ingeze/api-error';
 *
 * const app = fastify();
 * app.setErrorHandler(fastifyErrorMiddleware);
 * ```
 */
export function fastifyErrorMiddleware(err: Error, req: FastifyRequest, reply: FastifyReply): void {
  if (err instanceof ErrorHandler) {
    reply.code(err.statusCode).send(err.toJSON())
    return
  }

  reply.code(500).send({
    success: false,
    type: 'INTERNAL_SERVER_ERROR',
    statusCode: 500,
    message: err.message || 'Unexpected error'
  })
}
