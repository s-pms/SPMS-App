import { BaseEntity } from '@/base/BaseEntity'
import { MaterialEntity } from '@/model/asset/material/MaterialEntity'
import { CustomerEntity } from '../customer/CustomerEntity'
import { Field, Model } from '@/airpower/decorator'

@Model({
  label: '销售价',
})
export class SalePriceEntity extends BaseEntity {
  @Field({
    type: MaterialEntity,
  })
    material!: MaterialEntity

  @Field({
    type: CustomerEntity,
  })
    customer!: CustomerEntity

  @Field({
    label: '物料编码',
  })
    materialCode!: string

  @Field({
    label: '物料名称',
  })
    materialName!: string

  @Field({
    label: '客户编码',
  })
    customerName!: string

  @Field({
    label: '客户名称',
  })
    customerCode!: string

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
}
