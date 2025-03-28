import { Field, Model } from '@airpower/decorator'
import { IPayload } from '@airpower/interface/IPayload'
import { BaseEntity } from '@/base/BaseEntity'
import { MaterialEntity } from '@/model/asset/material/MaterialEntity'
import { BomEntity } from '@/model/mes/bom/BomEntity'
import { RoutingOperationEntity } from '@/model/mes/routing/operation/RoutingOperationEntity'
import { BooleanYesNoDictionary } from '@/model/common/BooleanYesNoDictionary'

/**
 * # 生产工艺
 * @author Hamm.cn
 */
@Model({
  label: '生产工艺',
})
export class RoutingEntity extends BaseEntity implements IPayload {
    @Field({
      label: '工艺名称',
      type: String,
    })
      name!: string

    @Field({
      label: '工艺编码',
      type: String,
    })
      code!: string

    @Field({
      type: MaterialEntity,
    })
      material!: MaterialEntity

    @Field({
      type: BomEntity,
    })
      bom!: BomEntity

    @Field({
      type: RoutingOperationEntity,
      array: true,
    })
      details: RoutingOperationEntity[] = []

    @Field({
      label: '工艺配方',
      type: Boolean,
      dictionary: BooleanYesNoDictionary,
    })
      isRoutingBom!: boolean

    getPayloadLabel(): string {
      return this.name
    }
}
