import { Field, Model } from '@airpower/decorator'
import { BaseEntity } from '@/base/BaseEntity'

/**
 * # 工序
 * @author Hamm.cn
 */
@Model({
  label: '工序',
})
export class OperationEntity extends BaseEntity {
    @Field({
      label: '工序名称',
      type: String,
    })
      name!: string

    @Field({
      label: '工序编码',
      type: String,
    })
      code!: string
}
