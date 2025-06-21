/**
 * Defines custom error classes for handling various forbidden scenarios (HTTP 403).
 *
 * Each class extends `ForbiddenError`, which in turn extends `ErrorHandler`.
 * These classes represent specific authorization failures and provide
 * descriptive messages and error types for easier error handling and debugging.
 *
 * @module errors/forbidden-error
 */

import { ErrorHandler } from './error-handler'
import type { ForbiddenErrorType } from '../types/index'

/**
 * Represents a generic forbidden error (HTTP 403).
 *
 * Thrown when a user tries to access a resource they do not have permission for.
 * Can be instantiated with a custom message and type, or just with a `details` object.
 *
 * @extends ErrorHandler
 *
 * Response:
 * ```json
 * {
 *   "success": false,
 *   "message": "Forbidden",
 *   "statusCode": 403,
 *   "type": "FORBIDDEN",
 *   "details": {} // Optional, provided by the user with extra error context
 * }
 * ```
 * - `details`: Optional object with additional error context, set by the user when throwing the error.
 */
export class ForbiddenError extends ErrorHandler {
  /**
   * Creates a new ForbiddenError instance with optional details.
   *
   * @param {Record<string, unknown>=} details - Additional error details.
   */
  constructor(details?: Record<string, unknown>)

  /**
   * Creates a new ForbiddenError instance with a message, type, and optional details.
   *
   * @param {string} message - Custom error message.
   * @param {ForbiddenErrorType=} type - Specific error type identifier.
   * @param {Record<string, unknown>=} details - Additional error details.
   */
  constructor(message?: string, type?: ForbiddenErrorType, details?: Record<string, unknown>)

  constructor(
    messageOrDetails?: string | Record<string, unknown>,
    type: ForbiddenErrorType = 'FORBIDDEN',
    details?: Record<string, unknown>
  ) {
    if (typeof messageOrDetails === 'string') {
      super(messageOrDetails, 403, type, details)
    } else {
      super('Forbidden', 403, type, messageOrDetails)
    }
  }
}

/**
 * Error for forbidden user access.
 *
 * @extends ForbiddenError
 *
 * Response:
 * ```json
 * {
 *   "success": false,
 *   "message": "User access forbidden",
 *   "statusCode": 403,
 *   "type": "FORBIDDEN_USER",
 *   "details": {} // Optional, provided by the user with extra error context
 * }
 * ```
 * - `details`: Optional object with additional information about the forbidden user access, set by the user.
 */
export class ForbiddenUserError extends ForbiddenError {
  constructor(details?: Record<string, unknown>) {
    super('User access forbidden', 'FORBIDDEN_USER', details)
  }
}

/**
 * Error for forbidden email access.
 *
 * @extends ForbiddenError
 *
 * Response:
 * ```json
 * {
 *   "success": false,
 *   "message": "Email access forbidden",
 *   "statusCode": 403,
 *   "type": "FORBIDDEN_EMAIL",
 *   "details": {} // Optional, provided by the user with extra error context
 * }
 * ```
 * - `details`: Optional object with additional information about the forbidden email access, set by the user.
 */
export class ForbiddenEmailError extends ForbiddenError {
  constructor(details?: Record<string, unknown>) {
    super('Email access forbidden', 'FORBIDDEN_EMAIL', details)
  }
}

/**
 * Error for forbidden product access.
 *
 * @extends ForbiddenError
 *
 * Response:
 * ```json
 * {
 *   "success": false,
 *   "message": "Product access forbidden",
 *   "statusCode": 403,
 *   "type": "FORBIDDEN_PRODUCT",
 *   "details": {} // Optional, provided by the user with extra error context
 * }
 * ```
 * - `details`: Optional object with additional information about the forbidden product access, set by the user.
 */
export class ForbiddenProductError extends ForbiddenError {
  constructor(details?: Record<string, unknown>) {
    super('Product access forbidden', 'FORBIDDEN_PRODUCT', details)
  }
}

