import './landscape-animation.scss'

import { a, useSpring } from '@react-spring/web'

import { Toast } from '~/abstract/toast'
import { c } from '~/utils/core'
import { useMeasure } from '~/utils/hooks'
import { setRefs } from '~/utils/react'

interface LandscapeAnimationProps {
  toast: Toast
  children: React.ReactNode
}

export default function LandscapeAnimation(props: LandscapeAnimationProps): JSX.Element {
  const [ref, measure] = useMeasure()
  const toastHeight = measure.height ?? 0
  const toastWidth = measure.width ?? 0
  const isExpanded = !props.toast.isExiting

  const { height, x, y } = useSpring({
    config: {
      duration: props.toast.isEntering ? props.toast.maxEnteringTransition : props.toast.maxExitingTransition - 300,
    },
    // Костыль. В первый рендер toastWidth=0, поэтому чтобы тост не выскакивал с середины '* 1.2'
    from: { height: toastHeight, x: -toastWidth * 1.2, y: 0 },
    to: {
      height: isExpanded ? toastHeight : 0,
      y: isExpanded ? 0 : toastHeight * 3,
      x: 0,
    },
  })

  return (
    // Костыль. В первый рендер toastWidth=0, поэтому чтобы тост не моргал ставим hidden
    <a.div data-x='ToastLandscapeAnimation' className={c(toastWidth === 0 && 'hidden')} style={{ height, x, y }}>
      <div ref={setRefs(ref)} style={{ padding: '0 0 12px 12px' }}>
        {props.children}
      </div>
    </a.div>
  )
}
