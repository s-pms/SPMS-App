import {Field, Model} from '@/airpower/decorator'
import {AbstractBaseBillDetailEntity} from '@/base/bill/detail/AbstractBaseBillDetailEntity'
import {MaterialEntity} from '@/model/asset/material/MaterialEntity'
import {StorageEntity} from '@/model/factory/storage/StorageEntity'

@Model({
  label: '入库明细',
})
export class InputDetailEntity extends AbstractBaseBillDetailEntity {
  @Field({
    type: StorageEntity,
  })
  storage!: StorageEntity

  @Field({
    type: MaterialEntity,
  })
  material!: MaterialEntity

  @Field({
    label: '入库数量',
    type: Number,
  })
  quantity!: number

  @Field({
    label: '已入库数量',
    type: Number,
  })
  finishQuantity!: number
}
