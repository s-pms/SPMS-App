import { Field, Model } from '@airpower/decorator'
import { AirEnum } from '@airpower/base/AirEnum'
import { AbstractBaseBillEntity } from '@/base/bill/AbstractBaseBillEntity'
import { SaleEntity } from '@/model/channel/sale/SaleEntity'
import { OutputDetailEntity } from './OutputDetailEntity'
import { OutputTypeEnum } from './OutputTypeEnum'
import { OutputStatusEnum } from './OutputStatusEnum'
import { MoveEntity } from '../move/MoveEntity'
import { PickingEntity } from '@/model/mes/picking/PickingEntity'

@Model({
  label: '出库单',
})
export class OutputEntity extends AbstractBaseBillEntity<OutputDetailEntity> {
    @Field({
      label: '出库单号',
    })
  declare billCode: string

    @Field({
      label: '出库类型',
      dictionary: OutputTypeEnum,
    })
      type!: number

    @Field({
      label: '出库状态',
      dictionary: OutputStatusEnum,
    })
      status!: number

    @Field({
      label: '出库明细',
      type: OutputDetailEntity,
      array: true,
    })
      details: OutputDetailEntity[] = []

    @Field({
      label: '采购单',
      type: SaleEntity,
    })
      sale!: SaleEntity

    @Field({
      label: '移库单',
      type: MoveEntity,
    })
      move!: MoveEntity

    @Field({
      label: '领料单',
      type: PickingEntity,
    })
      picking!: PickingEntity

    getAuditingStatus(): AirEnum {
      return OutputStatusEnum.AUDITING
    }

    getAuditedStatus(): AirEnum {
      return OutputStatusEnum.OUTPUTTING
    }

    getRejectedStatus(): AirEnum {
      return OutputStatusEnum.REJECTED
    }
}
