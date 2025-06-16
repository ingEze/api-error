/**
 * Defines custom error classes for handling various forbidden scenarios (HTTP 403).
 *
 * Each class extends `ForbiddenError`, which itself extends `ErrorHandler`.
 * These errors represent specific authorization failures and provide
 * descriptive messages and error types for easier error handling and debugging.
 *
 * @module errors/forbidden-error
 */

import { ErrorHandler } from './error-handler.js'
import type { ForbiddenErrorType } from '../types/index.js'

/**
 * Represents a generic forbidden error (HTTP 403).
 *
 * @extends ErrorHandler
 */
export class ForbiddenError extends ErrorHandler {
  /**
   * Creates a new ForbiddenError instance.
   *
   * @param {string} [message='Forbidden access'] Error message.
   * @param {ForbiddenErrorType} [type='FORBIDDEN'] Specific forbidden error type.
   * @param {Record<string, unknown>=} details Optional additional error details.
   */
  constructor(message: string = 'Forbidden access', type: ForbiddenErrorType = 'FORBIDDEN', details?: Record<string, unknown>) {
    super(message, 403, type, details)
  }
}

/**
 * Error for forbidden user access.
 *
 * @extends ForbiddenError
 */
export class ForbiddenUserError extends ForbiddenError {
  /**
   * Creates a new ForbiddenUserError instance.
   *
   * @param {Record<string, unknown>=} details Optional additional error details.
   */
  constructor(details?: Record<string, unknown>) {
    super('User access forbidden', 'FORBIDDEN_USER', details)
  }
}

/**
 * Error for forbidden email access.
 *
 * @extends ForbiddenError
 */
export class ForbiddenEmailError extends ForbiddenError {
  /**
   * Creates a new ForbiddenEmailError instance.
   *
   * @param {Record<string, unknown>=} details Optional additional error details.
   */
  constructor(details?: Record<string, unknown>) {
    super('Email access forbidden', 'FORBIDDEN_EMAIL', details)
  }
}

/**
 * Error for forbidden product access.
 *
 * @extends ForbiddenError
 */
export class ForbiddenProductError extends ForbiddenError {
  /**
   * Creates a new ForbiddenProductError instance.
   *
   * @param {Record<string, unknown>=} details Optional additional error details.
   */
  constructor(details?: Record<string, unknown>) {
    super('Product access forbidden', 'FORBIDDEN_PRODUCT', details)
  }
}

/**
 * Error for forbidden post access.
 *
 * @extends ForbiddenError
 */
export class ForbiddenPostError extends ForbiddenError {
  /**
   * Creates a new ForbiddenPostError instance.
   *
   * @param {Record<string, unknown>=} details Optional additional error details.
   */
  constructor(details?: Record<string, unknown>) {
    super('Post access forbidden', 'FORBIDDEN_POST', details)
  }
}

/**
 * Error for forbidden comment access.
 *
 * @extends ForbiddenError
 */
export class ForbiddenCommentError extends ForbiddenError {
  /**
   * Creates a new ForbiddenCommentError instance.
   *
   * @param {Record<string, unknown>=} details Optional additional error details.
   */
  constructor(details?: Record<string, unknown>) {
    super('Comment access forbidden', 'FORBIDDEN_COMMENT', details)
  }
}

/**
 * Error for forbidden category access.
 *
 * @extends ForbiddenError
 */
export class ForbiddenCategoryError extends ForbiddenError {
  /**
   * Creates a new ForbiddenCategoryError instance.
   *
   * @param {Record<string, unknown>=} details Optional additional error details.
   */
  constructor(details?: Record<string, unknown>) {
    super('Category access forbidden', 'FORBIDDEN_CATEGORY', details)
  }
}

/**
 * Error for forbidden file access.
 *
 * @extends ForbiddenError
 */
export class ForbiddenFileError extends ForbiddenError {
  /**
   * Creates a new ForbiddenFileError instance.
   *
   * @param {Record<string, unknown>=} details Optional additional error details.
   */
  constructor(details?: Record<string, unknown>) {
    super('File access forbidden', 'FORBIDDEN_FILE', details)
  }
}

/**
 * Error for forbidden image access.
 *
 * @extends ForbiddenError
 */
export class ForbiddenImageError extends ForbiddenError {
  /**
   * Creates a new ForbiddenImageError instance.
   *
   * @param {Record<string, unknown>=} details Optional additional error details.
   */
  constructor(details?: Record<string, unknown>) {
    super('Image access forbidden', 'FORBIDDEN_IMAGE', details)
  }
}

/**
 * Error for forbidden address access.
 *
 * @extends ForbiddenError
 */
export class ForbiddenAddressError extends ForbiddenError {
  /**
   * Creates a new ForbiddenAddressError instance.
   *
   * @param {Record<string, unknown>=} details Optional additional error details.
   */
  constructor(details?: Record<string, unknown>) {
    super('Address access forbidden', 'FORBIDDEN_ADDRESS', details)
  }
}
