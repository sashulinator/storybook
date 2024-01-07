/* eslint-disable eslint-comments/disable-enable-pair, react-hooks/rules-of-hooks */
import './reset.css'

import './animations.css'
import './app.css'
import './measures.css'
import './utils.css'

import { Suspense } from 'react'
import { createPortal } from 'react-dom'

import { RootLayout } from '~/ui/layout'
import { Container as ModalContainer } from '~/ui/modal'
import { Container as ToastContainer } from '~/ui/toast'
import { Container as TooltipContainer } from '~/ui/tooltip'

import ProtectedRoutes from './protected-routes'

export default function App(): JSX.Element {
  // prettier-ignore
  return (
    <Suspense>
      <ProtectedRoutes renderLayout={RootLayout}/>
      {createPortal([
        <ModalContainer key='3'/>,
        <ToastContainer key='1' />,
        <TooltipContainer key='2'/>,
      ], document.body)}
    </Suspense>
  )
}
