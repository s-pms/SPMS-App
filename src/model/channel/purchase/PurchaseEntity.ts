import { Field, Model } from '@airpower/decorator'
import { AirEnum } from '@airpower/base/AirEnum'
import { PurchaseStatusEnum } from './PurchaseStatusEnum'
import { PurchaseDetailEntity } from './PurchaseDetailEntity'
import { AbstractBaseBillEntity } from '@/base/bill/AbstractBaseBillEntity'

@Model({
  label: '采购单',
})
export class PurchaseEntity extends AbstractBaseBillEntity<PurchaseDetailEntity> {
    @Field({
      label: '采购单号',
    })
  declare billCode: string

    @Field({
      label: '采购事由',
    })
      reason!: string

    @Field({
      label: '总金额',
    })
      totalPrice!: number

    @Field({
      label: '实际金额',
    })
      totalRealPrice!: number

    @Field({
      label: '采购状态',
      dictionary: PurchaseStatusEnum,
    })
      status!: number

    @Field({
      label: '采购明细',
      type: PurchaseDetailEntity,
      array: true,
    })
      details: PurchaseDetailEntity[] = []

    public getAuditingStatus(): AirEnum {
      return PurchaseStatusEnum.AUDITING
    }

    public getAuditedStatus(): AirEnum {
      return PurchaseStatusEnum.PURCHASING
    }

    public getRejectedStatus(): AirEnum {
      return PurchaseStatusEnum.REJECTED
    }
}
