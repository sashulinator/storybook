import { Config, Props } from '~/pages/storybook/types'
import Button from '~/ui/button'
import CardInput from '~/ui/card-input'
import { H1 } from '~/ui/heading'

const options = [
  { value: 'number', display: 'число' },
  { value: 'string', display: 'строка' },
  { value: 'boolean', display: 'логическое' },
]

interface State {
  isFocused: boolean
  isError: boolean
  disabled: boolean
  hidden: boolean
  transparent: boolean
  height: 's' | 'm' | 'l'
  value: string | number | undefined
}

export default {
  getName: (): string => CardInput.displayName,

  getDescription: function Description(): JSX.Element {
    return (
      <>
        <H1>{CardInput.displayName}</H1>
        Может иметь вид чего угодно
      </>
    )
  },

  element: function Element(props: Props<State>): JSX.Element {
    const { state, setState } = props

    return (
      <CardInput
        {...state}
        onChange={(e, value): void => setState((s) => ({ ...s, value }))}
        renderDisplay={({ value }): string | number =>
          options.find((option) => option.value === value)?.display || 'Не выбрано'
        }
        style={{ maxWidth: '15rem' }}
      >
        {({ setValue, isOpen }): JSX.Element | null => {
          if (!isOpen) return null
          return (
            <>
              <Button variant='ghost' onClick={(): void => setValue('number')}>
                число
              </Button>

              <Button variant='ghost' onClick={(): void => setValue('boolean')}>
                логическое
              </Button>

              <Button variant='ghost' onClick={(): void => setValue('string')}>
                строка
              </Button>
            </>
          )
        }}
      </CardInput>
    )
  },

  controls: [
    { name: 'value', input: 'input', defaultValue: 'number' },
    { name: 'isFocused', input: 'checkbox', defaultValue: false },
    { name: 'isError', input: 'checkbox', defaultValue: false },
    { name: 'hidden', input: 'checkbox', defaultValue: false },
    { name: 'disabled', input: 'checkbox', defaultValue: false },
    { name: 'transparent', input: 'checkbox', defaultValue: false },
    {
      name: 'height',
      input: 'select',
      options: ['s', 'm', 'l'],
      defaultValue: 's',
      style: { width: '200px' },
    },
  ],
} satisfies Config<State>

/**
 * Private
 */
