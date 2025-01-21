<template>
  <ABody>
    <APage :response="response">
      <ACard
        v-for="item in list"
        :key="item.id"
        :badge="DeviceStatusEnum.getLabel(item.status)"
        :badge-color="DeviceStatusEnum.getColor(item.status)"
        :desc="item.code"
        :title="item.name"
      >
        <ACardCell label="UUID">
          {{ item.uuid || '-' }}
        </ACardCell>
        <ACardCell
          :color="BooleanYesNoDictionary.getColor(item.isReporting)"
          label="采集状态"
        >
          {{ item.isReporting ? '开启' : '关闭' }}
        </ACardCell>
        <ACardCell
          :color="AlarmStatusEnum.getColor(item.alarm)"
          label="报警状态"
        >
          {{ AlarmStatusEnum.getLabel(item.alarm) }}
        </ACardCell>
      </ACard>
    </APage>
  </ABody>
</template>

<script lang="ts" setup>
import { onPullDownRefresh, onReachBottom } from '@dcloudio/uni-app'
import {
  ABody, ACard, ACardCell, APage,
} from '@/airpower/components'
import { useAirTable } from '@/airpower/hook/useAirTable'
import { DeviceEntity } from '@/model/asset/device/DeviceEntity.ts'
import { DeviceService } from '@/model/asset/device/DeviceService.ts'
import { DeviceStatusEnum } from '@/model/asset/device/DeviceStatusEnum.ts'
import { BooleanYesNoDictionary } from '@/model/common/BooleanYesNoDictionary.ts'
import { AlarmStatusEnum } from '@/model/asset/device/AlarmStatusEnum.ts'

const {
  response, list, onReloadData, onLoadMore,
} = useAirTable(DeviceEntity, DeviceService)

onPullDownRefresh(() => onReloadData())
onReachBottom(() => onLoadMore())

</script>

<style></style>
