/**
 * Types representing different "Bad Request" error scenarios (HTTP 400).
 *
 * These error types help identify the specific reason why the request
 * was malformed or invalid.
 */
export type BadRequestErrorType =
  /** Generic bad request error. */
  | 'BAD_REQUEST'

  /** Missing required user information in the request. */
  | 'INVALID_USER_DATA'

  /** Invalid email format or missing email field. */
  | 'INVALID_EMAIL'

  /** Invalid or missing product details. */
  | 'INVALID_PRODUCT_DATA'

  /** Invalid or missing post data. */
  | 'INVALID_POST_DATA'

  /** Invalid or missing comment data. */
  | 'INVALID_COMMENT_DATA'

  /** Invalid or missing category information. */
  | 'INVALID_CATEGORY_DATA'

  /** Invalid or missing file in the request. */
  | 'INVALID_FILE'

  /** Invalid or missing image data. */
  | 'INVALID_IMAGE'

  /** Invalid or missing address information. */
  | 'INVALID_ADDRESS';
