/**
 * Defines custom error classes for handling various unauthorized scenarios (HTTP 401).
 *
 * Each class extends `UnauthorizedError`, which itself extends `ErrorHandler`.
 * These errors represent specific authentication or authorization failures and provide
 * descriptive messages and error types for easier error handling and debugging.
 *
 * @module errors/unauthorized-error
 */

import type { UnauthorizedErrorType } from '../types/index'
import { ErrorHandler } from './error-handler'

/**
 * Represents a generic unauthorized error (HTTP 401).
 *
 * This error is thrown when the request requires user authentication
 * but the client has failed to provide valid credentials.
 *
 * Can be instantiated with either a custom message, type, and optional details,
 * or directly with a `details` object.
 *
 * @extends ErrorHandler
 *
 * Response example:
 * ```json
 * {
 *   "success": false,
 *   "message": "Unauthorized",
 *   "statusCode": 401,
 *   "type": "UNAUTHORIZED",
 *   "details": {} // Optional, provided by the user with extra error context
 * }
 * ```
 * - `details`: Optional object with additional error context, set by the user when throwing the error.
 */
export class UnauthorizedError extends ErrorHandler {
  /**
   * Creates a new UnauthorizedError instance with optional details.
   *
   * @param {Record<string, unknown>=} details - Additional error details related to the authentication failure.
   */
  constructor(details?: Record<string, unknown>)

  /**
   * Creates a new UnauthorizedError instance with a custom message, type, and optional details.
   *
   * @param {string} message - A custom error message describing the authentication issue.
   * @param {UnauthorizedErrorType=} type - A specific unauthorized error type identifier.
   * @param {Record<string, unknown>=} details - Additional error details.
   */
  constructor(message?: string, type?: UnauthorizedErrorType, details?: Record<string, unknown>)

  constructor(
    messageOrDetails?: string | Record<string, unknown>,
    type: UnauthorizedErrorType = 'UNAUTHORIZED',
    details?: Record<string, unknown>
  ) {
    if (typeof messageOrDetails === 'string') {
      super(messageOrDetails, 401, type, details)
    } else {
      super('Unauthorized', 401, type, messageOrDetails)
    }
  }
}

/**
 * Error for invalid token.
 *
 * @extends UnauthorizedError
 *
 * Response example:
 * ```json
 * {
 *   "success": false,
 *   "message": "Invalid token",
 *   "statusCode": 401,
 *   "type": "INVALID_TOKEN",
 *   "details": {} // Optional, provided by the user with extra error context
 * }
 * ```
 * - `details`: Optional object with additional information about the invalid token, set by the user.
 */
export class InvalidTokenError extends UnauthorizedError {
  constructor(details?: Record<string, unknown>) {
    super('Invalid token', 'INVALID_TOKEN', details)
  }
}

/**
 * Error for invalid credentials.
 *
 * @extends UnauthorizedError
 *
 * Response example:
 * ```json
 * {
 *   "success": false,
 *   "message": "Invalid credentials",
 *   "statusCode": 401,
 *   "type": "INVALID_CREDENTIALS",
 *   "details": {} // Optional, provided by the user with extra error context
 * }
 * ```
 * - `details`: Optional object with additional information about the invalid credentials, set by the user.
 */
export class InvalidCredentialsError extends UnauthorizedError {
  constructor(details: Record<string, unknown>) {
    super('Invalid credentials', 'INVALID_CREDENTIALS', details)
  }
}

/**
 * Error for invalid or expired access token.
 *
 * @extends UnauthorizedError
 *
 * Response example:
 * ```json
 * {
 *   "success": false,
 *   "message": "Access token invalid or expired",
 *   "statusCode": 401,
 *   "type": "ACCESS_TOKEN_INVALID",
 *   "details": {} // Optional, provided by the user with extra error context
 * }
 * ```
 * - `details`: Optional object with additional information about the invalid or expired access token, set by the user.
 */
export class AccessTokenError extends UnauthorizedError {
  constructor(details: Record<string, unknown>) {
    super('Access token invalid or expired', 'ACCESS_TOKEN_INVALID', details)
  }
}

/**
 * Error for invalid or expired refresh token.
 *
 * @extends UnauthorizedError
 *
 * Response example:
 * ```json
 * {
 *   "success": false,
 *   "message": "Refresh token invalid or expired",
 *   "statusCode": 401,
 *   "type": "REFRESH_TOKEN_INVALID",
 *   "details": {} // Optional, provided by the user with extra error context
 * }
 * ```
 * - `details`: Optional object with additional information about the invalid or expired refresh token, set by the user.
 */
export class RefreshTokenError extends UnauthorizedError {
  constructor(details: Record<string, unknown>) {
    super('Refresh token invalid or expired', 'REFRESH_TOKEN_INVALID', details)
  }
}

/**
 * Error for invalid API key.
 *
 * @extends UnauthorizedError
 *
 * Response example:
 * ```json
 * {
 *   "success": false,
 *   "message": "Invalid API key",
 *   "statusCode": 401,
 *   "type": "API_KEY_INVALID",
 *   "details": {} // Optional, provided by the user with extra error context
 * }
 * ```
 * - `details`: Optional object with additional information about the invalid API key, set by the user.
 */
export class APIKeyError extends UnauthorizedError {
  constructor(details: Record<string, unknown>) {
    super('Invalid API key', 'API_KEY_INVALID', details)
  }
}

/**
 * Error for unauthorized device.
 *
 * @extends UnauthorizedError
 *
 * Response example:
 * ```json
 * {
 *   "success": false,
 *   "message": "Unauthorized device",
 *   "statusCode": 401,
 *   "type": "UNAUTHORIZED_DEVICE",
 *   "details": {} // Optional, provided by the user with extra error context
 * }
 * ```
 * - `details`: Optional object with additional information about the unauthorized device, set by the user.
 */
export class UnauthorizedDeviceError extends UnauthorizedError {
  constructor(details: Record<string, unknown>) {
    super('Unauthorized device', 'UNAUTHORIZED_DEVICE', details)
  }
}
