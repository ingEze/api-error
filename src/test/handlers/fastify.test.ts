import { FastifyReply, FastifyRequest } from 'fastify'
import { ErrorHandler } from 'src/errors'
import { fastifyHandlerMiddleware } from 'src/handlers/fastify'

describe ('Error instanceof ErrorHandler', () => {
  let req: Partial<FastifyRequest>
  let reply: Partial<FastifyReply> = {
    code: jest.fn().mockReturnThis(),
    send: jest.fn().mockReturnThis()
  }

  beforeEach(() => {
    req = {}
    reply = {
      code: jest.fn().mockReturnThis(),
      send: jest.fn().mockReturnThis()
    }

  })

  it ('custom error', () => {
    const err = new ErrorHandler('Custom error', 400, 'CUSTOM_ERROR', { id: 1, info: 'Custom error' })

    fastifyHandlerMiddleware(err, req as FastifyRequest, reply as FastifyReply)
    expect(reply.code).toHaveBeenCalledWith(err.statusCode)
    expect(reply.send).toHaveBeenCalledWith(err.toJSON())
  })

  it ('generic error',() => {
    const err = new Error('Unexpected error')

    fastifyHandlerMiddleware(err, req as FastifyRequest, reply as FastifyReply)

    expect(reply.code).toHaveBeenCalledWith(500)
    expect(reply.send).toHaveBeenCalledWith({
      success: false,
      type: 'INTERNAL_SERVER_ERROR',
      statusCode: 500,
      message: 'Unexpected error'
    })

  })
})
