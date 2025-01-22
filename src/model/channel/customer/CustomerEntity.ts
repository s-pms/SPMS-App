import { BaseEntity } from '@/base/BaseEntity'
import { Field, Model } from '@/airpower/decorator'
import { IPayload } from '@/airpower/interface/IPayload'

@Model({
  label: '客户',
})
export class CustomerEntity extends BaseEntity implements IPayload {
  @Field({
    label: '客户名称',
  })
    name!: string

  @Field({
    label: '客户编码',
  })
    code!: string

  @Field({
    label: '联系电话',
  })
    phone!: string

  getPayloadLabel(): string {
    return this.name
  }
}