/**
 * Error for forbidden post access.
 *
 * @extends ForbiddenError
 *
 * Response:
 * ```json
 * {
 *   "success": false,
 *   "message": "Post access forbidden",
 *   "statusCode": 403,
 *   "type": "FORBIDDEN_POST",
 *   "details": {} // Optional, provided by the user with extra error context
 * }
 * ```
 * - `details`: Optional object with additional information about the forbidden post access, set by the user.
 */
export class ForbiddenPostError extends ForbiddenError {
  constructor(details?: Record<string, unknown>) {
    super('Post access forbidden', 'FORBIDDEN_POST', details)
  }
}

/**
 * Error for forbidden comment access.
 *
 * @extends ForbiddenError
 *
 * Response:
 * ```json
 * {
 *   "success": false,
 *   "message": "Comment access forbidden",
 *   "statusCode": 403,
 *   "type": "FORBIDDEN_COMMENT",
 *   "details": {} // Optional, provided by the user with extra error context
 * }
 * ```
 * - `details`: Optional object with additional information about the forbidden comment access, set by the user.
 */
export class ForbiddenCommentError extends ForbiddenError {
  constructor(details?: Record<string, unknown>) {
    super('Comment access forbidden', 'FORBIDDEN_COMMENT', details)
  }
}

/**
 * Error for forbidden category access.
 *
 * @extends ForbiddenError
 *
 * Response:
 * ```json
 * {
 *   "success": false,
 *   "message": "Category access forbidden",
 *   "statusCode": 403,
 *   "type": "FORBIDDEN_CATEGORY",
 *   "details": {} // Optional, provided by the user with extra error context
 * }
 * ```
 * - `details`: Optional object with additional information about the forbidden category access, set by the user.
 */
export class ForbiddenCategoryError extends ForbiddenError {
  constructor(details?: Record<string, unknown>) {
    super('Category access forbidden', 'FORBIDDEN_CATEGORY', details)
  }
}

/**
 * Error for forbidden file access.
 *
 * @extends ForbiddenError
 *
 * Response:
 * ```json
 * {
 *   "success": false,
 *   "message": "File access forbidden",
 *   "statusCode": 403,
 *   "type": "FORBIDDEN_FILE",
 *   "details": {} // Optional, provided by the user with extra error context
 * }
 * ```
 * - `details`: Optional object with additional information about the forbidden file access, set by the user.
 */
export class ForbiddenFileError extends ForbiddenError {
  constructor(details?: Record<string, unknown>) {
    super('File access forbidden', 'FORBIDDEN_FILE', details)
  }
}

/**
 * Error for forbidden image access.
 *
 * @extends ForbiddenError
 *
 * Response:
 * ```json
 * {
 *   "success": false,
 *   "message": "Image access forbidden",
 *   "statusCode": 403,
 *   "type": "FORBIDDEN_IMAGE",
 *   "details": {} // Optional, provided by the user with extra error context
 * }
 * ```
 * - `details`: Optional object with additional information about the forbidden image access, set by the user.
 */
export class ForbiddenImageError extends ForbiddenError {
  constructor(details?: Record<string, unknown>) {
    super('Image access forbidden', 'FORBIDDEN_IMAGE', details)
  }
}

/**
 * Error for forbidden address access.
 *
 * @extends ForbiddenError
 *
 * Response:
 * ```json
 * {
 *   "success": false,
 *   "message": "Address access forbidden",
 *   "statusCode": 403,
 *   "type": "FORBIDDEN_ADDRESS",
 *   "details": {} // Optional, provided by the user with extra error context
 * }
 * ```
 * - `details`: Optional object with additional information about the forbidden address access, set by the user.
 */
export class ForbiddenAddressError extends ForbiddenError {
  constructor(details?: Record<string, unknown>) {
    super('Address access forbidden', 'FORBIDDEN_ADDRESS', details)
  }
}
