import {BaseEntity} from '@/base/BaseEntity'
import {Field, Model} from '@/airpower/decorator'

@Model({
  label: '日志',
})
export class LogEntity extends BaseEntity {
  @Field({
    label: '动作',
  })
  action!: string

  @Field({
    label: '版本号',
  })
  version!: number

  @Field({
    label: '平台',
  })
  platform!: string

  @Field({
    label: 'IP',
  })
  ip!: string

  @Field({
    label: '请求体',
  })
  request!: string

  @Field({
    label: '响应数据',
  })
  response!: string

  @Field({
    label: '用户ID',
  })
  userId!: number

  @Field({
    label: '总耗时',
  })
  pendingTime!: number
}
