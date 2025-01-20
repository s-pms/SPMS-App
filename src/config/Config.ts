/* eslint-disable no-underscore-dangle */

/**
 * # 项目全局配置文件
 */
/* eslint-disable no-mixed-operators */
export class Config {
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
   * # 返回可供显示的版本号
   * ---
   * 💡 如需要判断版本 请直接使用```Config.version```
   */
  static getVersion() {
    const versionSlitNumber = 100
    let str = 'v'
    str += `${parseInt((this.version / (versionSlitNumber ** 2)).toString())}.`
    str += `${parseInt((this.version % (versionSlitNumber ** 2) / versionSlitNumber).toString())}.`
    str += `${parseInt((this.version % (versionSlitNumber ** 2) % versionSlitNumber).toString())}`
    return str
  }
}
