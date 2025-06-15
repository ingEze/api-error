/**
 * Types representing different "Forbidden" error scenarios (HTTP 403).
 *
 * These error types help identify the specific reason why access to a resource or action
 * is denied, even though the user is authenticated.
 */
export type ForbiddenErrorType =
  /** Generic forbidden error. */
  | 'FORBIDDEN'

  /** Access to the requested user resource is forbidden. */
  | 'FORBIDDEN_USER'

  /** Access to the requested email resource is forbidden. */
  | 'FORBIDDEN_EMAIL'

  /** Access to the requested product is forbidden. */
  | 'FORBIDDEN_PRODUCT'

  /** Access to the requested post is forbidden. */
  | 'FORBIDDEN_POST'

  /** Access to the requested comment is forbidden. */
  | 'FORBIDDEN_COMMENT'

  /** Access to the requested category is forbidden. */
  | 'FORBIDDEN_CATEGORY'

  /** Access to the requested file is forbidden. */
  | 'FORBIDDEN_FILE'

  /** Access to the requested image is forbidden. */
  | 'FORBIDDEN_IMAGE'

  /** Access to the requested address is forbidden. */
  | 'FORBIDDEN_ADDRESS';
