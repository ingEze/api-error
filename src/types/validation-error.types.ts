/**
 * Types representing different validation error scenarios (HTTP 422 or 400).
 *
 * These error types help identify which resource or field failed validation during
 * a request. This is commonly used when required fields are missing or values are invalid.
 */
export type ValidationErrorType =
  /** Generic validation error. */
  | 'VALIDATION'

  /** Validation failed for user-related data. */
  | 'VALIDATION_USER'

  /** Validation failed for email field (e.g., format or presence). */
  | 'VALIDATION_EMAIL'

  /** Validation failed for product-related data. */
  | 'VALIDATION_PRODUCT'

  /** Validation failed for post-related data. */
  | 'VALIDATION_POST'

  /** Validation failed for comment-related data. */
  | 'VALIDATION_COMMENT'

  /** Validation failed for category-related data. */
  | 'VALIDATION_CATEGORY'

  /** Validation failed for uploaded or provided file. */
  | 'VALIDATION_FILE'

  /** Validation failed for image-related data. */
  | 'VALIDATION_IMAGE'

  /** Validation failed for address-related data. */
  | 'VALIDATION_ADDRESS';
