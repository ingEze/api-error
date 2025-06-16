import { createHandleError } from 'src/utils/create-handle-error'
import { ErrorHandler } from 'src/errors/index'

describe('createHandleError', () => {
  it('should create a custom error class with default values', () => {
    const CustomError = createHandleError({
      name: 'CustomError',
      statusCode: 418,
      defaultType: 'CUSTOM_TYPE',
      defaultMessage: 'Default custom error message'
    })

    const error = new CustomError()

    expect(error).toBeInstanceOf(ErrorHandler)
    expect(error).toBeInstanceOf(CustomError)
    expect(error.name).toBe('CustomError')
    expect(error.statusCode).toBe(418)
    expect(error.type).toBe('CUSTOM_TYPE')
    expect(error.message).toBe('Default custom error message')
    expect(error.details).toBeUndefined()
  })

  it('should allow overriding message, type, and details', () => {
    const CustomError = createHandleError<'OVERRIDE_TYPE', { foo: string }>({
      name: 'CustomError',
      statusCode: 400,
      defaultType: 'OVERRIDE_TYPE',
      defaultMessage: 'Default message'
    })

    const error = new CustomError('Overridden message', 'OVERRIDE_TYPE', { foo: 'bar' })

    expect(error.message).toBe('Overridden message')
    expect(error.type).toBe('OVERRIDE_TYPE')
    expect(error.details).toEqual({ foo: 'bar' })
  })

  it('should use default message if none is provided', () => {
    const CustomError = createHandleError({
      name: 'CustomError',
      statusCode: 400,
      defaultType: 'CUSTOM_TYPE',
      defaultMessage: 'Default message'
    })

    const error = new CustomError(undefined, undefined, { test: 123 })

    expect(error.message).toBe('Default message')
    expect(error.details).toEqual({ test: 123 })
  })

  it('should use "An error ocurred" if no defaultMessage is provided', () => {
    const CustomError = createHandleError({
      name: 'CustomError',
      statusCode: 400,
      defaultType: 'CUSTOM_TYPE'
    })

    const error = new CustomError()

    expect(error.message).toBe('An error ocurred')
  })
})
