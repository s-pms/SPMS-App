import { FieldPrefix } from '@/airpower/decorator/Custom'
import { BaseEntity } from '@/base/BaseEntity'

@FieldPrefix('user_')
export class UserEntity extends BaseEntity {
  account!: string

  name!: string

  avatar!: string
}
