import Flex from '~/abstract/flex'
import { Config, Props } from '~/pages/storybook/types'
import { H1 } from '~/ui/heading'
import Spinner from '~/ui/spinner'

interface State {}

export default {
  getName: (): string => Spinner.displayName,

  getDescription: function Description(): JSX.Element {
    return (
      <>
        <H1>{Spinner.displayName}</H1>
        Добавьте описание
      </>
    )
  },

  element: function Element(props: Props<State>): JSX.Element {
    const { state } = props

    return (
      <Flex crossAxis='center' mainAxis='center' height='100%'>
        <Spinner {...state} />
      </Flex>
    )
  },

  controls: [
    { name: 'color', input: 'input', defaultValue: undefined },
    {
      name: 'loading',
      input: 'checkbox',
      defaultValue: true,
    },
    {
      name: 'size',
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
