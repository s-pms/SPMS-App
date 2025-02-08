import { AbstractBaseBillEntity } from '@/base/bill/AbstractBaseBillEntity'
import { AbstractBaseBillDetailEntity } from '@/base/bill/detail/AbstractBaseBillDetailEntity'
import { AbstractBaseBillService } from '@/base/bill/AbstractBaseBillService'
import { useAirDetail } from '@/airpower/hook/useAirDetail'
import { IUseDetailOption } from '@/airpower/interface/hooks/IUseDetailOption'
import { IUseBillDetailResult } from '@/hook/bill/detail/IUseBillDetailResult'
import { ClassConstructor } from '@/airpower/type/AirType'
import { AirNotification } from '@/airpower/feedback/AirNotification'

export function useBillDetail<
  D extends AbstractBaseBillDetailEntity,
  B extends AbstractBaseBillEntity<D>,
  S extends AbstractBaseBillService<D, B>
>(entityClass: ClassConstructor<B>, serviceClass: ClassConstructor<S>, option: IUseDetailOption<B>): IUseBillDetailResult<D, B, S> {
  const result = useAirDetail(entityClass, serviceClass, option)

  async function addDetailFinishQuantity(detail: D, quantity: number) {
    const postData = detail.copy().expose('id', 'billId')
    postData.quantity = quantity
    await result.service.addDetailFinishQuantity(postData)
    AirNotification.success('添加完成数量成功')
    result.getDetail()
  }

  return {
    addDetailFinishQuantity, ...result,
  }
}
