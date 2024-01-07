import { forwardRef } from 'react'

import Balloon, { Point } from '~/abstract/balloon'
import { Config, Props } from '~/pages/storybook/types'
import { H1 } from '~/ui/heading'
import { setRefs } from '~/utils/react'

interface State {
  placement: Point
}

export default {
  getName: (): string => Balloon.displayName || '',

  getDescription: function Description(): JSX.Element {
    return (
      <>
        <H1>{Balloon.displayName}</H1>
        Добавьте описание
      </>
    )
  },

  element: function Element(props: Props<State>): JSX.Element {
    const { state } = props

    return (
      <Balloon
        contentProps={{
          style: {
            background: 'red',
            position: 'absolute',
            zIndex: 2,
          },
        }}
        renderArrow={
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
          forwardRef(function Element(props, ref): JSX.Element {
            return (
              <div
                ref={setRefs(ref)}
                style={{
                  position: 'absolute',
                  background: 'blue',
                  width: '10px',
                  height: '10px',
                  transform: 'rotate(45deg)',
                  zIndex: 1,
                }}
              />
            )
          })
        }
        {...state}
        // contentProps={{ style: { background: 'red' } }}
      >
        <div style={{ width: '200px', height: '200px' }}>Content</div>
      </Balloon>
    )
  },

  controls: [
    {
      name: 'placement',
      input: 'select',
      options: ['bc', 'bl', 'br', 'tc', 'tl', 'tr', 'cc', 'cl', 'cr'],
      defaultValue: 'cr',
      style: { width: '200px' },
    },
  ],
} satisfies Config<State>
