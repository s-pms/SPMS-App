import { Field, Model } from '@/airpower/decorator'
import { IPayload } from '@/airpower/interface/IPayload'
import { ITree } from '@/airpower/interface/ITree'
import { BaseEntity } from '@/base/BaseEntity'
import { OperationEntity } from '@/model/mes/operation/OperationEntity'

@Model({
  label: '生产单元',
})
export class StructureEntity extends BaseEntity implements ITree, IPayload {
  @Field({
    label: '生产单元名称',
  })
    name!: string

  @Field({
    label: '生产单元编码',
  })
    code!: string

  @Field({
    // eslint-disable-next-line no-use-before-define
    type: StructureEntity,
    array: true,
  })
    children!: this[]

  parentId!: number

  @Field({
    label: '所属上级',
    // eslint-disable-next-line no-use-before-define
    type: StructureEntity,
  })
    parent!: this

  @Field({
    type: OperationEntity,
    array: true,
    label: '可执行工序',
  })
    operationList!: OperationEntity[]

  getPayloadLabel(): string {
    return this.name
  }
}
