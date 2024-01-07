import './tooltip.scss'

import React from 'react'

import ATooltip from '~/abstract/tooltip'
import { c } from '~/utils/core'
import { ReactElementWithRef } from '~/utils/react'

import { Balloon, Overflow, Point } from '..'
import { getContainerElement } from '../widgets/container'

const displayName = 'ui-Tooltip'

export interface Props extends React.HTMLAttributes<HTMLElement> {
  /**
   * Target
   */
  children: ReactElementWithRef<HTMLElement, React.HTMLAttributes<HTMLElement>>

  /**
   * Tooltip content
   */
  contents: React.ReactNode

  /**
   * Delay before opening
   */
  delay?: number | undefined

  /**
   * Tooltip placent
   */
  placement?: Point | undefined

  /**
   * The container element for the component; defaults to `document.body`.
   */
  containerElement?: HTMLElement | null | undefined

  /**
   * Overflow config
   */
  overflow?: Overflow | undefined

  /**
   * A function that is called when the popover is closed.
   */
  onClose?: ((e: MouseEvent | TouchEvent | KeyboardEvent) => void) | undefined
}

/**
 * Компонент Tooltip
 *
 * @param props {@link Props}
 * @returns
 */
export default function Tooltip(props: Props): JSX.Element {
  const { delay = 150, placement = 'tc', contents, containerElement, className, ...tooltipProps } = props

  return (
    <ATooltip
      {...tooltipProps}
      delay={delay}
      placement={placement}
      balloonProps={{ contents, placement, className: c(className, displayName) }}
      renderBalloon={Balloon}
      containerElement={containerElement || getContainerElement()}
    />
  )
}

Tooltip.displayName = displayName
