import { BaseEntity } from '@/base/BaseEntity'
import { Field, Model } from '@/airpower/decorator'
import { IPayload } from '@/airpower/interface/IPayload'

@Model({
  label: '计量单位',
})
export class UnitEntity extends BaseEntity implements IPayload {
  @Field({
    label: '单位名称',
  })
    name!: string

  @Field({
    label: '单位编码',
  })
    code!: string

  getPayloadLabel(): string {
    return `${this.name}(${this.code})`
  }
}
