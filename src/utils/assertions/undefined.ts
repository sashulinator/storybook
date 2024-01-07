import { BaseError } from '../error'
import { Props } from './types/_props'

/**
 * Checks that the given value is undefined.
 *
 * @param {unknown} val - The value to check.
 * @param {undefined} [errorProps] - An optional error props to include if the check fails.
 * @throws {Error} if the value is defined.
 */
export function assertUndefined(val: unknown | null, errorProps?: Props): asserts val is undefined {
  if (typeof val !== undefined) {
    throw new BaseError(errorProps?.message || 'Value is defined.', { code: 'assertUndefined', ...errorProps })
  }
}
