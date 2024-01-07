import Flex, { FlexProps } from '~/abstract/flex'
import { getCmdCtrlSymbol } from '~/lib/formaters'
import Link from '~/ui/link'
import Mark from '~/ui/mark'
import { c } from '~/utils/core'
import { isMetaCtrlKey, preventDefault, stopPropagation } from '~/utils/dom-event'

export interface Props extends FlexProps {
  url: string
  instance:
    | {
        name?: string | undefined
        keyName?: string | undefined
      }
    | undefined
}

const displayName = 'ui-Registry-w-Item-w-Names'

/**
 * Actors
 */
export default function Component(props: Props): JSX.Element {
  const { url, instance, className, ...flexProps } = props

  return (
    <Flex dir='column' className={c(displayName, className)} {...flexProps}>
      <Mark
        placement='tl'
        tooltipContent={
          <div style={{ width: 'max-content' }}>
            name
            <br />
            <br />
            <span style={{ opacity: '0.7', fontSize: '0.7em', textTransform: 'uppercase' }}>hotkeys:</span>
            <br />
            {getCmdCtrlSymbol()} + click - openInNewTab
          </div>
        }
      >
        <Link
          style={{ wordBreak: 'break-all' }}
          to={url}
          onClick={(e): void => (isMetaCtrlKey(e) ? stopPropagation(e) : preventDefault(e))}
        >
          {instance?.name}
        </Link>
      </Mark>
      <Mark placement='tl' tooltipContent='Системное название'>
        <span style={{ fontSize: '0.8em' }}>{instance?.keyName}</span>
      </Mark>
    </Flex>
  )
}

Component.displayName = displayName
