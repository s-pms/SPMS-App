import {AbstractBaseBillEntity} from '@/base/bill/AbstractBaseBillEntity'
import {CustomerEntity} from '@/model/channel/customer/CustomerEntity'
import {MaterialEntity} from '@/model/asset/material/MaterialEntity'
import {OrderStatusEnum} from './OrderStatusEnum'
import {OrderTypeEnum} from './OrderTypeEnum'
import {OrderDetailEntity} from './OrderDetailEntity'
import {PlanEntity} from '../plan/PlanEntity'
import {Field, Model} from '@/airpower/decorator'
import {AirEnum} from '@/airpower/base/AirEnum'
import {RoutingEntity} from '@/model/mes/routing/RoutingEntity'

@Model({
  label: '生产订单',
})
export class OrderEntity extends AbstractBaseBillEntity<OrderDetailEntity> {
  @Field({
    label: '生产订单号',
  })
  declare billCode: string

  @Field({
    type: MaterialEntity,
  })
  material!: MaterialEntity

  @Field({
    label: '物料编码',
  })
  materialCode!: string

  @Field({
    label: '物料名称',
  })
  materialName!: string

  @Field({
    label: '生产数量',
    type: Number,
  })
  quantity!: number

  @Field({
    label: '完成数量',
    type: Number,
  })
  finishQuantity!: number

  @Field({
    label: '异常数量',
    type: Number,
  })
  ngQuantity!: number

  @Field({
    label: '生产计划号',
  })
  planBillCode!: string

  @Field({
    label: '订单状态',
    dictionary: OrderStatusEnum,
  })
  status!: number

  @Field({
    label: '订单类型',
    dictionary: OrderTypeEnum,
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
    label: '订单明细',
    type: OrderDetailEntity,
    array: true,
  })
  details: OrderDetailEntity[] = []

  @Field({
    label: '客户信息',
    type: CustomerEntity,
  })
  customer!: CustomerEntity

  @Field({
    label: '生产工艺',
    type: RoutingEntity,
  })
  routing!: RoutingEntity

  @Field({
    label: '关联计划',
    type: PlanEntity,
  })
  plan!: PlanEntity

  getAuditingStatus(): AirEnum {
    return OrderStatusEnum.AUDITING
  }

  getAuditedStatus(): AirEnum {
    return OrderStatusEnum.PRODUCING
  }

  getRejectedStatus(): AirEnum {
    return OrderStatusEnum.REJECTED
  }
}
