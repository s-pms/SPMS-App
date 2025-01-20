import { AbstractBaseService } from '@/base/AbstractBaseService'
import { UserEntity } from '@/model/entity/UserEntity'

export class UserService extends AbstractBaseService<UserEntity> {
  entityClass = UserEntity

  baseUrl = 'user'

  async updateMyInfo(entity: UserEntity): Promise<void> {
    await this.api('updateMyInfo').post(entity)
  }
}
