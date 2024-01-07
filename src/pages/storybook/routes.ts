import aAccordion from '../../abstract/accordion-new/story'
import aCollapse from '../../abstract/collapse/story'
import uiAccordion from './pages/accordion/ui'
import uiAccordionVChevron from './pages/accordion/ui-v-chevron'
import aAlign from './pages/align/a'
import aBaloon from './pages/balloon/a'
import uiButton from './pages/button/ui'
import uiCardInput from './pages/card-input/ui'
import uiCheckbox from './pages/checkbox/ui'
import uiDndCanvas from './pages/dnd-canvas/ui'
import uiDropdown from './pages/dropdown/ui'
import uiField from './pages/field/ui'
import uiInput from './pages/input/ui'
import uiItem from './pages/item/ui'
import uiItemVList from './pages/item/ui-v-list'
import uiLabeled from './pages/labeled/ui'
import uiLink from './pages/link/ui'
import aList from './pages/list/a'
import uiList from './pages/list/ui'
import uiMentions from './pages/mensions/ui'
import aModal from './pages/modal/a'
import uiModal from './pages/modal/ui'
import uiOrderedList from './pages/ordered-list/ui'
import uiPagination from './pages/pagination/ui'
import uiPaginator from './pages/paginator/ui'
import aPopover from './pages/popover/a'
import uiSpinner from './pages/spinner/ui'
import uiTextInput from './pages/text-input/ui'
import uiTextInputVClearable from './pages/text-input/ui-v-clearable'
import uiTextInputVPassword from './pages/text-input/ui-v-password'
import aTooltip from './pages/tooltip/a'
import uiTooltip from './pages/tooltip/ui'

export const routes = [
  ['Accordion', aAccordion, uiAccordion, uiAccordionVChevron],
  ['Align', aAlign],
  ['Balloon', aBaloon],
  ['Button', uiButton],
  ['CardInput', uiCardInput],
  ['Checkbox', uiCheckbox],
  ['Collapse', aCollapse],
  ['Dropdown', uiDropdown],
  ['Field', uiField],
  ['TextInput', uiTextInput, uiTextInputVClearable, uiTextInputVPassword],
  ['Input', uiInput],
  ['Item', uiItem, uiItemVList],
  ['Labeled', uiLabeled],
  ['Lint', uiLink],
  ['List', aList, uiList],
  ['Mentions', uiMentions],
  ['Modal', aModal, uiModal],
  ['Paginator', uiPaginator],
  ['Pagination', uiPagination],
  ['Popover', aPopover],
  ['Tooltip', aTooltip, uiTooltip],
  ['Spinner', uiSpinner],
  ['OrderedList', uiOrderedList],
  ['DndCanvas', uiDndCanvas],
] as const
