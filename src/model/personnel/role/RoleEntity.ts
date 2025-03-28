import { Field, Model } from '@airpower/decorator'
import { BaseEntity } from '@/base/BaseEntity'
import { MenuEntity } from '@/model/system/menu/MenuEntity'
import { PermissionEntity } from '@/model/system/permission/PermissionEntity'

/**
 * # 角色
 * @author Hamm.cn
 */

@Model({
  label: '角色',
})
export class RoleEntity extends BaseEntity {
    @Field({
      label: '角色名称',
    })
      name!: string

    @Field({
      label: '角色编码',
    })
      code!: string

    /**
     * ### 菜单列表
     */
    @Field({
      type: MenuEntity,
      array: true,
    })
      menuList!: MenuEntity[]

    /**
     * ### 权限列表
     */
    @Field({
      type: PermissionEntity,
      array: true,
    }) permissionList!: PermissionEntity[]
}
