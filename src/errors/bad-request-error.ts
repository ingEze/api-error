/**
 * Defines custom error classes for handling various bad request scenarios.
 *
 * Each class extends `BadRequestError`, which itself extends `ErrorHandler`.
 * These errors represent specific client-side validation failures and provide
 * descriptive messages and error types for easier error handling and debugging.
 *
 * @module errors/bad-request-error
 */

import { BadRequestErrorType } from 'src/types/bad-request-error.types'
import { ErrorHandler } from './error-handler'

/**
 * Represents a generic bad request error (HTTP 400).
 *
 * @extends ErrorHandler
 */
export class BadRequestError extends ErrorHandler {
  /**
   * Creates a new BadRequestError instance.
   *
   * @param {string} [message='Bad request.'] Error message.
   * @param {BadRequestErrorType} [type='BAD_REQUEST'] Specific bad request error type.
   * @param {Record<string, unknown>=} details Optional additional error details.
   */
  constructor(message: string = 'Bad request.', type: BadRequestErrorType = 'BAD_REQUEST', details?: Record<string, unknown>) {
    super(message, 400, type, details)
  }
}

/**
 * Error for missing or invalid user data in the request.
 *
 * @extends BadRequestError
 */
export class InvalidUserDataError extends BadRequestError {
  /**
   * @param {Record<string, unknown>=} details Optional additional error details.
   */
  constructor(details?: Record<string, unknown>) {
    super('Missing required user information in the request.', 'INVALID_USER_DATA', details)
  }
}

/**
 * Error for invalid or missing email field.
 *
 * @extends BadRequestError
 */
export class InvalidEmailError extends BadRequestError {
  /**
   * @param {Record<string, unknown>=} details Optional additional error details.
   */
  constructor(details?: Record<string, unknown>) {
    super('Invalid email format or missing email field.', 'INVALID_EMAIL', details)
  }
}

/**
 * Error for invalid or missing product data.
 *
 * @extends BadRequestError
 */
export class InvalidProductDataError extends BadRequestError {
  /**
   * @param {Record<string, unknown>=} details Optional additional error details.
   */
  constructor(details?: Record<string, unknown>) {
    super('Invalid or missing product details.', 'INVALID_PRODUCT_DATA', details)
  }
}

/**
 * Error for invalid or missing post data.
 *
 * @extends BadRequestError
 */
export class InvalidPostData extends BadRequestError {
  /**
   * @param {Record<string, unknown>=} details Optional additional error details.
   */
  constructor(details?: Record<string, unknown>) {
    super('Invalid or missing post data.', 'INVALID_POST_DATA', details)
  }
}

/**
 * Error for invalid or missing comment data.
 *
 * @extends BadRequestError
 */
export class InvalidCommentDataError extends BadRequestError {
  /**
   * @param {Record<string, unknown>=} details Optional additional error details.
   */
  constructor(details?: Record<string, unknown>) {
    super('Invalid or missing comment data.', 'INVALID_COMMENT_DATA', details)
  }
}

/**
 * Error for invalid or missing category information.
 *
 * @extends BadRequestError
 */
export class InvalidCategoryDataError extends BadRequestError {
  /**
   * @param {Record<string, unknown>=} details Optional additional error details.
   */
  constructor(details?: Record<string, unknown>) {
    super('Invalid or missing category information.', 'INVALID_CATEGORY_DATA', details)
  }
}

/**
 * Error for invalid or missing file in the request.
 *
 * @extends BadRequestError
 */
export class InvalidFileError extends BadRequestError {
  /**
   * @param {Record<string, unknown>=} details Optional additional error details.
   */
  constructor(details?: Record<string, unknown>) {
    super('Invalid or missing file in the request.', 'INVALID_FILE', details)
  }
}

/**
 * Error for invalid or missing image data.
 *
 * @extends BadRequestError
 */
export class InvalidImageError extends BadRequestError {
  /**
   * @param {Record<string, unknown>=} details Optional additional error details.
   */
  constructor(details?: Record<string, unknown>) {
    super('Invalid or missing image data', 'INVALID_IMAGE', details)
  }
}

/**
 * Error for invalid or missing address information.
 *
 * @extends BadRequestError
 */
export class InvalidAddressError extends BadRequestError {
  /**
   * @param {Record<string, unknown>=} details Optional additional error details.
   */
  constructor(details?: Record<string, unknown>) {
    super('Invalid or missing address information.', 'INVALID_ADDRESS', details)
  }
}
