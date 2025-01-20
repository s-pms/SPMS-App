import { AirHttp } from '@/airpower/helper/AirHttp'
import { BaseEntity } from './BaseEntity'
import { Config } from '@/config/Config'
import { AirAbstractEntityService } from '@/airpower/base/AirAbstractEntityService'

/**
 * # 抽象服务基类
 * @author Hamm
 */
export abstract class AbstractBaseService<E extends BaseEntity> extends AirAbstractEntityService<E> {
  api(url: string, baseUrl?: string | undefined): AirHttp {
    return super.api(url, baseUrl)
      .setHeader('version', Config.version)
  }
}
