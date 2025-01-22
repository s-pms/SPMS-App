import { Field, Model } from '@/airpower/decorator'
import { BaseEntity } from '@/base/BaseEntity'
import { ITree } from '@/airpower/interface/ITree'
import { PermissionSystemEnum } from './PermissionSystemEnum'

/**
 * # 权限
 * @author Hamm.cn
 */
@Model({
  label: '权限',
})
export class PermissionEntity extends BaseEntity implements ITree {
  @Field({
    label: '权限名称',
  })
    name!: string

  @Field({
    label: '权限标识',
  })
    identity!: string

  @Field({
    label: '类别',
    dictionary: PermissionSystemEnum,
  })
    isSystem!: boolean

  @Field({
    label: '父级ID',
  })
    parentId!: number

  /**
   * ### 子权限列表
   */
  @Field({
    // eslint-disable-next-line no-use-before-define
    type: PermissionEntity,
    array: true,
  }) children!: this[]

  /**
   * ### 父权限
   */
  @Field({
    // eslint-disable-next-line no-use-before-define
    type: PermissionEntity,
  }) parent!: this
}
