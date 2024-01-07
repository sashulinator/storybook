import { Fragment } from 'react'
import { Scrollbars } from 'react-custom-scrollbars'

import Flex from '~/abstract/flex'
import getRootElement from '~/lib/dom/get-root-element'
import { configToPath } from '~/pages/storybook/lib'
import { routes } from '~/pages/storybook/routes'
import { Config } from '~/pages/storybook/types'
import { ChevronAccordion } from '~/ui/accordion'
import { Any } from '~/utils/core'
import { setCSSVar } from '~/utils/dom'

import ConfigLink from '../../config-link/ui/config-link'

export default function Nav(): JSX.Element {
  setCSSVar('nav-width', 200, getRootElement())

  return (
    <nav
      style={{
        borderRight: '1px solid var(--bgSecondary)',
        height: '100vh',
      }}
    >
      <Scrollbars autoHide autoHideTimeout={1000} autoHideDuration={500}>
        <Flex gap='xxxl' dir='column' padding='var(--l) var(--xxxl) 30vh var(--xxxl) '>
          <ul style={{ width: '100%' }}>
            <Flex gap='m' dir='column'>
              <ul>
                {routes.flatMap(([name, ...configs]) => {
                  return (
                    <Fragment key={name}>
                      <ChevronAccordion header={name}>
                        <Flex dir='column' gap='l' padding='var(--m) 0 var(--m) var(--m) '>
                          {configs.map((c: unknown) => {
                            const config = c as Config<Any>
                            const path = configToPath(config)
                            return (
                              <li key={path}>
                                <ConfigLink config={config} />
                              </li>
                            )
                          })}
                        </Flex>
                      </ChevronAccordion>
                    </Fragment>
                  )
                })}
              </ul>
            </Flex>
          </ul>
        </Flex>
      </Scrollbars>
    </nav>
  )
}
