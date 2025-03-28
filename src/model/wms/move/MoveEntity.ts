import { Field, Model } from '@airpower/decorator'
import { AirEnum } from '@airpower/base/AirEnum'
import { AbstractBaseBillEntity } from '@/base/bill/AbstractBaseBillEntity'
import { StorageEntity } from '@/model/factory/storage/StorageEntity'
import { MoveDetailEntity } from './MoveDetailEntity'
import { MoveStatusEnum } from './MoveStatusEnum'

@Model({
  label: '移库单',
})
export class MoveEntity extends AbstractBaseBillEntity<MoveDetailEntity> {
    @Field({
      label: '移库单号',
    })
  declare billCode: string

    @Field({
      label: '目标仓库',
      type: StorageEntity,
    })
      storage!: StorageEntity

    @Field({
      label: '移库状态',
      dictionary: MoveStatusEnum,
    })
      status!: number

    @Field({
      label: '移库明细',
      type: MoveDetailEntity,
      array: true,
    })
      details: MoveDetailEntity[] = []

    getAuditingStatus(): AirEnum {
      return MoveStatusEnum.AUDITING
    }

    getAuditedStatus(): AirEnum {
      return MoveStatusEnum.MOVING
    }

    getRejectedStatus(): AirEnum {
      return MoveStatusEnum.REJECTED
    }
}
