/**
 * Types representing different authorization error scenarios (HTTP 401).
 *
 * These error types specify the particular cause of an authentication or authorization failure.
 */
export type UnauthorizedErrorType =
  /** The user is not authenticated or does not have permission to access the resource. */
  | 'UNAUTHORIZED'

  /** The provided token is invalid (corrupted, expired, or has an invalid signature). */
  | 'INVALID_TOKEN'

  /** The provided credentials (such as email or password) are incorrect. */
  | 'INVALID_CREDENTIALS'

  /** The access token has expired or is invalid. */
  | 'ACCESS_TOKEN_INVALID'

  /** The refresh token is invalid or has expired. */
  | 'REFRESH_TOKEN_INVALID'

  /** The provided API key is invalid or malformed. */
  | 'API_KEY_INVALID'

  /** The device is not authorized to perform this action. */
  | 'UNAUTHORIZED_DEVICE';
