import { animated, useSpring } from '@react-spring/web'

import React, { ForwardedRef, forwardRef } from 'react'

import { c } from '~/utils/core'
import { setRefs } from '~/utils/react'

const displayName = 'ui-Animation-AppearFrom'

export interface Props extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  to?: { x?: number; y?: number; opacity?: number }
  from: { x?: number; y?: number; opacity?: number }
  delay?: number | undefined
  duration?: number
}

export function Component(props: Props, ref: ForwardedRef<HTMLElement>): JSX.Element {
  const { delay, to, duration = 300, from, style, ...divProps } = props

  const springProps = useSpring({
    delay,
    config: { duration },
    transition: 10,
    to: { opacity: from.opacity ?? 1, x: to?.x ?? 0, y: to?.y ?? 0 },
    from: { opacity: 0, x: from.x ?? 0, y: from.y ?? 0 },
    position: 'absolute',
  })

  return (
    <animated.div
      {...divProps}
      ref={setRefs(ref)}
      className={c(props.className, displayName)}
      style={{ ...springProps, ...style }}
    />
  )
}

const ForwardRef = forwardRef(Component)
ForwardRef.displayName = displayName
export { ForwardRef as AppearFrom }
