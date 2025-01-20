import {Field, Model} from '@/airpower/decorator'
import {BaseEntity} from '@/base/BaseEntity'
import {OpenAppArithmeticEnum} from './OpenAppArithmeticEnum'
import {BooleanYesNoDictionary} from '@/model/common/BooleanYesNoDictionary'

@Model({
  label: '应用',
})
export class OpenAppEntity extends BaseEntity {
  @Field({
    label: '应用名称',
  }) appName!: string

  @Field({
    label: '内部应用',
    type: Boolean,
    dictionary: BooleanYesNoDictionary,
  })
  isInternal!: boolean

  @Field({
    label: 'AppKey',
  }) appKey!: string

  @Field({
    label: 'AppSecret',
  }) appSecret!: string

  @Field({
    label: '加密算法',
    dictionary: OpenAppArithmeticEnum,
  }) arithmetic!: number

  @Field({
    label: '公钥',
  }) publicKey!: string

  @Field({
    label: '私钥',
  }) privateKey!: string

  @Field({
    label: '应用地址',
  }) url!: string

  @Field({
    label: 'IP白名单',
    type: String,
  })
  ipWhiteList!: string
}
