/**
 * Defines custom error classes for handling various unauthorized scenarios (HTTP 401).
 *
 * Each class extends `UnauthorizedError`, which itself extends `ErrorHandler`.
 * These errors represent specific authentication or authorization failures and provide
 * descriptive messages and error types for easier error handling and debugging.
 *
 * @module errors/unauthorized-error
 */

import type { UnauthorizedErrorType } from 'src/types/unauthorized-error.types'
import { ErrorHandler } from '.'

/**
 * Represents a generic unauthorized error (HTTP 401).
 *
 * @extends ErrorHandler
 */
export class UnauthorizedError extends ErrorHandler {
  /**
   * Creates a new UnauthorizedError instance.
   *
   * @param {string} [message='Unauthorized'] Error message.
   * @param {UnauthorizedErrorType} [type='UNAUTHORIZED'] Specific unauthorized error type.
   * @param {Record<string, unknown>=} details Optional additional error details.
   */
  constructor(message: string = 'Unauthorized', type: UnauthorizedErrorType = 'UNAUTHORIZED', details?: Record<string, unknown>) {
    super(message, 401, type, details)
  }
}

/**
 * Error for invalid token.
 *
 * @extends UnauthorizedError
 */
export class InvalidTokenError extends UnauthorizedError {
  /**
   * Creates a new InvalidTokenError instance.
   *
   * @param {Record<string, unknown>=} details Optional additional error details.
   */
  constructor(details?: Record<string, unknown>) {
    super('Invalid token', 'INVALID_TOKEN', details)
  }
}

/**
 * Error for invalid credentials.
 *
 * @extends UnauthorizedError
 */
export class InvalidCredentialsError extends UnauthorizedError {
  /**
   * Creates a new InvalidCredentialsError instance.
   *
   * @param {Record<string, unknown>} details Additional error details.
   */
  constructor(details: Record<string, unknown>) {
    super('Invalid credentials', 'INVALID_CREDENTIALS', details)
  }
}

/**
 * Error for invalid or expired access token.
 *
 * @extends UnauthorizedError
 */
export class AccessTokenError extends UnauthorizedError {
  /**
   * Creates a new AccessTokenError instance.
   *
   * @param {Record<string, unknown>} details Additional error details.
   */
  constructor(details: Record<string, unknown>) {
    super('Access token invalid or expired', 'ACCESS_TOKEN_INVALID', details)
  }
}

/**
 * Error for invalid or expired refresh token.
 *
 * @extends UnauthorizedError
 */
export class RefreshTokenError extends UnauthorizedError {
  /**
   * Creates a new RefreshTokenError instance.
   *
   * @param {Record<string, unknown>} details Additional error details.
   */
  constructor(details: Record<string, unknown>) {
    super('Refresh token invalid or expired', 'REFRESH_TOKEN_INVALID', details)
  }
}

/**
 * Error for invalid API key.
 *
 * @extends UnauthorizedError
 */
export class APIKeyError extends UnauthorizedError {
  /**
   * Creates a new APIKeyError instance.
   *
   * @param {Record<string, unknown>} details Additional error details.
   */
  constructor(details: Record<string, unknown>) {
    super('Invalid API key', 'API_KEY_INVALID', details)
  }
}

/**
 * Error for unauthorized device.
 *
 * @extends UnauthorizedError
 */
export class UnauthorizedDeviceError extends UnauthorizedError {
  /**
   * Creates a new UnauthorizedDeviceError instance.
   *
   * @param {Record<string, unknown>} details Additional error details.
   */
  constructor(details: Record<string, unknown>) {
    super('Unauthorized device', 'UNAUTHORIZED_DEVICE', details)
  }
}
