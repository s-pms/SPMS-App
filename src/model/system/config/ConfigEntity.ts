import { Field, Model } from '@airpower/decorator'
import { BaseEntity } from '@/base/BaseEntity'
import { ConfigType } from '@/model/system/config/ConfigType'
import { BooleanYesNoDictionary } from '@/model/common/BooleanYesNoDictionary'

/**
 * # 参数配置实体
 *
 * @author Hamm.cn
 */
@Model({
  label: '配置',
})
export class ConfigEntity extends BaseEntity {
    @Field({
      label: '配置名称',
    })
      name!: string

    @Field({
      label: '配置标识',
    })
      flag!: string

    @Field({
      label: '配置类型',
      dictionary: ConfigType,
    })
      type!: number

    @Field({
      label: '系统配置',
      type: Boolean,
      dictionary: BooleanYesNoDictionary,
    })
      isSystem!: boolean

    @Field({
      label: '配置参数',
    })
      config!: string
}
