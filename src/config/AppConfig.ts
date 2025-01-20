import { ref } from 'vue'
import { UserEntity } from '@/model/personnel/user/UserEntity.ts'

/**
 * # 项目全局配置文件
 */
export class AppConfig {
  /**
   * # 产品版本号
   * ---
   * ### 💡 整形 仅用于版本号大小判断
   */
  static readonly version = 10000

  /**
   * # 产品名称
   */
  static readonly productName = '理账狮'

  /**
   * # 当前登录用户
   */
  static currentUser = ref(new UserEntity())

  /**
   * # 返回可供显示的版本号
   * ---
   * 💡 如需要判断版本 请直接使用```Config.version```
   */
  static getVersion() {
    const versionSlitNumber = 100
    let str = 'v'
    str += `${parseInt((this.version / (versionSlitNumber ** 2)).toString())}.`
    // eslint-disable-next-line no-mixed-operators
    str += `${parseInt((this.version % (versionSlitNumber ** 2) / versionSlitNumber).toString())}.`
    str += `${parseInt((this.version % (versionSlitNumber ** 2) % versionSlitNumber).toString())}`
    return str
  }
}
