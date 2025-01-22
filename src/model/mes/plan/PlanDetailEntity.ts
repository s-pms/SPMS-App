import { Field, Model } from '@/airpower/decorator'
import { AbstractBaseBillDetailEntity } from '@/base/bill/detail/AbstractBaseBillDetailEntity'
import { MaterialEntity } from '@/model/asset/material/MaterialEntity'

@Model({
  label: '计划明细',
})
export class PlanDetailEntity extends AbstractBaseBillDetailEntity {
  @Field({
    type: MaterialEntity,
  })
    material!: MaterialEntity

  @Field({
    label: '计划数量',
    type: Number,
  })
    quantity!: number

  @Field({
    label: '已完成数量',
    type: Number,
  })
    finishQuantity!: number
}
