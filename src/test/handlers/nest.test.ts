/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { NestErrorFilter, NestGenericErrorFilter } from 'src/handlers/nest'
import { ErrorHandler } from 'src/errors/error-handler'
import { ArgumentsHost, HttpException } from '@nestjs/common'

describe('NestErrorFilter', () => {
  let filter: NestErrorFilter
  let mockResponse: any
  let mockHost: ArgumentsHost

  beforeEach(() => {
    filter = new NestErrorFilter()
    mockResponse = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    }
    mockHost = {
      switchToHttp: () => ({
        getResponse: () => mockResponse
      })
    } as unknown as ArgumentsHost
  })

  it('should handle ErrorHandler and respond with its status and JSON', () => {
    const error = new ErrorHandler('Custom error', 418)
    jest.spyOn(error, 'toJSON').mockReturnValue({
      success: false,
      type: 'CUSTOM_ERROR',
      statusCode: 418,
      message: 'Custom error'
    })

    filter.catch(error, mockHost)

    expect(mockResponse.status).toHaveBeenCalledWith(418)
    expect(mockResponse.json).toHaveBeenCalledWith({
      success: false,
      type: 'CUSTOM_ERROR',
      statusCode: 418,
      message: 'Custom error'
    })
  })
})

describe('NestGenericErrorFilter', () => {
  let filter: NestGenericErrorFilter
  let mockResponse: any
  let mockHost: ArgumentsHost

  beforeEach(() => {
    filter = new NestGenericErrorFilter()
    mockResponse = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    }
    mockHost = {
      switchToHttp: () => ({
        getResponse: () => mockResponse
      })
    } as unknown as ArgumentsHost
  })

  it('should handle HttpException and respond with its status and message', () => {
    class CustomHttpException extends HttpException {
      constructor() {
        super('Http error occurred', 400)
      }
    }
    const exception = new CustomHttpException()

    filter.catch(exception, mockHost)

    expect(mockResponse.status).toHaveBeenCalledWith(400)
    expect(mockResponse.json).toHaveBeenCalledWith({
      success: false,
      type: 'HTTP_EXCEPTION',
      statusCode: 400,
      message: 'Http error occurred'
    })
  })

  it('should handle generic Error and respond with 500', () => {
    const exception = new Error('Some error')

    filter.catch(exception, mockHost)

    expect(mockResponse.status).toHaveBeenCalledWith(500)
    expect(mockResponse.json).toHaveBeenCalledWith({
      success: false,
      type: 'INTERNAL_SERVER_ERROR',
      statusCode: 500,
      message: 'An unexpected error occurred'
    })
  })
})
