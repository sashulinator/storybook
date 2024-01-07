import { memo } from 'react'

import Icon, { IconProps } from '../ui/icon'

// https://www.svgrepo.com/svg/471440/flag-05

export function FlagComponent(props: IconProps): JSX.Element {
  return (
    <Icon {...props}>
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={2}
        d='M14.111 6.722h6.03c.447 0 .67 0 .801.094a.5.5 0 0 1 .205.348c.019.16-.09.356-.307.747l-1.47 2.645c-.079.142-.118.213-.134.288a.502.502 0 0 0 0 .201c.016.075.055.146.134.288l1.47 2.645c.217.391.326.587.307.747a.5.5 0 0 1-.205.348c-.13.094-.354.094-.802.094h-7.596c-.56 0-.84 0-1.054-.11a1 1 0 0 1-.437-.436c-.109-.214-.109-.494-.109-1.054v-2.623M7.25 21.5 3.028 4.611m1.583 6.333h7.9c.56 0 .84 0 1.054-.109a1 1 0 0 0 .437-.437c.11-.213.11-.493.11-1.054V4.1c0-.56 0-.84-.11-1.054a1 1 0 0 0-.437-.437c-.214-.109-.494-.109-1.054-.109H4.55c-.698 0-1.048 0-1.286.145a1 1 0 0 0-.438.56c-.082.267.003.605.172 1.283l1.614 6.456Z'
      />
    </Icon>
  )
}

export const Flag = memo(FlagComponent)
