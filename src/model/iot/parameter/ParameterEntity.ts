import { BaseEntity } from '@/base/BaseEntity'
import { ParameterTypeEnum } from './ParameterTypeEnum'
import { Field, Model } from '@/airpower/decorator'
import { ParameterSystemEnum } from '@/model/iot/parameter/ParameterSystemEnum'

@Model({
  label: '采集参数',
})
export class ParameterEntity extends BaseEntity {
  @Field({
    label: '参数名称',
  })
    code!: string

  @Field({
    label: '参数标题',
  })
    label!: string

  @Field({
    label: '数据类型',
    dictionary: ParameterTypeEnum,
  })
    dataType!: number

  @Field({
    label: '参数类别',
    dictionary: ParameterSystemEnum,
  })
    isSystem!: boolean
}
