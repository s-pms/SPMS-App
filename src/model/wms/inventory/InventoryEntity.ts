import { Field, Model } from '@/airpower/decorator'
import { BaseEntity } from '@/base/BaseEntity'
import { MaterialEntity } from '@/model/asset/material/MaterialEntity'
import { StorageEntity } from '@/model/factory/storage/StorageEntity'
import { StructureEntity } from '@/model/factory/structure/StructureEntity'
import { InventoryTypeEnum } from '@/model/wms/inventory/InventoryTypeEnum'

@Model({
  label: '库存',
})
export class InventoryEntity extends BaseEntity {
  @Field({
    label: '库存数量',
  })
    quantity!: number

  @Field({
    label: '仓库',
    type: StorageEntity,
  })
    storage!: StorageEntity

  @Field({
    label: '库存类型',
    dictionary: InventoryTypeEnum,
  })
    type!: number

  @Field({
    label: '物料信息',
    type: MaterialEntity,
  })
    material!: MaterialEntity

  @Field({
    label: '生产单元',
    type: StructureEntity,
  })
    structure!: StructureEntity
}
