import { Field } from '@airpower/decorator'
import { AirEnum } from '@airpower/base/AirEnum'
import { IPayload } from '@airpower/interface/IPayload'
import { BaseEntity } from '../BaseEntity'
import { AbstractBaseBillDetailEntity } from './detail/AbstractBaseBillDetailEntity'

/**
 * # 单据基类
 *
 * @author Hamm.cn
 */
export abstract class AbstractBaseBillEntity<
    D extends AbstractBaseBillDetailEntity
> extends BaseEntity implements IPayload {
    @Field({
      label: '单据编号',
    })
      billCode!: string

    abstract status: number

    /**
     * ### 单据明细列表
     */
    abstract details: D[]

    @Field({
      label: '驳回原因',
    })
      rejectReason!: string

    /**
     * ### 审核中的状态
     */
    public abstract getAuditingStatus(): AirEnum;

    /**
     * ### 已审核的状态
     */
    public abstract getAuditedStatus(): AirEnum;

    /**
     * ### 已拒绝的状态
     */
    public abstract getRejectedStatus(): AirEnum;

    getPayloadLabel(): string {
      return this.billCode
    }

    /**
     * ### 是否可拒绝
     */
    canReject() {
      return this.getAuditingStatus()
        .equalsKey(this.status)
    }

    /**
     * ### 是否可审核
     */
    canAudit() {
      return this.getAuditingStatus()
        .equalsKey(this.status)
    }

    /**
     * ### 是否已拒绝
     */
    isRejected() {
      return this.getRejectedStatus()
        .equalsKey(this.status)
    }
}
