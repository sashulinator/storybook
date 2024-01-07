import clr from 'color'

import { light } from '~/ui/field/themes/light'

import shared from '../../../../shared/themes/colors/colibri/light'
import type { Colors } from '../../types/colors'

const regularBg = clr('#d1e0f9')

export const colors = {
  Button_outlineColor: shared.outlineColor,
  'Button_bg--hovered': clr('black').alpha(0.06),
  'Button_bg--active': clr('black').alpha(0.09),

  'Button_color--regular': shared.color,
  'Button_bg--regular': regularBg,
  'Button_bg--regular--hover': regularBg.darken(0.05),
  'Button_bg--regular--active': regularBg.lighten(0.01),

  'Button_bg--primary': shared.primary,
  'Button_color--primary': 'white',
  'Button_bg--primary--hover': shared.primary.lighten(0.1),
  'Button_bg--primary--active': shared.primary.darken(0.1),
  'Button_bg--primary--disabled': shared.primary.darken(0.3).alpha(0.7),

  'Button_color--ghost': shared.color,
  'Button_bg--ghost--active': light.field_bg__focus,
  'Button_bg--ghost--hover': light.field_bg__hover,
} satisfies Colors

export default colors
