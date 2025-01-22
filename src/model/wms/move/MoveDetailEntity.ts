import { Field, Model } from '@/airpower/decorator'
import { AbstractBaseBillDetailEntity } from '@/base/bill/detail/AbstractBaseBillDetailEntity'
import { InventoryEntity } from '../inventory/InventoryEntity'

@Model({
  label: '移库明细',
})
export class MoveDetailEntity extends AbstractBaseBillDetailEntity {
  @Field({
    type: InventoryEntity,
  })
    inventory!: InventoryEntity

  @Field({
    label: '移动数量',
  })
    quantity!: number

  @Field({
    label: '已移动数量',
  })
    finishQuantity!: number
}
