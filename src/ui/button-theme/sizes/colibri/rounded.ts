import { common } from '~/ui/field/themes/common'

import shared from '../../../../shared/themes/sizes/colibri/rounded'
import type { Sizes } from '../../types/sizes'

export const sizes = {
  // height
  'Button_height--s': common.field_height__s,
  'Button_height--m': common.field_height__m,
  'Button_height--l': common.field_height__l,
  // padding
  'Button_padding--s': '0.5rem',
  'Button_padding--m': '1rem',
  'Button_padding--l': '2rem',
  // outline
  Button_outlineWidth: shared.outlineWidth,
} satisfies Sizes

export default sizes
