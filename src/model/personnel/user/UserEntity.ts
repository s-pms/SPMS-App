import { Field } from '@/airpower/decorator'
import { BaseEntity } from '@/base/BaseEntity'
import { RoleEntity } from '../role/RoleEntity'
import { UserGenderEnum } from '@/model/personnel/user/UserGenderEnum'
import { DepartmentEntity } from '@/model/personnel/department/DepartmentEntity'

/**
 * # 用户实体
 */
export class UserEntity extends BaseEntity {
  @Field({
    label: '昵称',
  })
    nickname!: string

  @Field({
    label: '手机',
  })
    phone!: string

  @Field({
    label: '邮箱',
  })
    email!: string

  @Field({
    label: '姓名',
  })
    realName!: string

  @Field({
    label: '身份证号',
  })
    idCard!: string

  @Field({
    label: '头像',
  })
    avatar!: string

  @Field({
    label: '密码',
  })
    password!: string

  @Field({
    type: RoleEntity,
    array: true,
    label: '角色',
  }) roleList!: RoleEntity[]

  @Field({
    type: RoleEntity,
    array: true,
    label: '部门',
  })
    departmentList!: DepartmentEntity[]

  @Field({
    label: '性别',
    dictionary: UserGenderEnum,
  })
    gender!: number

  declare isDisabled: boolean

  /**
   * ### 验证码
   */
  code!: string

  /**
   * ### 所属应用AppKey
   */
  appKey!: string

  /**
   * ### 旧密码
   */
  oldPassword!: string

  @Field({
    label: '个人签名',
  })
    bio!: string

  departmentId?: number

  /**
   * ### 设置邮箱
   * @param email 邮箱
   * @returns
   */
  setEmail(email: string): this {
    this.email = email
    return this
  }
}
