/* eslint-disable no-use-before-define */

import { AirEnum } from '@airpower/base/AirEnum'
import { AirTableAction } from '@airpower/enum/AirTableAction'
import { AirConfirm } from '@airpower/feedback/AirConfirm'
import { ClassConstructor } from '@airpower/type/AirType'
import { AbstractBaseBillEntity } from '@/base/bill/AbstractBaseBillEntity'
import { AbstractBaseBillService } from '@/base/bill/AbstractBaseBillService'
import { AbstractBaseBillDetailEntity } from '@/base/bill/detail/AbstractBaseBillDetailEntity'
import { TableAction } from '@/config/TableAction'
import { TableBillAction } from '@/config/TableBillAction'
import { useTable } from '../useTable'
import { IBillTableResult } from './IBillTableResult'
import { IBillTableOption } from './IBillTableOption'

/**
 * # 单据的表格Hooks
 * @param entityClass 单据类
 * @param serviceClass 单据服务类
 * @param option (可选) 可选配置项
 * @author Hamm.cn
 */
export function useBillTable<
    D extends AbstractBaseBillDetailEntity,
    B extends AbstractBaseBillEntity<D>,
    S extends AbstractBaseBillService<D, B>
>(
  entityClass: ClassConstructor<B>,
  serviceClass: ClassConstructor<S>,
  option: IBillTableOption<D, B> = {},
): IBillTableResult<D, B, S> {
  if (!option.actions) {
    option.actions = AirTableAction.toArray().concat(TableAction.toArray()).concat(TableBillAction.toArray())
  }
  if (option.hideDelete === undefined) {
    // 默认隐藏单据的删除
    option.hideDelete = true
  }
  if (option.hideEdit === undefined) {
    // 默认隐藏单据的编辑
    option.hideEdit = true
  }
  option.actions = option.actions.filter((item) => {
    switch (item.key) {
      case TableBillAction.AUDIT.key:
        return !option.hideAudit
      case TableBillAction.REJECT.key:
        return !option.hideReject
      default:
        return true
    }
  })

  const { actionFilter } = option
  // 处理actions
  option.actionFilter = (actions: AirEnum[], row: B) => {
    actions = actions.filter((item) => {
      switch (item.key) {
        case TableBillAction.AUDIT.key:
          if (row.isPublished) {
            return false
          }
          return row.getAuditingStatus().equalsKey(row.status)
        case TableBillAction.REJECT.key:
          if (row.isPublished) {
            return false
          }
          return row.getAuditingStatus().equalsKey(row.status)
        case AirTableAction.EDIT.key:
          return !row.getAuditingStatus().equalsKey(row.status)
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
  option.onActionEvent = (action: AirEnum, bill: B) => {
    switch (action.key) {
      case TableBillAction.AUDIT.key:
        onAudit(bill)
        break
      case TableBillAction.REJECT.key:
        onReject(bill)
        break
      default:
        if (onActionEvent) {
          onActionEvent(action, bill)
        }
    }
  }
  const result = useTable(entityClass, serviceClass, option)

  /**
     * ### 单据审核
     * @param bill 单据
     */
  async function onAudit(bill: B) {
    await AirConfirm.show('审核提醒', `是否确认审核选择的${result.entity.getModelName()}？`)
    await result.service.audit(bill)
    result.onReloadData()
  }

  /**
     * ### 单据驳回
     * @param bill 单据
     */
  async function onReject(bill: B) {
    await AirConfirm.show('驳回提醒', `是否确认驳回选择的${result.entity.getModelName()}？`)
    bill.rejectReason = 'APP驳回'
    await result.service.reject(bill)
    result.onReloadData()
  }

  /**
     * ### 设置单据明细都已完成
     * @param bill 单据
     */
  async function setBillDetailsAllFinished(bill: B) {
    await AirConfirm.show('完成提醒', `是否确认设置${result.entity.getModelName()}已完成？`)
    await result.service.setBillDetailsAllFinished(bill)
    result.onReloadData()
  }

  /**
     * ### 设置单据已完成
     * @param bill 单据
     */
  async function setBillFinished(bill: B) {
    await AirConfirm.show('完成提醒', `是否确认设置所有${result.entity.getModelName()}明细都已完成？`)
    await result.service.setBillFinished(bill)
    result.onReloadData()
  }

  return {
    setBillFinished,
    setBillDetailsAllFinished,
    onAudit,
    onReject,
    ...result,
  }
}
