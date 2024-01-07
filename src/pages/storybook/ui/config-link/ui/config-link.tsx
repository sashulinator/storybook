import { configToPath } from '~/pages/storybook/lib'
import { Config } from '~/pages/storybook/types'
import Link from '~/ui/link'
import { c } from '~/utils/core'

ConfigLink.displayName = 'ConfigLink'

export interface Props {
  className?: string
  config: Pick<Config<unknown>, 'getPath' | 'getName'>
}

export default function ConfigLink(props: Props): JSX.Element {
  return (
    <Link className={c(props.className, ConfigLink.displayName)} to={`/storybook/${configToPath(props.config)}`}>
      {props.config.getName()}
    </Link>
  )
}
