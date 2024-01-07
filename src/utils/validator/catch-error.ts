import { Meta, ValidationError, isPrimitive } from '.'

export function catchError(error: Error, input: unknown, meta: Meta | undefined, code?: string): any {
  // assertion can be withValue or withRef and they throw their own ValidationError
  if (error instanceof ValidationError) {
    return error
  }
  if (error instanceof Error) {
    return new ValidationError({
      inputName: meta?.inputName as string,
      input: isPrimitive(input) ? input : input?.toString(),
      code: code as string,
      message: error.message,
      path: meta?.path as string,
    })
  }
}
