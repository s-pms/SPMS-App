import { AirModel } from '@/airpower/base/AirModel'

export class LoginRequest extends AirModel {
  /**
   * # 手机号
   */
  phone!: string

  /**
   * # 验证码
   */
  code!: string
}
