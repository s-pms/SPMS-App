<template>
  <ABody>
    <APage :response="response">
      <ACard
        v-for="item in list"
        :key="item.id"
        :badge="DeviceStatusEnum.getLabel(item.status)"
        :badge-color="DeviceStatusEnum.getColor(item.status)"
        :desc="item.code"
        :disabled="item.isDisabled"
        :title="item.name"
        @click="onAction(item)"
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
        <TimeCell :data="item" />
      </ACard>
    </APage>
  </ABody>
</template>

<script lang="ts" setup>
import { onPullDownRefresh, onReachBottom } from '@dcloudio/uni-app'
import {
  ABody, ACard, ACardCell, APage,
} from '@airpower/components'
import { DeviceEntity } from '@/model/asset/device/DeviceEntity'
import { DeviceService } from '@/model/asset/device/DeviceService'
import { DeviceStatusEnum } from '@/model/asset/device/DeviceStatusEnum'
import { BooleanYesNoDictionary } from '@/model/common/BooleanYesNoDictionary'
import { AlarmStatusEnum } from '@/model/asset/device/AlarmStatusEnum'
import { useTable } from '@/hook/useTable'
import { TimeCell } from '@/component'

const {
  response, list, onReloadData, onLoadMore, onAction,
} = useTable(DeviceEntity, DeviceService)

onPullDownRefresh(() => onReloadData())
onReachBottom(() => onLoadMore())

</script>

<style></style>
