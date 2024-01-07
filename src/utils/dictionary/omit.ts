import { Compute } from '../types/any'

export function omit<T, K extends keyof T>(obj: T, ...keys: K[]): Compute<Omit<T, K>> {
  obj = { ...obj }
  keys.forEach((key) => delete obj[key])
  return obj as Compute<Omit<T, K>>
}
