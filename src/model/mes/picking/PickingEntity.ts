import {Field, Model} from '@/airpower/decorator'
import {PickingStatusEnum} from './PickingStatusEnum'
import {PickingDetailEntity} from './PickingDetailEntity'
import {AbstractBaseBillEntity} from '@/base/bill/AbstractBaseBillEntity'
import {AirEnum} from '@/airpower/base/AirEnum'
import {StructureEntity} from '@/model/factory/structure/StructureEntity'

@Model({
  label: '领料单',
})
export class PickingEntity extends AbstractBaseBillEntity<PickingDetailEntity> {
  @Field({
    label: '申领单号',
  })
  declare billCode: string

  @Field({
    label: '申领状态',
    dictionary: PickingStatusEnum,
  })
  status!: number

  @Field({
    label: '申领明细',
    type: PickingDetailEntity,
    array: true,
  })
  details: PickingDetailEntity[] = []

  @Field({
    label: '生产单元',
    type: StructureEntity,
  })
  structure!: StructureEntity

  getAuditingStatus(): AirEnum {
    return PickingStatusEnum.AUDITING
  }

  getAuditedStatus(): AirEnum {
    return PickingStatusEnum.OUTPUTTING
  }

  getRejectedStatus(): AirEnum {
    return PickingStatusEnum.REJECTED
  }
}
