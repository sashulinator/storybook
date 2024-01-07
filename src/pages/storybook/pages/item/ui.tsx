import { Config, Props } from '~/pages/storybook/types'
import Button from '~/ui/button'
import { H1 } from '~/ui/heading'
import { Close, Edit } from '~/ui/icon'
import Item, { Names } from '~/ui/item'

interface State {
  variant: 'regular' | 'semitransparent'
  disabled: boolean
}

export default {
  getName: (): string => Item.displayName,

  getDescription: function Description(): JSX.Element {
    return (
      <>
        <H1>{Item.displayName}</H1>
         Элемент списка для сущностей
      </>
    )
  },

  element: function Element(props: Props<State>): JSX.Element {
    const { state } = props

    return (
      <Item
        {...state}
        onItemClick={(): void => console.log('onItemClick')}
        index={0}
        buttons={
          <>
            <Button variant='ghost' round={true}>
              <Edit />
            </Button>
            <Button variant='ghost' round={true}>
              <Close />
            </Button>
          </>
        }
      >
        <Names flex='1' instance={{ name: 'name', keyName: 'keyName' }} url='#' />
      </Item>
    )
  },

  controls: [
    {
      name: 'variant',
      input: 'select',
      options: ['regular', 'semitransparent'],
      defaultValue: 'regular',
      style: { width: '200px' },
    },
    { name: 'disabled', input: 'checkbox', defaultValue: false },
  ],
} satisfies Config<State>
