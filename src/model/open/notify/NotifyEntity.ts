import { BaseEntity } from '@/base/BaseEntity'
import { Field, Model } from '@/airpower/decorator'
import { NotifyChannelEnum } from '@/model/open/notify/NotifyChannelEnum'

@Model({
  label: '通知',
})
export class NotifyEntity extends BaseEntity {
  @Field({
    label: '通知场景',
  })
    scene !: number

  @Field({
    label: '通知渠道',
    dictionary: NotifyChannelEnum,
  })
    channel !: number

  @Field({
    label: '通知地址',
  })
    url !: string

  @Field({
    label: '通知令牌',
  })
    token !: string

  @Field({
    label: '备注信息',
  })
    remark!: string
}
