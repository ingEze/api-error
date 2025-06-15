import { FastifyReply, FastifyRequest } from 'fastify'
import { ErrorHandler } from 'src/errors'

export function fastifyHandlerMiddleware(err: Error, req: FastifyRequest, reply: FastifyReply): void {
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
