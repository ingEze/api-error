import type { BadRequestErrorType, NotFoundErrorType, UnauthorizedErrorType, ErrorResponse, ForbiddenErrorType, ValidationErrorType  } from 'src/types'

/**
 * Custom error handler class for the application.
 *
 * Extends the base `Error` class and allows defining errors with additional information
 * such as type, HTTP status code, message, and optional details.
 *
 * @example
 * throw new ErrorHandler('User not found', 404, 'NOT_FOUND')
 *
 * @property {boolean} success Indicates if the response was successful (always `false` for errors).
 * @property {string | NotFoundErrorType | UnauthorizedErrorType | BadRequestErrorType | ForbiddenErrorType | ValidationErrorType} type Error type.
 * @property {number} statusCode HTTP status code associated with the error.
 * @property {string} message Descriptive error message.
 * @property {Record<string, unknown>=} details Additional error details (optional).
 */
export class ErrorHandler extends Error {
  public success: boolean
  public type: string | NotFoundErrorType | UnauthorizedErrorType | BadRequestErrorType | ForbiddenErrorType | ValidationErrorType
  public statusCode: number
  public message: string
  public details?: Record<string, unknown>

  /**
   * Creates a new instance of ErrorHandler.
   *
   * @param {string} message Descriptive error message.
   * @param {number} [statusCode=500] HTTP status code (default is 500).
   * @param {string | NotFoundErrorType | UnauthorizedErrorType | BadRequestErrorType | ForbiddenErrorType | ValidationErrorType} [type='GENERIC_ERROR'] Error type.
   * @param {Record<string, unknown>=} details Additional error details (optional).
   */
  constructor(
    message: string,
    statusCode: number = 500,
    type: string | NotFoundErrorType | UnauthorizedErrorType | BadRequestErrorType | ForbiddenErrorType | ValidationErrorType = 'GENERIC_ERROR',
    details?: Record<string, unknown>
  ) {
    super(message)
    this.success = false
    this.statusCode = statusCode
    this.type = type
    this.message = message || 'Internal server error'
    this.details = details
    Error.captureStackTrace(this, this.constructor)
  }

  /**
   * Converts the error instance to a JSON object compatible with the ErrorResponse interface.
   *
   * @returns {ErrorResponse} Serializable error object.
   */
  toJSON(): ErrorResponse {
    return {
      success: this.success,
      type: this.type,
      statusCode: this.statusCode,
      message: this.message,
      ...(this.details && { details: this.details })
    }
  }
}
