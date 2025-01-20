import { AirEntity } from '@/airpower/base/AirEntity'
import { Field, Model } from '@/airpower/decorator'
import { PublishStatusEnum } from '@/model/common/PublishStatusEnum'

/**
 * # 数据库实体基类
 * @author Hamm.cn
 */

@Model({
  addChildPermission: 'add',
})
export class BaseEntity extends AirEntity {
  @Field({
    label: '发布状态',
    type: Boolean,
    dictionary: PublishStatusEnum,
  })
    isPublished!: boolean

  @Field({
    label: '创建时间',
    type: Number,
  })
    createTime!: number

  @Field({
    label: '更新时间',
    type: Number,
  })
    updateTime!: number
}
