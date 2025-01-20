import {BaseEntity} from '@/base/BaseEntity'
import {OpenAppEntity} from '../app/OpenAppEntity'
import {Field} from '@/airpower/decorator'

export class OpenLogEntity extends BaseEntity {
  @Field({
    type: OpenAppEntity,
  }) openApp!: OpenAppEntity

  @Field({
    label: '来源IP',
  }) ip!: string

  @Field({
    label: '请求地址',
  }) url!: string

  @Field({
    label: '请求数据',
  }) request!: string

  @Field({
    label: '响应数据',
  }) response!: string

  @Field({
    label: '处理时间',
  }) mSecond!: string

  @Field({
    label: '请求时间',
  })
  declare createTime: number

  @Field({
    label: '响应时间',
  }) updateTime!: number
}
