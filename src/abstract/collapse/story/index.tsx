import Collapse from '~/abstract/collapse'
import { Config, Props } from '~/pages/storybook/types'
import { H1 } from '~/ui/heading'
import Paragraph from '~/ui/paragraph/ui/paragraph'

interface State {
  expanded: boolean
  content: boolean
  animation: boolean
}

export default {
  getName: (): string => Collapse.displayName || '',

  getDescription: function Description(): JSX.Element {
    return (
      <>
        <H1>{this.getName()}</H1>
        <Paragraph>A component for smooth rendering of content based on its height.</Paragraph>
      </>
    )
  },

  element: function Element(props: Props<State>): JSX.Element {
    const {
      state: { expanded, animation, content },
    } = props

    return (
      <Collapse
        isExpanded={expanded}
        from={animation ? { opacity: expanded ? 0 : 1, y: 0 } : undefined}
        to={animation ? { opacity: expanded ? 1 : 0, y: expanded ? 0 : 20 } : undefined}
        style={{ background: 'blue' }}
      >
        <p>Hello</p>
        <p>World</p>
        {content && (
          <>
            <p>How</p>
            <p>Are</p>
            <p>You</p>
          </>
        )}
      </Collapse>
    )
  },

  controls: [
    { name: 'expanded', input: 'checkbox', defaultValue: true },
    { name: 'content', input: 'checkbox', defaultValue: false },
    { name: 'animation', input: 'checkbox', defaultValue: false },
  ],
} satisfies Config<State>
