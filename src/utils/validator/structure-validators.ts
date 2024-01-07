import { ValidationError, createStructureValidator, isObject } from '.'

export const wrap = createStructureValidator()

export const only = createStructureValidator((schema, input, meta) => {
  if (isObject(input)) {
    const schemaEntries = Object.entries(schema)
    let inputKeys = Object.keys(input)

    for (let index = 0; index < schemaEntries.length; index += 1) {
      const [schemaKey] = schemaEntries[index]

      inputKeys = inputKeys.filter((inputKey) => inputKey !== schemaKey)
    }

    if (inputKeys.length) {
      return new ValidationError({
        inputName: meta?.inputName as string,
        input: inputKeys,
        code: 'excessiveKeys',
        message: 'some keys are excessive',
        path: meta.path as string,
      })
    }
  }
})

export const required = createStructureValidator((schema, input, meta) => {
  if (isObject(input)) {
    const inputEntries = Object.entries(input)
    let schemaKeys = Object.keys(schema)

    for (let index = 0; index < inputEntries.length; index += 1) {
      const [inputKey] = inputEntries[index]

      schemaKeys = schemaKeys.filter((schemaKey) => inputKey !== schemaKey)
    }

    if (schemaKeys.length) {
      return new ValidationError({
        inputName: meta?.inputName as string,
        input: schemaKeys,
        code: 'requiredKeys',
        message: 'some keys are required',
        path: meta.path as string,
      })
    }
  }
})
