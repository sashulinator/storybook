import clr from 'color'

import { dark } from '~/ui/field/themes/dark'

import shared from '../../../../shared/themes/colors/colibri/dark'
import type { Colors } from '../../types/colors'

const regularBg = clr('#434343')

export const colors = {
  Button_outlineColor: shared.outlineColor,
  'Button_bg--hovered': clr('white').alpha(0.07),
  'Button_bg--active': clr('white').alpha(0.11),

  'Button_bg--primary': shared.primary,
  'Button_color--primary': 'white',
  'Button_bg--primary--hover': shared.primary.lighten(0.1),
  'Button_bg--primary--active': shared.primary.lighten(0.1),
  'Button_bg--primary--disabled': shared.primary.lighten(0.3).alpha(0.7),

  'Button_color--regular': shared.color,
  'Button_bg--regular': regularBg,
  'Button_bg--regular--active': regularBg.darken(0.3),
  'Button_bg--regular--hover': regularBg.lighten(0.1),

  'Button_color--ghost': shared.color,
  'Button_bg--ghost--active': dark.field_bg__focus,
  'Button_bg--ghost--hover': dark.field_bg__hover,
} satisfies Colors

export default colors
