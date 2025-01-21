import { IUseTableOption } from '@/airpower/interface/hooks/IUseTableOption'
import { AbstractBaseBillEntity } from '@/base/bill/AbstractBaseBillEntity'
import { AbstractBaseBillDetailEntity } from '@/base/bill/detail/AbstractBaseBillDetailEntity'

export interface IBillTableOption<D extends AbstractBaseBillDetailEntity, B extends AbstractBaseBillEntity<D>> extends IUseTableOption<B>{
  /**
   * ### 是否隐藏审核按钮
   */
  hideAudit?: boolean

  /**
   * ### 是否隐藏驳回按钮
   */
  hideReject?: boolean
}
