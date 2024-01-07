import { lazy } from 'react'

import { Route } from '~/lib/route'
import NotFound from '~/pages/not-found'
import { Flag } from '~/ui/icon'
import { Mini as Nav } from '~/ui/nav'
import { isDev } from '~/utils/core'

const Storybook = lazy(() => import('~/pages/storybook'))
const StorybookNav = lazy(() => import('~/pages/storybook/ui/nav'))

export const routes = {
  storybook: {
    path: '/storybook/*',
    getURL: (): string => '/storybook',
    getName: (): string => 'Storybook',
    renderMain: Storybook as unknown as () => JSX.Element,
    renderNav: StorybookNav as unknown as () => JSX.Element,
    renderIcon: Flag as unknown as () => JSX.Element,
    navigatable: isDev(),
    layoutModificator: '--storybook',
  },

  notFound: {
    renderNav: Nav,
    path: '/*',
    renderMain: NotFound,
    getName: (): string => 'Не найдено',
    getURL: (): string => '',
    navigatable: false,
  },
} satisfies Record<string, Route>
