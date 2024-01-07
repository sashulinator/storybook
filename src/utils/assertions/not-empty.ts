import { BaseError } from '../error'
import { Props } from './types/_props'

/**
 * Checks that the given value is not empty.
 *
 * @param {unknown} val - The value to check.
 * @param {string} [errorProps] - An optional error props to include if the check fails.
 * @throws {Error} if the value is not empty.
 */
export function assertNotEmpty(val: unknown | null, errorProps?: Props): asserts val is object {
  // TODO не только пустая строка может быть
  if (val === '' || val === undefined) {
    throw new BaseError(errorProps?.message || 'Value cannot be empty.', { code: 'assertNotEmpty', ...errorProps })
  }
}
