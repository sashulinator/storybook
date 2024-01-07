import { ToStringable } from '~/utils/core'

export type Theme = {
  // height
  'button_height--s': ToStringable
  'button_height--m': ToStringable
  'button_height--l': ToStringable

  // padding
  'button_padding--s': ToStringable
  'button_padding--m': ToStringable
  'button_padding--l': ToStringable

  // outline
  button_outlineColor: ToStringable
  button_outlineWidth: ToStringable
}
