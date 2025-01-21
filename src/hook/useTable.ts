/* eslint-disable no-use-before-define */
import { AirEnum } from '@/airpower/base/AirEnum'
import { AirTableAction } from '@/airpower/enum/AirTableAction'
import { AirConfirm } from '@/airpower/feedback/AirConfirm'
import { useAirTable } from '@/airpower/hook/useAirTable'
import { ClassConstructor } from '@/airpower/type/AirType'
import { AbstractBaseService } from '@/base/AbstractBaseService'
import { BaseEntity } from '@/base/BaseEntity'
import { TableAction } from '@/config/TableAction'
import { ITableResult } from './ITableResult'
import { ITableOption } from './ITableOption'

/**
 * # 单据的表格Hooks
 * @param entityClass 单据类
 * @param serviceClass 单据服务类
 * @param option (可选) 可选配置项
 * @author Hamm.cn
 */
export function useTable<
  E extends BaseEntity,
  S extends AbstractBaseService<E>,
>(
  entityClass: ClassConstructor<E>,
  serviceClass: ClassConstructor<S>,
  option: ITableOption<E> = {},
): ITableResult<E, S> {
  if (!option.actions) {
    option.actions = option.actions || AirTableAction.toArray().concat(TableAction.toArray())
  }
  option.actions = option.actions.filter((item) => {
    switch (item.key) {
      case TableAction.PUBLISH.key:
        return option.showPublish
      default:
        return true
    }
  })

  const { actionFilter } = option
  // 处理actions
  option.actionFilter = (actions: AirEnum[], row: E) => {
    actions = actions.filter((item) => {
      switch (item.key) {
        case TableAction.PUBLISH.key:
          return !row.isPublished
        case AirTableAction.EDIT.key:
          return !row.isPublished
        default:
      }
      return true
    })
    if (actionFilter) {
      return actionFilter(actions, row)
    }
    return actions
  }

  const { onActionEvent } = option
  option.onActionEvent = (action: AirEnum, bill: E) => {
    switch (action.key) {
      case TableAction.PUBLISH.key:
        onPublish(bill)
        break
      default:
        if (onActionEvent) {
          onActionEvent(action, bill)
        }
    }
  }

  const result = useAirTable(entityClass, serviceClass, option)

  /**
   * ### 实体发布
   * @param entity 实体
   */
  async function onPublish(entity: E) {
    await AirConfirm.show('确认发布', '发布后将无法再次修改，是否确认？')
    await result.service.publish(entity)
    result.onReloadData()
  }

  return {
    onPublish,
    ...result,
  }
}
