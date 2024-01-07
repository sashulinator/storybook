import { Config, Props } from '~/pages/storybook/types'
import Button from '~/ui/button'
import { H1 } from '~/ui/heading'

interface State {
  disabled: boolean
  size: 's' | 'm' | 'l'
}

export default {
  getName: (): string => Button.displayName || '',

  getDescription: function Description(): JSX.Element {
    return (
      <>
        <H1>{Button.displayName}</H1>
        Добавьте описание
      </>
    )
  },

  element: function Element(props: Props<State>): JSX.Element {
    const { state } = props

    return <Button {...state}>Button</Button>
  },

  controls: [
    {
      name: 'size',
      input: 'select',
      options: ['s', 'm', 'l'],
      defaultValue: 's',
      style: { width: '200px' },
    },
    {
      name: 'variant',
      input: 'select',
      options: ['default', 'regular', 'ghost', 'primary'],
      defaultValue: 'regular',
      style: { width: '200px' },
    },
    { name: 'disabled', input: 'checkbox', defaultValue: false },
  ],
} satisfies Config<State>
