import { IUseTableOption } from '@airpower/interface/hooks/IUseTableOption'
import { BaseEntity } from '@/base/BaseEntity'

export interface ITableOption<E extends BaseEntity> extends IUseTableOption<E> {
    /**
     * ### 是否显示发布按钮
     */
    showPublish?: boolean
}
