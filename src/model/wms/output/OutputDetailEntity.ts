import {Field, Model} from '@/airpower/decorator'
import {AbstractBaseBillDetailEntity} from '@/base/bill/detail/AbstractBaseBillDetailEntity'
import {InventoryEntity} from '../inventory/InventoryEntity'
import {MaterialEntity} from '@/model/asset/material/MaterialEntity'

@Model({
  label: '出库明细',
})
export class OutputDetailEntity extends AbstractBaseBillDetailEntity {
  @Field({
    type: InventoryEntity,
  })
  inventory!: InventoryEntity

  @Field({
    type: MaterialEntity,
  })
  material!: MaterialEntity

  @Field({
    label: '出库数量',
  })
  quantity!: number

  @Field({
    label: '已出库数量',
  })
  finishQuantity!: number
}
