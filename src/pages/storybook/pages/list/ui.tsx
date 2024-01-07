import Flex from '~/abstract/flex'
import { Controller } from '~/abstract/list'
import { Config, Props } from '~/pages/storybook/types'
import { H1 } from '~/ui/heading'
import List, { ItemProps } from '~/ui/list'
import Paragraph from '~/ui/paragraph/ui/paragraph'
import { Id } from '~/utils/core'
import { useUpdate } from '~/utils/hooks'

interface State {}

export default {
  getName: (): string => List.displayName,

  getDescription: function Description(): JSX.Element {
    return (
      <>
        <H1>{List.displayName}</H1>
        <Paragraph>
          Управление фокусом клавишами
          <br />
          Enter - фокус на элемент списка <br />
          Esc - фокус на список
          <br />
          Клавиши стрелок - фокус на следующем/предыдущем елементе списка
          <br />
        </Paragraph>
      </>
    )
  },

  element: function Element(props: Props<State>): JSX.Element {
    const {
      // state
    } = props

    const controller = new Controller(data, (i) => i.id)

    return (
      <Flex dir='column'>
        <Flex>
          <button onClick={(): void => controller.selected.set([data[0].id])}>select first</button>
          <button onClick={(): void => controller.selectNext()}>select next</button>
          <button onClick={(): void => controller.selectPrevious()}>select previous</button>
        </Flex>
        <List
          data={data}
          controller={controller}
          itemProps={{ test: 'hello' }}
          getItemId={(i): Id => i.id}
          renderItem={_Item}
        />
      </Flex>
    )
  },

  controls: [],
} satisfies Config<State>

/**
 * Private
 */
type Item = { id: string }

function _Item(props: ItemProps<Item, { test: string }>): JSX.Element {
  useUpdate(subscribeToUpdates)

  const isSelected = props.controller.selected.value.includes(props.id)

  return (
    <li
      data-item-id={props.id}
      // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
      tabIndex={0}
      {...props.focusProps}
      style={{ background: isSelected ? 'red' : undefined }}
    >
      {props.id}
    </li>
  )

  function subscribeToUpdates(update: () => void, uns: (() => void)[]): void {
    uns.push(props.controller.on('selected', update))
  }
}

const data: Item[] = [
  { id: 'one' },
  { id: 'two' },
  { id: 'three' },
  { id: 'four' },
  { id: 'five' },
  { id: 'seven' },
  { id: 'eight' },
  { id: 'nine' },
  { id: 'ten' },
]
