import { a, useSpring } from '@react-spring/web'

import React, { CSSProperties, ForwardedRef, forwardRef } from 'react'

import { Position, c } from '~/utils/core'
import { useMeasure } from '~/utils/hooks'
import { setRefs } from '~/utils/react'

export interface Props extends React.HTMLAttributes<HTMLDivElement> {
  isExpanded: boolean
  from?: (CSSProperties & Partial<Position>) | undefined
  to?: (CSSProperties & Partial<Position>) | undefined
  duration?: number | undefined
  containerProps?: React.HTMLAttributes<HTMLDivElement> | undefined
}

const displayName = 'a-Collapse'

function Component(props: Props, ref: ForwardedRef<HTMLDivElement>): JSX.Element {
  const { containerProps, duration, to, from, isExpanded, children, ...divProps } = props

  const [measureRef, measure] = useMeasure()
  const height = measure.height || 'auto'

  const springProps = useSpring({
    from,
    to: { height: isExpanded ? height : 0, ...to },
    config: { duration: duration ?? 200 },
  })

  return (
    <a.div
      {...divProps}
      style={{ overflow: 'hidden', width: '100%', ...divProps.style, ...springProps }}
      ref={ref}
      className={c(
        divProps.className,
        displayName,
        props.isExpanded && '--expanded',
        !props.isExpanded && '--collapsed'
      )}
    >
      <div {...containerProps} className={c('container')} ref={setRefs(measureRef)}>
        {children}
      </div>
    </a.div>
  )
}

const ForwardRef = forwardRef(Component)
ForwardRef.displayName = displayName
export default ForwardRef
