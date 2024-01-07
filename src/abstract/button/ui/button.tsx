import './button.css'

import { ForwardedRef, forwardRef, memo } from 'react'

import { c } from '~/utils/core'

import { getClassnames } from '../lib/get-classnames'
import { UnstyledButton, UnstyledButtonProps } from '../widgets/unstyled-button'

export const displayName = 'a-Button'

export interface Props extends UnstyledButtonProps {
  height?: 's' | 'm' | 'l' | null | undefined
  padding?: 's' | 'm' | 'l' | null | undefined
  square?: boolean | undefined
  round?: boolean | undefined
}

function Component(props: Props, ref: ForwardedRef<HTMLButtonElement>): JSX.Element {
  const { height = 'm', square, round, padding = 'm', ...restProps } = props

  const classnames = getClassnames({ height, square, round, padding })

  return (
    <UnstyledButton
      {...restProps}
      ref={ref}
      className={c(props.className, displayName, restProps.disabled && '--disabled', ...classnames)}
    >
      {props.children}
    </UnstyledButton>
  )
}

const ButtonRef = forwardRef(Component)
const Button = memo(ButtonRef)
Button.displayName = displayName
export default Button
