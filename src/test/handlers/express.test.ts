import { NextFunction, Request, Response } from 'express'
import { beforeEach, describe } from 'node:test'
import { ErrorHandler } from 'src/errors/error-handler'
import { expressErrorMiddleware } from 'src/handlers/express'

describe('expressHandlerMiddleware with mocks', () => {
  let req: Partial<Request>

  let res: Partial<Response> = {
    status: jest.fn().mockReturnThis(),
    json: jest.fn().mockReturnThis()
  }
  let next: jest.Mock

  beforeEach(() => {
    req = {}
    res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn().mockReturnThis()
    }
    next = jest.fn()
  })

  it('handles custom ErrorHandler', () => {
    const err = new ErrorHandler('Custom error', 400, 'CUSTOM_ERROR', { id: 1, info: 'Custom error' })
    expressErrorMiddleware(err, req as Request, res as Response, next as NextFunction)

    expect(res.status).toHaveBeenCalledWith(400)
    expect(res.json).toHaveBeenCalledWith(err.toJSON())
  })

  it ('handles generic error', () => {
    const err = new Error('Something went wrong')

    expressErrorMiddleware(err, req as Request, res as Response, next as NextFunction)

    expect(res.status).toHaveBeenCalledWith(500)
    expect(res.json).toHaveBeenCalledWith({
      success: false,
      statusCode: 500,
      type: 'INTERNAL_SERVER_ERROR',
      message: 'An unexpected error occurred'
    })
  })

  it('handles ZodError (simulated)', () => {
    const zodLikeError = {
      name: 'ZodError',
      issues: [
        { code: 'unrecognized_keys', keys: ['hack'] },
        { message: 'Email is not valid' }
      ]
    }

    expressErrorMiddleware(zodLikeError as any, req as Request, res as Response, next as NextFunction)

    expect(res.status).toHaveBeenCalledWith(422)
    expect(res.json).toHaveBeenCalledWith({
      success: false,
      statusCode: 422,
      type: 'VALIDATION_USER',
      message: 'User validation failed',
      details: {
        reason: 'Unexpected fields: hack. Email is not valid'
      }
    })
  })
})
