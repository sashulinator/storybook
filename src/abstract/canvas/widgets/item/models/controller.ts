import { PositionPropNew } from '~/lib/emitter'
import { Id, Position } from '~/utils/core'
import { Emitter, Prop } from '~/utils/emitter'

export type Events = {
  /**
   * HTMLDivElement
   */
  ref: { value: null | HTMLDivElement }

  /**
   * Позиция на канве
   */
  position: { value: Position }
}

export interface Props {
  /**
   * Идентификатор
   */
  id: Id

  /**
   * Позиция на канве
   */
  position: Position
}

export class Controller<E extends Events> extends Emitter<E> {
  /**
   * Идентификатор
   */
  id: Id

  /**
   * HTMLDivElement
   */
  ref: Prop<'ref', Events['ref']['value']>

  /**
   * Позиция на канве
   */
  position: PositionPropNew<'position'>

  constructor(props: Props) {
    super()

    this.id = props.id

    this.ref = new Prop('ref', null as Events['ref']['value'], this)

    this.position = new PositionPropNew('position', props.position, this)
  }
}
