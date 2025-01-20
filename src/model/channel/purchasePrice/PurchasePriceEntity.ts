import { BaseEntity } from '@/base/BaseEntity'
import { Field, Model } from '@/airpower/decorator'
import { MaterialEntity } from '@/model/asset/material/MaterialEntity'
import { SupplierEntity } from '../supplier/SupplierEntity'

@Model({
  label: '采购价',
})
export class PurchasePriceEntity extends BaseEntity {
  @Field({
    type: MaterialEntity,
  })
    material!: MaterialEntity

  @Field({
    type: SupplierEntity,
  })
    supplier!: SupplierEntity

  @Field({
    label: '物料编码',
  })
    materialCode!: string

  @Field({
    label: '物料名称',
  })
    materialName!: string

  @Field({
    label: '供应商名称',
  })
    supplierName!: string

  @Field({
    label: '供应商编码',
  })
    supplierCode!: string

  @Field({
    label: '采购单价',
    type: Number,
  })
    price!: number
}
