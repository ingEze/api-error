/**
 * Defines custom error classes for handling various "not found" scenarios (HTTP 404).
 *
 * Each class extends `NotFoundError`, which itself extends `ErrorHandler`.
 * These errors represent specific resource-not-found cases and provide
 * descriptive messages and error types for easier error handling and debugging.
 *
 * @module errors/not-found-error
 */

import type { NotFoundErrorType } from '../types/index'
import { ErrorHandler } from './error-handler'

/**
 * Represents a generic "Not Found" error corresponding to HTTP status 404.
 *
 * This error can be instantiated in two ways:
 * 1. By passing an optional `details` object with additional error information.
 *    In this case, the error message defaults to "Resource not found".
 * 2. By passing a custom message string, an optional error type, and optional details.
 *
 * @extends ErrorHandler
 *
 * Response example:
 * ```json
 * {
 *   "success": false,
 *   "message": "Resource not found",
 *   "statusCode": 404,
 *   "type": "NOT_FOUND",
 *   "details": {} // Optional, provided by the user with extra error context
 * }
 * ```
 * - `details`: Optional object with additional error context, set by the user when throwing the error.
 */
export class NotFoundError extends ErrorHandler {
  constructor(details?: Record<string, unknown>);
  constructor(message?: string, type?: NotFoundErrorType, details?: Record<string, unknown>);
  constructor(
    messageOrDetails?: string | Record<string, unknown>,
    type: NotFoundErrorType = 'NOT_FOUND',
    details?: Record<string, unknown>
  ) {
    if (typeof messageOrDetails === 'string') {
      super(messageOrDetails, 404, type, details)
    } else {
      super('Resource not found', 404, type, messageOrDetails)
    }
  }
}

/**
 * Error thrown when a specific user is not found.
 *
 * @extends NotFoundError
 *
 * Response example:
 * ```json
 * {
 *   "success": false,
 *   "message": "User not found",
 *   "statusCode": 404,
 *   "type": "NOT_FOUND_USER",
 *   "details": {} // Optional, provided by the user with extra error context
 * }
 * ```
 * - `details`: Optional object with additional information about the user not found, set by the user.
 */
export class UserNotFoundError extends NotFoundError {
  constructor(details?: Record<string, unknown>) {
    super('User not found', 'NOT_FOUND_USER', details)
  }
}

/**
 * Error for email not found.
 *
 * @extends NotFoundError
 *
 * Response example:
 * ```json
 * {
 *   "success": false,
 *   "message": "Email not found",
 *   "statusCode": 404,
 *   "type": "NOT_FOUND_EMAIL",
 *   "details": {} // Optional, provided by the user with extra error context
 * }
 * ```
 * - `details`: Optional object with additional information about the email not found, set by the user.
 */
export class EmailNotFoundError extends NotFoundError {
  constructor(details?: Record<string, unknown>) {
    super('Email not found', 'NOT_FOUND_EMAIL', details)
  }
}

/**
 * Error for product not found.
 *
 * @extends NotFoundError
 *
 * Response example:
 * ```json
 * {
 *   "success": false,
 *   "message": "Product not found",
 *   "statusCode": 404,
 *   "type": "NOT_FOUND_PRODUCT",
 *   "details": {} // Optional, provided by the user with extra error context
 * }
 * ```
 * - `details`: Optional object with additional information about the product not found, set by the user.
 */
export class ProductNotFoundError extends NotFoundError {
  constructor(details?: Record<string, unknown>) {
    super('Product not found', 'NOT_FOUND_PRODUCT', details)
  }
}

/**
 * Error for post not found.
 *
 * @extends NotFoundError
 *
 * Response example:
 * ```json
 * {
 *   "success": false,
 *   "message": "Post not found",
 *   "statusCode": 404,
 *   "type": "NOT_FOUND_POST",
 *   "details": {} // Optional, provided by the user with extra error context
 * }
 * ```
 * - `details`: Optional object with additional information about the post not found, set by the user.
 */
export class PostNotFoundError extends NotFoundError {
  constructor(details?: Record<string, unknown>) {
    super('Post not found', 'NOT_FOUND_POST', details)
  }
}

/**
 * Error for comment not found.
 *
 * @extends NotFoundError
 *
 * Response example:
 * ```json
 * {
 *   "success": false,
 *   "message": "Comment not found",
 *   "statusCode": 404,
 *   "type": "NOT_FOUND_COMMENT",
 *   "details": {} // Optional, provided by the user with extra error context
 * }
 * ```
 * - `details`: Optional object with additional information about the comment not found, set by the user.
 */
export class CommentNotFoundError extends NotFoundError {
  constructor(details?: Record<string, unknown>) {
    super('Comment not found', 'NOT_FOUND_COMMENT', details)
  }
}

/**
 * Error for category not found.
 *
 * @extends NotFoundError
 *
 * Response example:
 * ```json
 * {
 *   "success": false,
 *   "message": "Category not found",
 *   "statusCode": 404,
 *   "type": "NOT_FOUND_CATEGORY",
 *   "details": {} // Optional, provided by the user with extra error context
 * }
 * ```
 * - `details`: Optional object with additional information about the category not found, set by the user.
 */
export class CategoryNotFoundError extends NotFoundError {
  constructor(details?: Record<string, unknown>) {
    super('Category not found', 'NOT_FOUND_CATEGORY', details)
  }
}

/**
 * Error for file not found.
 *
 * @extends NotFoundError
 *
 * Response example:
 * ```json
 * {
 *   "success": false,
 *   "message": "File not found",
 *   "statusCode": 404,
 *   "type": "NOT_FOUND_FILE",
 *   "details": {} // Optional, provided by the user with extra error context
 * }
 * ```
 * - `details`: Optional object with additional information about the file not found, set by the user.
 */
export class FileNotFoundError extends NotFoundError {
  constructor(details?: Record<string, unknown>) {
    super('File not found', 'NOT_FOUND_FILE', details)
  }
}

/**
 * Error for image not found.
 *
 * @extends NotFoundError
 *
 * Response example:
 * ```json
 * {
 *   "success": false,
 *   "message": "Image not found",
 *   "statusCode": 404,
 *   "type": "NOT_FOUND_IMAGE",
 *   "details": {} // Optional, provided by the user with extra error context
 * }
 * ```
 * - `details`: Optional object with additional information about the image not found, set by the user.
 */
export class ImageNotFoundError extends NotFoundError {
  constructor(details?: Record<string, unknown>) {
    super('Image not found', 'NOT_FOUND_IMAGE', details)
  }
}

/**
 * Error for address not found.
 *
 * @extends NotFoundError
 *
 * Response example:
 * ```json
 * {
 *   "success": false,
 *   "message": "Address not found",
 *   "statusCode": 404,
 *   "type": "NOT_FOUND_ADDRESS",
 *   "details": {} // Optional, provided by the user with extra error context
 * }
 * ```
 * - `details`: Optional object with additional information about the address not found, set by the user.
 */
export class AddressNotFoundError extends NotFoundError {
  constructor(details?: Record<string, unknown>) {
    super('Address not found', 'NOT_FOUND_ADDRESS', details)
  }
}
