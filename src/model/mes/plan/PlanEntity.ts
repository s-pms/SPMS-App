import {AbstractBaseBillEntity} from '@/base/bill/AbstractBaseBillEntity'
import {PlanDetailEntity} from './PlanDetailEntity'
import {PlanStatusEnum} from './PlanStatusEnum'
import {CustomerEntity} from '@/model/channel/customer/CustomerEntity'
import {PlanTypeEnum} from './PlanTypeEnum'
import {Field, Model} from '@/airpower/decorator'
import {AirEnum} from '@/airpower/base/AirEnum'

@Model({
  label: '生产计划',
})
export class PlanEntity extends AbstractBaseBillEntity<PlanDetailEntity> {
  @Field({
    label: '生产计划号',
  })
  declare billCode: string

  @Field({
    label: '计划状态',
    dictionary: PlanStatusEnum,
  })
  status!: number

  @Field({
    label: '计划类型',
    dictionary: PlanTypeEnum,
  })
  type!: number

  @Field({
    label: '开始时间',
  })
  startTime!: number

  @Field({
    label: '交付时间',
  })
  deliverTime!: number

  @Field({
    label: '完成时间',
  })
  finishTime!: number

  @Field({
    label: '计划明细',
    type: PlanDetailEntity,
    array: true,
  })
  details: PlanDetailEntity[] = []

  @Field({
    label: '客户信息',
    type: CustomerEntity,
  })
  customer!: CustomerEntity

  getAuditingStatus(): AirEnum {
    return PlanStatusEnum.AUDITING
  }

  getAuditedStatus(): AirEnum {
    return PlanStatusEnum.PRODUCING
  }

  getRejectedStatus(): AirEnum {
    return PlanStatusEnum.REJECTED
  }
}
