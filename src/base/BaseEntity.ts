import { AirEntity } from '@/airpower/base/AirEntity'
import { AirDateTimeFormatter } from '@/airpower/enum/AirDateTimeFormatter'
import { AirDateTime } from '@/airpower/helper/AirDateTime'

/**
 * # 数据库实体基类
 * @author Hamm
 */
export class BaseEntity extends AirEntity {

  /**
   * # 创建时间
   */
  createtime!: number

  /**
   * # 修改时间
   */
  updatetime!: number

  /**
   * # 获取格式化后的创建时间
   * @param formatter [可选]自定义格式化模板
   */
  getCreateTime(formatter?: AirDateTimeFormatter | string): string {
    return AirDateTime.formatFromSecond(this.createtime, formatter)
  }

  /**
   * # 获取相对于现在的创建时间
   */
  getCreateTimeFriendly() {
    return AirDateTime.getFriendlyDateTime(this.createtime * 1000)
  }

  /**
   * # 获取格式化后的修改时间
   * @param formatter [可选]自定义格式化模板
   */
  getUpdateTime(formatter?: AirDateTimeFormatter | string): string {
    return AirDateTime.formatFromSecond(this.updatetime, formatter)
  }

  /**
   * # 获取相对于现在的修改时间
   */
  getUpdatetimeFriendly() {
    return AirDateTime.getFriendlyDateTime(this.createtime * 1000)
  }
}
