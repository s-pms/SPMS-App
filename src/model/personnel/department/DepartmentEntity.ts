import { Field, Model } from '@/airpower/decorator'
import { BaseEntity } from '@/base/BaseEntity'
import { ITree } from '@/airpower/interface/ITree'

/**
 * # 部门
 * @author Hamm.cn
 */
@Model({
  label: '菜单',
  addChildPermission: 'add',
})
export class DepartmentEntity extends BaseEntity implements ITree {
  @Field({
    label: '部门名称',
  }) name!: string

  @Field({
    label: '部门编码',
  }) code!: string

  @Field({
    label: '排序编号',
  }) orderNo!: number

  @Field({
    label: '父级ID',
    type: Number,
  }) parentId!: number

  @Field({
    // eslint-disable-next-line no-use-before-define
    type: DepartmentEntity,
    array: true,
  }) children!: this[]

  @Field({
    // eslint-disable-next-line no-use-before-define
    type: DepartmentEntity,
  }) parent!: this
}
