import {Field, Model} from '@/airpower/decorator'
import {BaseEntity} from '@/base/BaseEntity'

/**
 * # 菜单
 * @author Hamm.cn
 */
@Model({
  label: '菜单',
})
export class MenuEntity extends BaseEntity {
  @Field({
    label: '菜单名称',
  })
  name!: string

  @Field({
    label: '菜单路径',
  })
  path!: string

  @Field({
    label: '菜单图标',
  })
  icon!: string

  @Field({
    label: '组件地址',
  })
  component!: string

  @Field({
    label: '排序编号',
    type: Number,
  })
  orderNo!: number

  /**
   * ### 父菜单ID
   */
  @Field({
    label: '父级ID',
  })
  parentId!: number

  /**
   * ### 子菜单列表
   */
  @Field({
    // eslint-disable-next-line no-use-before-define
    type: MenuEntity,
    array: true,
  })
  children!: this[]

  /**
   * ### 父菜单
   */
  @Field({
    // eslint-disable-next-line no-use-before-define
    type: MenuEntity,
  })
  parent!: this
}
