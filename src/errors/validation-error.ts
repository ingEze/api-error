/**
 * Defines custom error classes for handling various validation error scenarios (HTTP 422).
 *
 * Each class extends `ValidationError`, which itself extends `ErrorHandler`.
 * These errors represent specific validation failures and provide
 * descriptive messages and error types for easier error handling and debugging.
 *
 * @module errors/validation-error
 */

import { ErrorHandler } from './error-handler'
import type { ValidationErrorType } from '../types/index'

/**
 * Represents a generic validation error (HTTP 422).
 *
 * This error is thrown when the client sends data that is syntactically correct
 * but semantically invalid (e.g., missing required fields, invalid formats).
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
 *   "message": "Validation error",
 *   "statusCode": 422,
 *   "type": "VALIDATION",
 *   "details": {} // Optional, provided by the user with extra error context
 * }
 * ```
 * - `details`: Optional object with additional error context, set by the user when throwing the error.
 */
export class ValidationError extends ErrorHandler {
  /**
   * Creates a new ValidationError instance with optional details.
   *
   * @param {Record<string, unknown>=} details - Additional error details describing the validation failure.
   */
  constructor(details?: Record<string, unknown>)

  /**
   * Creates a new ValidationError instance with a custom message, type, and optional details.
   *
   * @param {string} message - A custom error message describing the validation issue.
   * @param {ValidationErrorType=} type - A specific error type identifier.
   * @param {Record<string, unknown>=} details - Additional error details.
   */
  constructor(message?: string, type?: ValidationErrorType, details?: Record<string, unknown>)

  constructor(
    messageOrDetails?: string | Record<string, unknown>,
    type: ValidationErrorType = 'VALIDATION',
    details?: Record<string, unknown>
  ) {
    if (typeof messageOrDetails === 'string') {
      super(messageOrDetails, 422, type, details)
    } else {
      super('Validation error', 422, type, messageOrDetails)
    }
  }
}

/**
 * Error for user validation failure.
 *
 * @extends ValidationError
 *
 * Response example:
 * ```json
 * {
 *   "success": false,
 *   "message": "User validation failed",
 *   "statusCode": 422,
 *   "type": "VALIDATION_USER",
 *   "details": {} // Optional, provided by the user with extra error context
 * }
 * ```
 * - `details`: Optional object with additional information about the user validation failure, set by the user.
 */
export class ValidationUserError extends ValidationError {
  constructor(details?: Record<string, unknown>) {
    super('User validation failed', 'VALIDATION_USER', details)
  }
}

/**
 * Error for email validation failure.
 *
 * @extends ValidationError
 *
 * Response example:
 * ```json
 * {
 *   "success": false,
 *   "message": "Email validation failed",
 *   "statusCode": 422,
 *   "type": "VALIDATION_EMAIL",
 *   "details": {} // Optional, provided by the user with extra error context
 * }
 * ```
 * - `details`: Optional object with additional information about the email validation failure, set by the user.
 */
export class ValidationEmailError extends ValidationError {
  constructor(details?: Record<string, unknown>) {
    super('Email validation failed', 'VALIDATION_EMAIL', details)
  }
}

/**
 * Error for product validation failure.
 *
 * @extends ValidationError
 *
 * Response example:
 * ```json
 * {
 *   "success": false,
 *   "message": "Product validation failed",
 *   "statusCode": 422,
 *   "type": "VALIDATION_PRODUCT",
 *   "details": {} // Optional, provided by the user with extra error context
 * }
 * ```
 * - `details`: Optional object with additional information about the product validation failure, set by the user.
 */
export class ValidationProductError extends ValidationError {
  constructor(details?: Record<string, unknown>) {
    super('Product validation failed', 'VALIDATION_PRODUCT', details)
  }
}

/**
 * Error for post validation failure.
 *
 * @extends ValidationError
 *
 * Response example:
 * ```json
 * {
 *   "success": false,
 *   "message": "Post validation failed",
 *   "statusCode": 422,
 *   "type": "VALIDATION_POST",
 *   "details": {} // Optional, provided by the user with extra error context
 * }
 * ```
 * - `details`: Optional object with additional information about the post validation failure, set by the user.
 */
export class ValidationPostError extends ValidationError {
  constructor(details?: Record<string, unknown>) {
    super('Post validation failed', 'VALIDATION_POST', details)
  }
}

/**
 * Error for comment validation failure.
 *
 * @extends ValidationError
 *
 * Response example:
 * ```json
 * {
 *   "success": false,
 *   "message": "Comment validation failed",
 *   "statusCode": 422,
 *   "type": "VALIDATION_COMMENT",
 *   "details": {} // Optional, provided by the user with extra error context
 * }
 * ```
 * - `details`: Optional object with additional information about the comment validation failure, set by the user.
 */
export class ValidationCommentError extends ValidationError {
  constructor(details?: Record<string, unknown>) {
    super('Comment validation failed', 'VALIDATION_COMMENT', details)
  }
}

/**
 * Error for category validation failure.
 *
 * @extends ValidationError
 *
 * Response example:
 * ```json
 * {
 *   "success": false,
 *   "message": "Category validation failed",
 *   "statusCode": 422,
 *   "type": "VALIDATION_CATEGORY",
 *   "details": {} // Optional, provided by the user with extra error context
 * }
 * ```
 * - `details`: Optional object with additional information about the category validation failure, set by the user.
 */
export class ValidationCategoryError extends ValidationError {
  constructor(details?: Record<string, unknown>) {
    super('Category validation failed', 'VALIDATION_CATEGORY', details)
  }
}

/**
 * Error for file validation failure.
 *
 * @extends ValidationError
 *
 * Response example:
 * ```json
 * {
 *   "success": false,
 *   "message": "File validation failed",
 *   "statusCode": 422,
 *   "type": "VALIDATION_FILE",
 *   "details": {} // Optional, provided by the user with extra error context
 * }
 * ```
 * - `details`: Optional object with additional information about the file validation failure, set by the user.
 */
export class ValidationFileError extends ValidationError {
  constructor(details?: Record<string, unknown>) {
    super('File validation failed', 'VALIDATION_FILE', details)
  }
}

/**
 * Error for image validation failure.
 *
 * @extends ValidationError
 *
 * Response example:
 * ```json
 * {
 *   "success": false,
 *   "message": "Image validation failed",
 *   "statusCode": 422,
 *   "type": "VALIDATION_IMAGE",
 *   "details": {} // Optional, provided by the user with extra error context
 * }
 * ```
 * - `details`: Optional object with additional information about the image validation failure, set by the user.
 */
export class ValidationImageError extends ValidationError {
  constructor(details?: Record<string, unknown>) {
    super('Image validation failed', 'VALIDATION_IMAGE', details)
  }
}

/**
 * Error for address validation failure.
 *
 * @extends ValidationError
 *
 * Response example:
 * ```json
 * {
 *   "success": false,
 *   "message": "Address validation failed",
 *   "statusCode": 422,
 *   "type": "VALIDATION_ADDRESS",
 *   "details": {} // Optional, provided by the user with extra error context
 * }
 * ```
 * - `details`: Optional object with additional information about the address validation failure, set by the user.
 */
export class ValidationAddressError extends ValidationError {
  constructor(details?: Record<string, unknown>) {
    super('Address validation failed', 'VALIDATION_ADDRESS', details)
  }
}
