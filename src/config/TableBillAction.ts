import { AirEnum } from '@/airpower/base/AirEnum'
import { AirColor } from '@/airpower/enum/AirColor'

export class TableBillAction extends AirEnum {
  static readonly AUDIT = new TableBillAction(21, '审核')

  static readonly REJECT = new TableBillAction(22, '驳回')
}
