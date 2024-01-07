import { memo } from 'react'

import Icon, { IconProps } from '../ui/icon'

// https://www.svgrepo.com/svg/471168/chevron-right

export function ChevronRightComponent(props: IconProps): JSX.Element {
  return (
    <Icon {...props}>
      <path stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='m9 18 6-6-6-6' />
    </Icon>
  )
}

export const ChevronRight = memo(ChevronRightComponent)
