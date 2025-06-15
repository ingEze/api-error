/**
 * Types representing different "Not Found" error scenarios (HTTP 404).
 *
 * These error types help identify the specific resource that was not found
 * during an operation within the application.
 */
export type NotFoundErrorType =
  /** Generic resource not found error. */
  | 'NOT_FOUND'

  /** User resource not found. */
  | 'NOT_FOUND_USER'

  /** Email resource not found. */
  | 'NOT_FOUND_EMAIL'

  /** Product resource not found. */
  | 'NOT_FOUND_PRODUCT'

  /** Post resource not found. */
  | 'NOT_FOUND_POST'

  /** Comment resource not found. */
  | 'NOT_FOUND_COMMENT'

  /** Category resource not found. */
  | 'NOT_FOUND_CATEGORY'

  /** File resource not found. */
  | 'NOT_FOUND_FILE'

  /** Image resource not found. */
  | 'NOT_FOUND_IMAGE'

  /** Address resource not found. */
  | 'NOT_FOUND_ADDRESS';
