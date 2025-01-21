import { BaseEntity } from '@/base/BaseEntity'
import { Field, Model } from '@/airpower/decorator'
import { UnitEntity } from '@/model/system/unit/UnitEntity'
import { MaterialTypeEnum } from './MaterialTypeEnum'
import { IPayload } from '@/airpower/interface/IPayload'

@Model({
  label: '物料',
})
export class MaterialEntity extends BaseEntity implements IPayload {
  @Field({
    label: '物料名称',
  }) name!: string

  @Field({
    label: '物料编码',
  }) code!: string

  @Field({
    label: '物料类型',
    dictionary: MaterialTypeEnum,
  })
    materialType!: number

  @Field({
    label: '规格型号',
  })
    spc!: string

  @Field({
    label: '计量单位',
    type: UnitEntity,
    alias: 'unitInfo',
  })
    unit!: UnitEntity

  @Field({
    label: '采购单价',
    type: Number,
  })
    purchasePrice!: number

  @Field({
    label: '销售单价',
    type: Number,
  })
    salePrice!: number

  getPayloadLabel(): string {
    return `${this.name}(${this.code})`
  }
}
