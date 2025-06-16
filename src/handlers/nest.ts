
import { ExceptionFilter, Catch, ArgumentsHost, HttpException } from '@nestjs/common'
import { Response } from 'express'
import { ErrorHandler } from '../errors/error-handler.js'

/**
 * NestJS exception filter for handling `ErrorHandler` errors in the `@ingeze/api-error` package.
 * This filter catches errors of type `ErrorHandler`, formats them into a standardized JSON response,
 * and sends the response with the appropriate status code.
 *
 * @example
 * ```typescript
 * import { NestErrorFilter } from '@ingeze/api-error';
 *
 * @Module({
 *   providers: [
 *     {
 *       provide: APP_FILTER,
 *       useClass: NestErrorFilter,
 *     },
 *   ],
 * })
 * export class AppModule {}
 * ```
 */
@Catch(ErrorHandler)
export class NestErrorFilter implements ExceptionFilter {
  /**
   * Handles errors of type `ErrorHandler` by sending a JSON response with the error's status code and details.
   *
   * @param exception - The `ErrorHandler` instance thrown during request processing.
   * @param host - The NestJS `ArgumentsHost` object providing context for the request.
   * @returns void - Sends a response directly via the Express `Response` object.
   */
  catch(exception: ErrorHandler, host: ArgumentsHost): void {
    const ctx = host.switchToHttp()
    const response = ctx.getResponse<Response>()

    response.status(exception.statusCode).json(exception.toJSON())
  }
}

/**
 * NestJS exception filter for handling generic errors in the `@ingeze/api-error` package.
 * This filter catches all errors not handled by other filters. It processes `HttpException` errors
 * with their respective status codes and messages, and defaults to a 500 Internal Server Error
 * for unhandled errors, ensuring a standardized JSON response.
 *
 * @example
 * ```typescript
 * import { NestGenericErrorFilter } from '@ingeze/api-error';
 *
 * @Module({
 *   providers: [
 *     {
 *       provide: APP_FILTER,
 *       useClass: NestGenericErrorFilter,
 *     },
 *   ],
 * })
 * export class AppModule {}
 * ```
 */
@Catch()
export class NestGenericErrorFilter implements ExceptionFilter {
  /**
   * Handles generic errors, including `HttpException` and unhandled errors, by sending a standardized JSON response.
   * For `HttpException`, it uses the exception's status code and message. For other errors, it defaults to a 500 Internal Server Error.
   *
   * @param exception - The error object thrown during request processing.
   * @param host - The NestJS `ArgumentsHost` object providing context for the request.
   * @returns void - Sends a response directly via the Express `Response` object.
   */
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
