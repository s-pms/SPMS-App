import { BaseEntity } from '@/base/BaseEntity'
import { Field, Model } from '@/airpower/decorator'
import { ParameterEntity } from '@/model/iot/parameter/ParameterEntity'
import { DeviceReportingEnum } from '@/model/asset/device/DeviceReportingEnum'
import { DeviceStatusEnum } from '@/model/asset/device/DeviceStatusEnum'
import { AlarmStatusEnum } from '@/model/asset/device/AlarmStatusEnum'

@Model({
  label: '设备',
})
export class DeviceEntity extends BaseEntity {
  @Field({
    label: '设备名称',
  })
    name!: string

  @Field({
    label: '设备编码',
  })
    code!: string

  @Field({
    label: 'UUID',
  })
    uuid!: string

  @Field({
    label: '开启采集',
    dictionary: DeviceReportingEnum,
  })
    isReporting!: boolean

  @Field({
    label: '实时产量',
  })
    partCount!: string

  @Field({
    label: '运行状态',
    dictionary: DeviceStatusEnum,
  })
    status!: number

  @Field({
    label: '报警状态',
    dictionary: AlarmStatusEnum,
  })
    alarm!: number

  @Field({
    label: '采集频率',
  })
    rate!: number

  @Field({
    label: '参数',
    type: ParameterEntity,
    array: true,
  })
    parameters: ParameterEntity[] = []
}
