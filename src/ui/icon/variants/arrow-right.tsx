import { memo } from 'react'

import Icon, { IconProps } from '../ui/icon'

// https://www.svgrepo.com/svg/471007/arrow-narrow-right

export function ArrowRightComponent(props: IconProps): JSX.Element {
  return (
    <Icon {...props}>
      <path
        d='M4 12H20M20 12L14 6M20 12L14 18'
        stroke='currentColor'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </Icon>
  )
}

export const ArrowRight = memo(ArrowRightComponent)
