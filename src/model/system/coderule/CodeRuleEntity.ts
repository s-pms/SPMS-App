import { Field, Model } from '@airpower/decorator'
import { BaseEntity } from '@/base/BaseEntity'
import { SerialNumberUpdateEnum } from '@/model/system/coderule/SerialNumberUpdateEnum'

/**
 * # 编码规则实体
 *
 * @author Hamm.cn
 */
@Model({
  permissionPrefix: 'coderule',
  label: '编码规则',
})
export class CodeRuleEntity extends BaseEntity {
    @Field({
      label: '编码所属字段',
    })
      ruleField!: number

    @Field({
      label: '规则前缀',
    })
      prefix!: string

    @Field({
      label: '序列号初始长度',
    })
      snLength!: number

    @Field({
      label: '规则模板',
    })
      template!: string

    @Field({
      label: '序列号更新',
      dictionary: SerialNumberUpdateEnum,
    })
      snType!: number

    @Field({
      label: '下一个编码',
    })
      nextCode!: string

    @Field({
      type: Number,
    })
      currentSn!: number
}
