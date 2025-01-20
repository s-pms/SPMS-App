import { BaseEntity } from '@/base/BaseEntity'
import { Field, Model } from '@/airpower/decorator'
import { IPayload } from '@/airpower/interface/IPayload'

@Model({
  label: '供应商',
})
export class SupplierEntity extends BaseEntity implements IPayload {
  @Field({
    label: '供应商名称',
  })
    name!: string

  @Field({
    label: '供应商编码',
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
