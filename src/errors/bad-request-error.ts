/**
 * Defines custom error classes for handling various bad request scenarios.
 *
 * Each class extends `BadRequestError`, which itself extends `ErrorHandler`.
 * These errors represent specific client-side validation failures and provide
 * descriptive messages and error types for easier error handling and debugging.
 *
 * @module errors/bad-request-error
 */

import type { BadRequestErrorType } from '../types/index'
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
   * @param {Record<string, unknown>=} details - Optional additional error details.
   */
  constructor(details?: Record<string, unknown>)
  /**
   * Creates a new BadRequestError instance with a message and type.
   *
   * @param {string=} message - Error message.
   * @param {BadRequestErrorType=} type - Specific bad request error type.
   * @param {Record<string, unknown>=} details - Optional additional error details.
   */
  constructor(message?: string, type?: BadRequestErrorType, details?: Record<string, unknown>)
  constructor(
    messageOrDetails?: string | Record<string, unknown>,
    type: BadRequestErrorType = 'BAD_REQUEST',
    details?: Record<string, unknown>
  ) {
    if (typeof messageOrDetails === 'string') {
      super(messageOrDetails, 400, type, details)
    } else {
      super('Bad request', 400, type, messageOrDetails)
    }
  }
}

/**
 * Error for missing or invalid user data in the request.
 *
 * @extends BadRequestError
 */
export class InvalidUserDataError extends BadRequestError {
  /**
   * Creates a new InvalidUserDataError instance.
   *
   * @param {Record<string, unknown>=} details - Optional additional error details.
   */
  constructor(details?: Record<string, unknown>) {
    super('Missing required user information in the request', 'INVALID_USER_DATA', details)
  }
}

/**
 * Error for invalid or missing email field.
 *
 * @extends BadRequestError
 */
export class InvalidEmailError extends BadRequestError {
  /**
   * Creates a new InvalidEmailError instance.
   *
   * @param {Record<string, unknown>=} details - Optional additional error details.
   */
  constructor(details?: Record<string, unknown>) {
    super('Invalid email format or missing email field', 'INVALID_EMAIL', details)
  }
}

/**
 * Error for invalid or missing product data.
 *
 * @extends BadRequestError
 */
export class InvalidProductDataError extends BadRequestError {
  /**
   * Creates a new InvalidProductDataError instance.
   *
   * @param {Record<string, unknown>=} details - Optional additional error details.
   */
  constructor(details?: Record<string, unknown>) {
    super('Invalid or missing product details', 'INVALID_PRODUCT_DATA', details)
  }
}

/**
 * Error for invalid or missing post data.
 *
 * @extends BadRequestError
 */
export class InvalidPostData extends BadRequestError {
  /**
   * Creates a new InvalidPostData instance.
   *
   * @param {Record<string, unknown>=} details - Optional additional error details.
   */
  constructor(details?: Record<string, unknown>) {
    super('Invalid or missing post data', 'INVALID_POST_DATA', details)
  }
}

/**
 * Error for invalid or missing comment data.
 *
 * @extends BadRequestError
 */
export class InvalidCommentDataError extends BadRequestError {
  /**
   * Creates a new InvalidCommentDataError instance.
   *
   * @param {Record<string, unknown>=} details - Optional additional error details.
   */
  constructor(details?: Record<string, unknown>) {
    super('Invalid or missing comment data', 'INVALID_COMMENT_DATA', details)
  }
}

/**
 * Error for invalid or missing category information.
 *
 * @extends BadRequestError
 */
export class InvalidCategoryDataError extends BadRequestError {
  /**
   * Creates a new InvalidCategoryDataError instance.
   *
   * @param {Record<string, unknown>=} details - Optional additional error details.
   */
  constructor(details?: Record<string, unknown>) {
    super('Invalid or missing category information', 'INVALID_CATEGORY_DATA', details)
  }
}

/**
 * Error for invalid or missing file in the request.
 *
 * @extends BadRequestError
 */
export class InvalidFileError extends BadRequestError {
  /**
   * Creates a new InvalidFileError instance.
   *
   * @param {Record<string, unknown>=} details - Optional additional error details.
   */
  constructor(details?: Record<string, unknown>) {
    super('Invalid or missing file in the request', 'INVALID_FILE', details)
  }
}

/**
 * Error for invalid or missing image data.
 *
 * @extends BadRequestError
 */
export class InvalidImageError extends BadRequestError {
  /**
   * Creates a new InvalidImageError instance.
   *
   * @param {Record<string, unknown>=} details - Optional additional error details.
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
   * Creates a new InvalidAddressError instance.
   *
   * @param {Record<string, unknown>=} details - Optional additional error details.
   */
  constructor(details?: Record<string, unknown>) {
    super('Invalid or missing address information', 'INVALID_ADDRESS', details)
  }
}
