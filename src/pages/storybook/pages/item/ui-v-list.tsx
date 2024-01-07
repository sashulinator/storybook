import { useMemo } from 'react'

import { Config, Props } from '~/pages/storybook/types'
import Button from '~/ui/button'
import { H1 } from '~/ui/heading'
import { Close, Edit } from '~/ui/icon'
import Item, { List, Names } from '~/ui/item'

interface State {
  variant: 'regular' | 'semitransparent'
}

export default {
  getName: (): string => List.displayName,

  getDescription: function Description(): JSX.Element {
    return (
      <>
        <H1>{List.displayName}</H1>
         Элемент списка для сущностей
      </>
    )
  },

  element: function Element(props: Props<State>): JSX.Element {
    const { state } = props

    const data = useMemo(getData, [])

    return (
      <List data={data}>
        {({ item, index }): JSX.Element => {
          return (
            <Item
              {...state}
              onItemClick={(): void => console.log('onItemClick')}
              index={index}
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
              <Names flex='1' instance={item} url='#' />
            </Item>
          )
        }}
      </List>
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

// Private

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
function getData() {
  return Array(10)
    .fill(undefined)
    .map((_, index) => ({
      id: index,
      name: `name${index}`,
      keyName: `keyName${index}`,
      createDttm: '2023-10-25T13:17:32.186278374',
      updateDttm: '2023-10-27T09:48:18.63168951',
      createdBy: 'ashabetnik',
      updatedBy: 'ashabetnik',
    }))
}
