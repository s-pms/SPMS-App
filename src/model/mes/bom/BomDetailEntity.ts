import { AbstractBaseBillDetailEntity } from '@/base/bill/detail/AbstractBaseBillDetailEntity'
import { Field, Model } from '@/airpower/decorator'
import { MaterialEntity } from '@/model/asset/material/MaterialEntity'

@Model({
  label: '配方明细',
})
export class BomDetailEntity extends AbstractBaseBillDetailEntity {
  @Field({
    type: MaterialEntity,
  })
    material!: MaterialEntity

  @Field({
    label: '物料编码',
  })
    materialCode!: string

  @Field({
    label: '物料名称',
  })
    materialName!: string

  @Field({
    label: '所需数量',
  })
    quantity!: number

  finishQuantity!: number
}
