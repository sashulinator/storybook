import Flex from '~/abstract/flex'
import { Config, Props } from '~/pages/storybook/types'
import { H1 } from '~/ui/heading'
import Paginator from '~/ui/pagination'

interface State {
  page: number
}

export default {
  getName: (): string => Paginator.displayName,

  getDescription: function Description(): JSX.Element {
    return (
      <>
        <H1>{Paginator.displayName}</H1>
        Добавьте описание
      </>
    )
  },

  element: function Element(props: Props<State>): JSX.Element {
    const { state, setState } = props

    return (
      <Flex dir='column' gap='xl' width='100%'>
        <Paginator limit={10} total={3000} onChange={(page): void => setState((s) => ({ ...s, page }))} {...state} />
      </Flex>
    )
  },

  controls: [
    {
      name: 'page',
      input: 'input',
      defaultValue: 1,
      width: '200px',
      type: 'number',
    },
  ],
} satisfies Config<State>
