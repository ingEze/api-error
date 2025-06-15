import { BadRequestErrorType, NotFoundErrorType, UnauthorizedErrorType  } from 'src/types'

interface ErrorResponse {
  success: boolean
  type: string
  statusCode: number
  message: string
  details?: Record<string, unknown>
}

export class ErrorHandler extends Error {
  public success: boolean
  public type: string | NotFoundErrorType | UnauthorizedErrorType | BadRequestErrorType
  public statusCode: number
  public message: string
  public details?: Record<string, unknown>

  constructor(
    message: string,
    statusCode: number = 500,
    type: string | NotFoundErrorType | UnauthorizedErrorType | BadRequestErrorType = 'GENERIC_ERROR',
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
