import { AirEnum } from '@/airpower/base/AirEnum'
import { AirColor } from '@/airpower/enum/AirColor'

export class TableAction extends AirEnum {
  static readonly PUBLISH = new TableAction(11, '发布', AirColor.NORMAL, true)
}
