import { Field, Model } from '@airpower/decorator'
import { BaseEntity } from '@/base/BaseEntity'
import { OperationEntity } from '@/model/mes/operation/OperationEntity'
import { BomEntity } from '@/model/mes/bom/BomEntity'

/**
 * # 工序配置
 * @author Hamm.cn
 */
@Model({
  label: '工序配置',
})
export class RoutingOperationEntity extends BaseEntity {
    @Field({
      type: BomEntity,
    })
      bom!: BomEntity

    @Field({
      type: OperationEntity,
    })
      operation!: OperationEntity

    routingId!: number

    sortNo!: number

    isAutoNext!: boolean
}
