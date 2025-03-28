import { Field, Model } from '@airpower/decorator'
import { MaterialEntity } from '@/model/asset/material/MaterialEntity'
import { CustomerEntity } from '../customer/CustomerEntity'
import { AbstractBaseBillDetailEntity } from '@/base/bill/detail/AbstractBaseBillDetailEntity'

@Model({
  label: '销售明细',
})
export class SaleDetailEntity extends AbstractBaseBillDetailEntity {
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
      label: '物料',
      type: Number,
    })
      materialId!: number

    @Field({
      label: '销售单价',
      type: Number,
    })
      price!: number

    @Field({
      label: '销售数量',
      type: Number,
    })
      quantity!: number

    @Field({
      type: Number,
    })
      finishQuantity!: number

    @Field({
      type: CustomerEntity,
    })
      customer!: CustomerEntity
}
