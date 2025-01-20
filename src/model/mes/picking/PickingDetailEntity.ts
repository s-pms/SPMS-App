import {Field, Model} from '@/airpower/decorator'
import {MaterialEntity} from '@/model/asset/material/MaterialEntity'
import {AbstractBaseBillDetailEntity} from '@/base/bill/detail/AbstractBaseBillDetailEntity'

@Model({
  label: '领料明细',
})
export class PickingDetailEntity extends AbstractBaseBillDetailEntity {
  @Field({
    type: MaterialEntity,
  })
  material!: MaterialEntity

  @Field({
    label: '申领数量',
    type: Number,
  })
  quantity!: number

  @Field({
    label: '已出库数量',
    type: Number,
  })
  finishQuantity!: number
}
