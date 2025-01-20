import { BaseEntity } from './BaseEntity'
import { AirAbstractEntityService } from '@/airpower/base/AirAbstractEntityService'
import { AirNotification } from '@/airpower/feedback/AirNotification'

/**
 * # 抽象服务基类
 * @author Hamm.cn
 */
export abstract class AbstractBaseService<E extends BaseEntity> extends AirAbstractEntityService<E> {
  /**
   * ### 发布实体
   * @param entity 实体
   */
  async publish(entity: E): Promise<void> {
    await this.api('publish')
      .post(entity)
    AirNotification.success('发布成功')
  }
}
