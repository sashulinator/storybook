import './item.css'

import { ItemProps } from '~/ui/old-list'
import { ControllableItemProps } from '~/ui/old-list/ui/controlled-list'

export type DropdownItemProps<T, P> = ItemProps<T, P & ControllableItemProps>

export default function DropdownListItem<T, P>(props: ItemProps<T, P & ControllableItemProps>): JSX.Element {
  const { isSelected, isChecked } = props

  return (
    <li
      ref={props.setElementRef}
      {...props.itemProps?.controlProps}
      style={{
        backgroundColor: isSelected ? 'var(--bg)' : isChecked ? 'var(--bg)' : undefined,
        padding: '12px',
        userSelect: 'none',
      }}
    >
      {props.getItemString(props.item, props.listState.data)}
    </li>
  )
}
