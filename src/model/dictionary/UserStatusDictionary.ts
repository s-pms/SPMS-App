import { AirDictionaryArray } from '@/airpower/model/extend/AirDictionaryArray'
import { UserStatus } from '../enum/UserStatus'
import { AirColor } from '@/airpower/enum/AirColor'
import { IUserStatus } from '../interface/IUserStatus'

export const UserStatusDictionary = AirDictionaryArray.createCustom<IUserStatus>([
  {
    key: UserStatus.CHECKING, label: '待审核', color: AirColor.NORMAL, icon: '',
  },
  {
    key: UserStatus.REJECTED, label: '已拒绝', color: AirColor.DANGER, icon: '',
  },
])
