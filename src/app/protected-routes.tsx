import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { routes } from '~/shared/routes'

ProtectedRoutes.displayName = 'app-Routes'

export interface Props {
  className?: string
  renderLayout: (props: { children: React.ReactNode }) => JSX.Element | null
}

// Пока еще не протектед но скоро будут
export default function ProtectedRoutes(props: Props): JSX.Element {
  const Layout = props.renderLayout

  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          {Object.entries(routes).map(([key, route]) => (
            <Route key={key} {...route} element={React.createElement(route.renderMain)} />
          ))}
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}
