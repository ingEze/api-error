import { ErrorHandler } from '../errors/index.js'

/**
 * Options for creating a custom error class.
 *
 * @template TType - A string literal type that defines specific error types (e.g. `'PAYMENT_FAILED'`).
 * @template TDetails - An object that describes additional details associated with the error.
 */
export interface CreateHandleErrorOptions<
  TType extends string = string,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  TDetails extends Record<string, unknown> = Record<string, unknown>,
> {
  /**
   * The name of the custom error class (e.g. `'PaymentFailedError'`).
   */
  name: string;

  /**
   * Default HTTP status code to associate with the error (e.g. `400`, `422`).
   */
  statusCode: number;

  /**
   * Default type identifier for the error (e.g. `'PAYMENT_FAILED'`).
   */
  defaultType: TType;

  /**
   * Optional default error message.
   */
  defaultMessage?: string;
}

/**
 * Factory function to create strongly-typed custom error classes.
 *
 * @template TType - A string literal type that defines specific error types.
 * @template TDetails - A shape of the additional metadata provided with the error.
 *
 * @param {CreateHandleErrorOptions<TType, TDetails>} options - Configuration for the custom error.
 * @returns {new (message?: string, type?: TType, details?: TDetails) => ErrorHandler & {
 *   name: string;
 *   statusCode: number;
 *   type: TType;
 *   details?: TDetails;
 * }} A class constructor for the custom error.
 *
 * @example
 * ```ts
 * const PaymentFailedError = createHandleError({
 *   name: 'PaymentFailedError',
 *   statusCode: 402,
 *   defaultType: 'PAYMENT_FAILED',
 *   defaultMessage: 'Payment could not be processed'
 * })
 *
 * throw new PaymentFailedError()
 * throw new PaymentFailedError('Card declined', 'PAYMENT_DECLINED', { retry: false })
 * ```
 */
export function createHandleError<
  TType extends string = string,
  TDetails extends Record<string, unknown> = Record<string, unknown>,
>(
  options: CreateHandleErrorOptions<TType, TDetails>
): {
  new (
    message?: string,
    type?: TType,
    details?: TDetails,
  ): ErrorHandler & {
    name: string;
    statusCode: number;
    type: TType;
    details?: TDetails;
  };
} {
  class CustomError extends ErrorHandler {
    type: TType

    constructor(
      message?: string,
      type?: TType,
      details?: TDetails
    ) {
      super(
        message ?? options.defaultMessage ?? 'An error ocurred',
        options.statusCode,
        type ?? options.defaultType,
        details
      )
      this.name = options.name
      this.type = type ?? options.defaultType
    }
  }

  Object.defineProperty(CustomError, 'name', { value: options.name })

  return CustomError as {
    new (
      message?: string,
      type?: TType,
      details?: TDetails,
    ): ErrorHandler & {
      name: string;
      statusCode: number;
      type: TType;
      details?: TDetails;
    };
  }
}
