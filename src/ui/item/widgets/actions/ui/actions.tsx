import Flex, { FlexProps } from '~/abstract/flex'
import Button from '~/ui/button'
import { Share } from '~/ui/icon'
import { TrashButton } from '~/ui/item'
import { c, isDev } from '~/utils/core'
import { stopPropagation } from '~/utils/dom-event'
import { fns } from '~/utils/function'

export interface Props extends FlexProps {
  className?: string | undefined
  onShareClick?: (event: React.MouseEvent) => void
  onTrashClick?: (event: React.MouseEvent) => void
}

const displayName = 'ui-Item-v-Actions'

/**
 * Actions
 */
export default function Component(props: Props): JSX.Element {
  const { onTrashClick, onShareClick, ...flexProps } = props

  return (
    <Flex {...flexProps} className={c(props.className, displayName, 'hidable')} gap='s'>
      {onShareClick && (
        <Button round={true} height='s' variant='regular'>
          <Share onClick={fns(onShareClick, stopPropagation)} />
        </Button>
      )}
      {onTrashClick && isDev() && (
        <TrashButton variant='regular' height='s' onClick={fns(onTrashClick, stopPropagation)} />
      )}
    </Flex>
  )
}

Component.displayName = displayName
