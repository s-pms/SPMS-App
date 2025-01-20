import {AbstractBaseBillDetailEntity} from '@/base/bill/detail/AbstractBaseBillDetailEntity'
import {Field, Model} from '@/airpower/decorator'

@Model({
  label: '订单明细',
})
export class OrderDetailEntity extends AbstractBaseBillDetailEntity {
  quantity!: number

  @Field({
    label: '完成数量',
  })
  finishQuantity!: number

  @Field({
    label: '异常数量',
  })
  ngQuantity!: number
}
