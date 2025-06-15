import { ExceptionFilter, Catch, ArgumentsHost, HttpException } from '@nestjs/common'
import { Response } from 'express'
import { ErrorHandler } from '../errors/error-handler'

@Catch(ErrorHandler)
export class NestErrorHandlerFilter implements ExceptionFilter {
  catch(exception: ErrorHandler, host: ArgumentsHost): void {
    const ctx  = host.switchToHttp()
    const response = ctx.getResponse<Response>()

    response.status(exception.statusCode).json(exception.toJSON())
  }
}

@Catch()
export class NestGenericErrorFilter implements ExceptionFilter {
  catch(exception: Error, host: ArgumentsHost): void {
    const ctx = host.switchToHttp()
    const response = ctx.getResponse<Response>()

    if (exception instanceof HttpException) {
      const status = (exception as HttpException).getStatus()
      const message = exception.message || 'An error occurred'
      response.status(status).json({
        success: false,
        type: 'HTTP_EXCEPTION',
        statusCode: status,
        message
      })
    }

    response.status(500).json({
      success: false,
      type: 'INTERNAL_SERVER_ERROR',
      statusCode: 500,
      message: 'An unexpected error occurred'
    })
  }
}
