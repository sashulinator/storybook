import { ForwardedRef, forwardRef, useState } from 'react'

import Popover, { Points, arePointsEqual } from '~/abstract/popover'
import { Config, Props } from '~/pages/storybook/types'
import ConfigLink from '~/pages/storybook/ui/config-link/ui/config-link'
import { H1 } from '~/ui/heading'
import Paragraph from '~/ui/paragraph/ui/paragraph'
import { setRefs } from '~/utils/react'

import aAlign from '../align/a'

interface State {
  sourcePosition: 'fixed' | 'absolute'
  points: Points
  portalSourceIntoContainer: boolean
  containerRelative: boolean
  opened: boolean
}

export default {
  getName: (): string => Popover.displayName,

  getDescription: function Description(): JSX.Element {
    return (
      <>
        <H1>{Popover.displayName}</H1>
        <Paragraph>
          Расширяет <ConfigLink config={aAlign} />
        </Paragraph>
        <Paragraph>
          Должен мгновенно менять цвет и положение при `adjustX === true` если происходит перепозиционирование
        </Paragraph>
      </>
    )
  },

  element: function Element(props: Props<State>): JSX.Element {
    const {
      state: { portalSourceIntoContainer, containerRelative, ...popoverProps },
    } = props

    const [open, setOpen] = useState(false)

    useState(() => {
      setTimeout(() => setOpen(true), 1000)
    })

    const [containerRef, setContainerRef] = useState<null | HTMLElement>()
    const [adjustedPoints, setAdjustedPoints] = useState<Points>(['tl', 'tc'])

    return (
      <div style={{ width: '100%', height: '100%' }}>
        <div
          ref={setContainerRef}
          style={{
            overflow: 'hidden',
            border: containerRelative ? '1px solid red' : '1px solid blue',
            position: containerRelative ? 'relative' : undefined,
            padding: '200px 0 0 500px',
          }}
        >
          <Popover
            onAligned={(result): void => {
              if (!arePointsEqual(result.points, adjustedPoints)) setAdjustedPoints(result.points)
            }}
            renderContent={Content}
            renderTarget={Target}
            contentProps={{ adjustedPoints }}
            targetProps={{ adjustedPoints }}
            containerElement={portalSourceIntoContainer ? containerRef : undefined}
            {...popoverProps}
            opened={open}
          />
        </div>
      </div>
    )
  },

  controls: [
    { name: 'opened', input: 'checkbox', defaultValue: true },
    {
      name: 'placement',
      input: 'select',
      options: ['bc', 'bl', 'br', 'tc', 'tl', 'tr', 'cc', 'cl', 'cr'],
      defaultValue: 'cr',
      style: { width: '200px' },
    },
    { name: 'portalSourceIntoContainer', input: 'checkbox', defaultValue: false },
    { name: 'adjustX', path: ['overflow', 'adjustX'], input: 'checkbox', defaultValue: false },
    { name: 'adjustY', path: ['overflow', 'adjustY'], input: 'checkbox', defaultValue: false },
    { name: 'alwaysByViewport', path: ['overflow', 'alwaysByViewport'], input: 'checkbox', defaultValue: false },
  ],
} satisfies Config<State>

// Private

type ContentProps = { adjustedPoints: Points }

const Content = forwardRef(function Element(props: ContentProps, ref: ForwardedRef<HTMLElement>) {
  return (
    <div
      ref={setRefs(ref)}
      style={{
        width: '400px',
        height: '100px',
        background: props.adjustedPoints[0] === 'cl' ? 'red' : 'blue',
      }}
    >
      Points {props.adjustedPoints.join(' - ')}
    </div>
  )
})

type TargetProps = { adjustedPoints: Points }

const Target = forwardRef(function Element(props: TargetProps, ref: ForwardedRef<HTMLElement>): JSX.Element {
  return (
    <button ref={setRefs(ref)} style={{ background: props.adjustedPoints[0] === 'cl' ? 'red' : 'blue' }}>
      Target
    </button>
  )
})
