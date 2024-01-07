import './field.css'

import { ReactNode } from 'react'

import AbstractField, { FieldProps as AbstractFieldProps } from '~/abstract/field'
import Flex from '~/abstract/flex'
import { emitter } from '~/shared/emitter'
import Spinner from '~/ui/spinner'
import { c } from '~/utils/core'

import { dark } from '../themes/dark'
import { light } from '../themes/light'

emitter.emit('addThemes', { dark, light })

const displayName = 'ui-Field'

export interface Props extends Omit<AbstractFieldProps, 'height'> {
  height?: 'm' | 's' | 'l' | null
  isLoading?: boolean | undefined
}

export default function Component(props: Props): JSX.Element {
  const { height = 'm', isLoading, ...fieldProps } = props

  return (
    <AbstractField height={height} {...fieldProps} className={c(props.className, displayName)}>
      <_IsLoading isLoading={isLoading} {...fieldProps} />
    </AbstractField>
  )
}

Component.displayName = displayName

// Private

export function _IsLoading(props: Props): ReactNode {
  if (!props.isLoading) return props.children

  return (
    <Flex width='100%' mainAxis='end' style={{ position: 'relative' }}>
      <div style={{ position: 'absolute', top: '50%', right: '1rem', transform: 'translateY(-60%)' }}>
        <Spinner size='s' />
      </div>
      <div style={{ visibility: 'hidden', width: '100%', height: '100%' }}>{props.children}</div>
    </Flex>
  )
}
