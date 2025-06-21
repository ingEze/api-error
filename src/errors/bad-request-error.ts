/**
 * Defines custom error classes for handling various bad request scenarios.
 *
 * Each class extends `BadRequestError`, which itself extends `ErrorHandler`.
 * These errors represent specific client-side validation failures and provide
 * descriptive messages and error types for easier error handling and debugging.
 *
 * @module errors/bad-request-error
 *
 * Response for BadRequestError:
 * ```json
 * {
 *   "success": false,
 *   "message": "Bad request",
 *   "statusCode": 400,
 *   "type": "BAD_REQUEST",
 *   "details": {} // Optional, provided by the user with extra error context
 * }
 * ```
 * - `details`: Optional object with additional error context, set by the user when throwing the error.
 */

import type { BadRequestErrorType } from '../types/index'
import { ErrorHandler } from './error-handler'

/**
 * Represents a generic bad request error (HTTP 400).
 *
 * @extends ErrorHandler
 *
 * Response:
 * ```json
 * {
 *   "success": false,
 *   "message": "Bad request",
 *   "statusCode": 400,
 *   "type": "BAD_REQUEST",
 *   "details": {} // Optional, provided by the user with extra error context
 * }
 * ```
 * - `details`: Optional object with additional error context, set by the user when throwing the error.
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
 *
 * Response:
 * ```json
 * {
 *   "success": false,
 *   "message": "Missing required user information in the request",
 *   "statusCode": 400,
 *   "type": "INVALID_USER_DATA",
 *   "details": {} // Optional, provided by the user with extra error context
 * }
 * ```
 * - `details`: Optional object with additional information about the missing or invalid user data, set by the user.
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
 *
 * Response:
 * ```json
 * {
 *   "success": false,
 *   "message": "Invalid email format or missing email field",
 *   "statusCode": 400,
 *   "type": "INVALID_EMAIL",
 *   "details": {} // Optional, provided by the user with extra error context
 * }
 * ```
 * - `details`: Optional object with additional information about the email validation error, set by the user.
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
 *
 * Response:
 * ```json
 * {
 *   "success": false,
 *   "message": "Invalid or missing product details",
 *   "statusCode": 400,
 *   "type": "INVALID_PRODUCT_DATA",
 *   "details": {} // Optional, provided by the user with extra error context
 * }
 * ```
 * - `details`: Optional object with additional information about the product data error, set by the user.
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
 *
 * Response:
 * ```json
 * {
 *   "success": false,
 *   "message": "Invalid or missing post data",
 *   "statusCode": 400,
 *   "type": "INVALID_POST_DATA",
 *   "details": {} // Optional, provided by the user with extra error context
 * }
 * ```
 * - `details`: Optional object with additional information about the post data error, set by the user.
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
 *
 * Response:
 * ```json
 * {
 *   "success": false,
 *   "message": "Invalid or missing comment data",
 *   "statusCode": 400,
 *   "type": "INVALID_COMMENT_DATA",
 *   "details": {} // Optional, provided by the user with extra error context
 * }
 * ```
 * - `details`: Optional object with additional information about the comment data error, set by the user.
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
 *
 * Response:
 * ```json
 * {
 *   "success": false,
 *   "message": "Invalid or missing category information",
 *   "statusCode": 400,
 *   "type": "INVALID_CATEGORY_DATA",
 *   "details": {} // Optional, provided by the user with extra error context
 * }
 * ```
 * - `details`: Optional object with additional information about the category data error, set by the user.
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
 *
 * Response:
 * ```json
 * {
 *   "success": false,
 *   "message": "Invalid or missing file in the request",
 *   "statusCode": 400,
 *   "type": "INVALID_FILE",
 *   "details": {} // Optional, provided by the user with extra error context
 * }
 * ```
 * - `details`: Optional object with additional information about the file error, set by the user.
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
 *
 * Response:
 * ```json
 * {
 *   "success": false,
 *   "message": "Invalid or missing image data",
 *   "statusCode": 400,
 *   "type": "INVALID_IMAGE",
 *   "details": {} // Optional, provided by the user with extra error context
 * }
 * ```
 * - `details`: Optional object with additional information about the image data error, set by the user.
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
 *
 * Response:
 * ```json
 * {
 *   "success": false,
 *   "message": "Invalid or missing address information",
 *   "statusCode": 400,
 *   "type": "INVALID_ADDRESS",
 *   "details": {} // Optional, provided by the user with extra error context
 * }
 * ```
 * - `details`: Optional object with additional information about the address error, set by the user.
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
