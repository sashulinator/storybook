import Flex from '~/abstract/flex'
import Modal from '~/abstract/modal'
import { Config } from '~/pages/storybook/types'
import { H1 } from '~/ui/heading'
import { Ol } from '~/ui/list'
import { useBoolean } from '~/utils/hooks'

export default {
  getName: (): string => Modal.displayName,

  getDescription: function Description(): JSX.Element {
    return (
      <>
        <H1>{this.getName()}</H1>
        <Ol>
          Тестирование:
          <li> Закрытие на ESC одного верхнего окна</li>
          <li> Возврат фокуса</li>
          <li> При нажатии Tab, фокус не выходит за пределы окна</li>
        </Ol>
      </>
    )
  },

  element: function Element(): JSX.Element {
    const [opened, , , toggle] = useBoolean(false)
    const [secondopened, , , secondtoggle] = useBoolean(false)

    return (
      <Flex dir='column' gap='xl' width='100%'>
        <button onClick={toggle}>Toggle</button>
        <Modal style={{ background: 'red' }} onDismiss={toggle} containerElement={document.body} opened={opened}>
          <div style={{ padding: '40px', background: 'green' }}>
            <button onClick={toggle}>Close</button>
            <button onClick={secondtoggle}>open second</button>
          </div>
        </Modal>
        <Modal
          style={{ background: 'blue' }}
          onDismiss={secondtoggle}
          containerElement={document.body}
          opened={secondopened}
        >
          <div style={{ padding: '40px', background: 'green' }}>
            <button onClick={secondtoggle}>Close</button>
            <button>just button</button>
          </div>
        </Modal>
      </Flex>
    )
  },

  controls: [],
} satisfies Config<unknown>
