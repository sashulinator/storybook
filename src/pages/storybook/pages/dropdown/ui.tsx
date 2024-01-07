import { useState } from 'react'

import { Config, Props } from '~/pages/storybook/types'
import Dropdown from '~/ui/dropdown'
import { H1 } from '~/ui/heading'
import TextInput from '~/ui/text-input'

interface User {
  id: string
  username: string
  sex: string
}

const data: User[] = [
  {
    id: '1',
    username: 'Vasya',
    sex: 'male',
  },
  {
    id: '2',
    username: 'Petya',
    sex: 'male',
  },
  {
    id: '3',
    username: 'Olya',
    sex: 'female',
  },
  {
    id: '4',
    username: 'Lena',
    sex: 'female',
  },
  {
    id: '5',
    username: 'Kira',
    sex: 'female',
  },
  {
    id: '6',
    username: 'Misha',
    sex: 'male',
  },
  {
    id: '7',
    username: 'John',
    sex: 'male',
  },
  {
    id: '8',
    username: 'Jxxdohn',
    sex: 'male',
  },
  {
    id: '9',
    username: 'Johdxn',
    sex: 'male',
  },
  {
    id: '10',
    username: 'Jodhdxn',
    sex: 'male',
  },
  {
    id: '11',
    username: 'Jodhxn',
    sex: 'male',
  },
  {
    id: '12',
    username: 'Koko',
    sex: 'male',
  },
]

interface State {
  isFocused: boolean
  isError: boolean
  disabled: boolean
  hidden: boolean
  transparent: boolean
  height: 's' | 'm' | 'l'
}

export default {
  getName: (): string => 'ui-Dropdown',

  getDescription: function Description(): JSX.Element {
    return (
      <>
        <H1>{TextInput.displayName}</H1>
        Добавьте описание
      </>
    )
  },

  element: function Element(props: Props<State>): JSX.Element {
    const { state } = props
    const [value, setValue] = useState('')

    return (
      <Dropdown
        value={value}
        options={data}
        onChange={(e, value): void => setValue(value?.toString() || '')}
        getItemKey={(i): string => i?.id || ''}
        getItemString={(item): string => item?.username}
        {...state}
      />
    )
  },

  controls: [
    { name: 'isError', input: 'checkbox', defaultValue: false },
    { name: 'hidden', input: 'checkbox', defaultValue: false },
    { name: 'disabled', input: 'checkbox', defaultValue: false },
    { name: 'transparent', input: 'checkbox', defaultValue: false },
    {
      name: 'height',
      input: 'select',
      options: ['s', 'm', 'l'],
      defaultValue: 's',
      style: { width: '200px' },
    },
  ],
} satisfies Config<State>

/**
 * Private
 */
