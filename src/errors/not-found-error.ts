/**
 * Defines custom error classes for handling various "not found" scenarios (HTTP 404).
 *
 * Each class extends `NotFoundError`, which itself extends `ErrorHandler`.
 * These errors represent specific resource-not-found cases and provide
 * descriptive messages and error types for easier error handling and debugging.
 *
 * @module errors/not-found-error
 */

import type { NotFoundErrorType } from 'src/types/not-found-error.types'
import { ErrorHandler } from './error-handler'

/**
 * Represents a generic not found error (HTTP 404).
 *
 * @extends ErrorHandler
 */
export class NotFoundError extends ErrorHandler {
  /**
   * Creates a new NotFoundError instance.
   *
   * @param {string} [message='Resource not found'] Error message.
   * @param {NotFoundErrorType} [type='NOT_FOUND'] Specific not found error type.
   * @param {Record<string, unknown>=} details Optional additional error details.
   */
  constructor(
    message: string = 'Resource not found',
    type: NotFoundErrorType = 'NOT_FOUND',
    details?: Record<string, unknown>
  ) {
    super(message, 404, type, details)
  }
}

/**
 * Error for user not found.
 *
 * @extends NotFoundError
 */
export class UserNotFoundError extends NotFoundError {
  /**
   * Creates a new UserNotFoundError instance.
   *
   * @param {Record<string, unknown>=} details Optional additional error details.
   */
  constructor(details?: Record<string, unknown>) {
    super('User not found', 'NOT_FOUND_USER', details)
  }
}

/**
 * Error for email not found.
 *
 * @extends NotFoundError
 */
export class EmailNotFoundError extends NotFoundError {
  /**
   * Creates a new EmailNotFoundError instance.
   *
   * @param {Record<string, unknown>=} details Optional additional error details.
   */
  constructor(details?: Record<string, unknown>) {
    super('Email not found', 'NOT_FOUND_EMAIL', details)
  }
}

/**
 * Error for product not found.
 *
 * @extends NotFoundError
 */
export class ProductNotFoundError extends NotFoundError {
  /**
   * Creates a new ProductNotFoundError instance.
   *
   * @param {Record<string, unknown>=} details Optional additional error details.
   */
  constructor(details?: Record<string, unknown>) {
    super('Product not found', 'NOT_FOUND_PRODUCT', details)
  }
}

/**
 * Error for post not found.
 *
 * @extends NotFoundError
 */
export class PostNotFoundError extends NotFoundError {
  /**
   * Creates a new PostNotFoundError instance.
   *
   * @param {Record<string, unknown>=} details Optional additional error details.
   */
  constructor(details?: Record<string, unknown>) {
    super('Post not found', 'NOT_FOUND_POST', details)
  }
}

/**
 * Error for comment not found.
 *
 * @extends NotFoundError
 */
export class CommentNotFoundError extends NotFoundError {
  /**
   * Creates a new CommentNotFoundError instance.
   *
   * @param {Record<string, unknown>=} details Optional additional error details.
   */
  constructor(details?: Record<string, unknown>) {
    super('Comment not found', 'NOT_FOUND_COMMENT', details)
  }
}

/**
 * Error for category not found.
 *
 * @extends NotFoundError
 */
export class CategoryNotFoundError extends NotFoundError {
  /**
   * Creates a new CategoryNotFoundError instance.
   *
   * @param {Record<string, unknown>=} details Optional additional error details.
   */
  constructor(details?: Record<string, unknown>) {
    super('Category not found', 'NOT_FOUND_CATEGORY', details)
  }
}

/**
 * Error for file not found.
 *
 * @extends NotFoundError
 */
export class FileNotFoundError extends NotFoundError {
  /**
   * Creates a new FileNotFoundError instance.
   *
   * @param {Record<string, unknown>=} details Optional additional error details.
   */
  constructor(details?: Record<string, unknown>) {
    super('File not found', 'NOT_FOUND_FILE', details)
  }
}

/**
 * Error for image not found.
 *
 * @extends NotFoundError
 */
export class ImageNotFoundError extends NotFoundError {
  /**
   * Creates a new ImageNotFoundError instance.
   *
   * @param {Record<string, unknown>=} details Optional additional error details.
   */
  constructor(details?: Record<string, unknown>) {
    super('Image not found', 'NOT_FOUND_IMAGE', details)
  }
}

/**
 * Error for address not found.
 *
 * @extends NotFoundError
 */
export class AddressNotFoundError extends NotFoundError {
  /**
   * Creates a new AddressNotFoundError instance.
   *
   * @param {Record<string, unknown>=} details Optional additional error details.
   */
  constructor(details?: Record<string, unknown>) {
    super('Address not found', 'NOT_FOUND_ADDRESS', details)
  }
}
