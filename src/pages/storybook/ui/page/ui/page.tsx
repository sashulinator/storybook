import './page.scss'

import { createElement, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

import type { Config } from '~/pages/storybook/types'
import { emitter } from '~/shared/emitter'
import Button from '~/ui/button'
import { SpacingWidth } from '~/ui/icon'
import { c } from '~/utils/core'
import { setPath } from '~/utils/dictionary'
import { useBoolean } from '~/utils/hooks'

import { Controls } from '..'

Page.displayName = 'story-Page'

export type Props = Config<Record<string, unknown>>

export default function Page(props: Props): JSX.Element {
  const location = useLocation()
  useEffect(() => emitter.emit('setDocumentTitle', ['Storybook', props.getName()]), [location])

  const [state, setState] = useState(buildState())
  const [isDescriptionFullHeight, , , toggleDescriptionFullHeight] = useBoolean(false)

  return (
    <div className={c(Page.displayName, isDescriptionFullHeight && `--descriptionFullHeight`)}>
      <Button
        variant='ghost'
        onClick={toggleDescriptionFullHeight}
        round={true}
        height={'l'}
        className='toggleDescriptionHeight'
      >
        <SpacingWidth />
      </Button>
      <div className='panel description'>{props.getDescription?.()}</div>
      {!isDescriptionFullHeight && (
        <div className='panel showcase'>{createElement(props.element, { state, setState })}</div>
      )}
      {!isDescriptionFullHeight && (
        <Controls className='panel controls' controls={props.controls} state={state} setState={setState} />
      )}
    </div>
  )

  function buildState(): Record<string, unknown> {
    let state = {}
    props.controls.forEach((control) => {
      state = setPath(control?.path || [control.name], control.defaultValue, state)
    })
    return state
  }
}
