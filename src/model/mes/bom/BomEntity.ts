import {Field, Model} from '@/airpower/decorator'
import {BomDetailEntity} from '@/model/mes/bom/BomDetailEntity'
import {BomTypeEnum} from '@/model/mes/bom/BomTypeEnum'
import {IPayload} from '@/airpower/interface/IPayload'
import {BaseEntity} from '@/base/BaseEntity'

/**
 * # 生产配方
 * @author Hamm.cn
 */

@Model({
  label: '生产配方',
})
export class BomEntity extends BaseEntity implements IPayload {
  @Field({
    label: '配方编码',
  })
  code!: string

  @Field({
    label: '配方名称',
  })
  name!: string

  @Field({
    label: '配方类型',
    dictionary: BomTypeEnum,
  })
  type!: number

  @Field({
    label: '配方明细',
    type: BomDetailEntity,
    array: true,
  })
  details: BomDetailEntity[] = []

  getPayloadLabel(): string {
    return this.name
  }
}
