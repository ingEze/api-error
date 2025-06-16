/**
 * Defines custom error classes for handling various "not found" scenarios (HTTP 404).
 *
 * Each class extends `NotFoundError`, which itself extends `ErrorHandler`.
 * These errors represent specific resource-not-found cases and provide
 * descriptive messages and error types for easier error handling and debugging.
 *
 * @module errors/not-found-error
 */

import type { NotFoundErrorType } from '../types/index.js'
import { ErrorHandler } from './error-handler.js'

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
 * @example
 * // Using details object (message defaults to "Resource not found")
 * throw new NotFoundError({ reason: 'User does not exist' });
 *
 * @example
 * // Using custom message, type and details
 * throw new NotFoundError('User not found', 'NOT_FOUND_USER', { userId: 123 });
 *
 * @param {Record<string, unknown>} [details] - Optional additional error details.
 *
 * @param {string} [message] - Optional custom error message.
 * @param {NotFoundErrorType} [type='NOT_FOUND'] - Optional specific error type.
 * @param {Record<string, unknown>} [details] - Optional additional error details.
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
 * Extends the generic NotFoundError with a predefined message and type.
 *
 * @extends NotFoundError
 *
 * @example
 * // Throw error with optional details
 * throw new UserNotFoundError({ userId: '1234' });
 *
 * @param {Record<string, unknown>} [details] - Optional additional error details.
 */
export class UserNotFoundError extends NotFoundError {
  /**
   * Creates a new UserNotFoundError instance.
   *
   * @param {Record<string, unknown>} [details] Optional additional error details.
   */
  constructor(details?: Record<string, unknown>) {
    super('User not found', 'NOT_FOUND_USER', details)
  }
}

/**
 * Error for email not found.
 *
 * @extends NotFoundError
 *
 * @example
 * throw new EmailNotFoundError({ email: 'user@example.com' });
 *
 * @param {Record<string, unknown>} [details] Optional additional error details.
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
 * @example
 * throw new ProductNotFoundError({ productId: 123 });
 *
 * @param {Record<string, unknown>} [details] Optional additional error details.
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
 * @example
 * throw new PostNotFoundError({ postId: 456 });
 *
 * @param {Record<string, unknown>} [details] Optional additional error details.
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
 * @example
 * throw new CommentNotFoundError({ commentId: 789 });
 *
 * @param {Record<string, unknown>} [details] Optional additional error details.
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
 * @example
 * throw new CategoryNotFoundError({ categoryId: 1011 });
 *
 * @param {Record<string, unknown>} [details] Optional additional error details.
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
 * @example
 * throw new FileNotFoundError({ fileName: 'document.pdf' });
 *
 * @param {Record<string, unknown>} [details] Optional additional error details.
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
 * @example
 * throw new ImageNotFoundError({ imageId: 'img_1234' });
 *
 * @param {Record<string, unknown>} [details] Optional additional error details.
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
 * @example
 * throw new AddressNotFoundError({ addressId: 'addr_5678' });
 *
 * @param {Record<string, unknown>} [details] Optional additional error details.
 */
export class AddressNotFoundError extends NotFoundError {
  constructor(details?: Record<string, unknown>) {
    super('Address not found', 'NOT_FOUND_ADDRESS', details)
  }
}
