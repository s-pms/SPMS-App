import { Field, Model } from '@/airpower/decorator'
import { MaterialEntity } from '@/model/asset/material/MaterialEntity'
import { SupplierEntity } from '../supplier/SupplierEntity'
import { AbstractBaseBillDetailEntity } from '@/base/bill/detail/AbstractBaseBillDetailEntity'

@Model({
  label: '采购明细',
})
export class PurchaseDetailEntity extends AbstractBaseBillDetailEntity {
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

  @Field({
    label: '采购数量',
    type: Number,
  })
    quantity!: number

  @Field({
    label: '已采购数量',
    type: Number,
  })
    finishQuantity!: number
}
