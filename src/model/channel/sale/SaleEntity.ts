import { Field, Model } from '@airpower/decorator'
import { AirEnum } from '@airpower/base/AirEnum'
import { SaleStatusEnum } from './SaleStatusEnum'
import { SaleDetailEntity } from './SaleDetailEntity'
import { CustomerEntity } from '../customer/CustomerEntity'
import { AbstractBaseBillEntity } from '@/base/bill/AbstractBaseBillEntity'

@Model({
  label: '销售单',
})
export class SaleEntity extends AbstractBaseBillEntity<SaleDetailEntity> {
    @Field({
      label: '销售单号',
    })
  declare billCode: string

    @Field({
      label: '销售说明',
    })
      reason!: string

    @Field({
      label: '总金额',
    })
      totalPrice!: number

    @Field({
      label: '销售状态',
      dictionary: SaleStatusEnum,
    })
      status!: number

    @Field({
      label: '销售明细',
      type: SaleDetailEntity,
      array: true,
    })
      details: SaleDetailEntity[] = []

    @Field({
      label: '客户',
      type: CustomerEntity,
    })
      customer!: CustomerEntity

    getAuditingStatus(): AirEnum {
      return SaleStatusEnum.AUDITING
    }

    getAuditedStatus(): AirEnum {
      return SaleStatusEnum.OUTPUTTING
    }

    getRejectedStatus(): AirEnum {
      return SaleStatusEnum.REJECTED
    }
}
