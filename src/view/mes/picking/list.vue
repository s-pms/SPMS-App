<template>
  <ABody>
    <APage :response="response">
      <ACard
        v-for="item in list"
        :key="item.id"
        :badge="MoveStatusEnum.getLabel(item.status)"
        :badge-color="MoveStatusEnum.getColor(item.status)"
        :desc="AirDateTime.formatFromMilliSecond(item.createTime)"
        :title="item.billCode"
        @click="onAction(item)"
      >
        <ACardCell label="领料单元">
          {{ item.structure.name }}
        </ACardCell>
        <ACardCell label="单元编码">
          {{ item.structure.code }}
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
} from '@/airpower/components'
import { useBillTable } from '@/hook/bill/useBillTable'
import { PickingEntity } from '@/model/mes/picking/PickingEntity'
import { PickingService } from '@/model/mes/picking/PickingService'
import { AirDateTime } from '@/airpower/helper/AirDateTime'
import { MoveStatusEnum } from '@/model/wms/move/MoveStatusEnum'
import { TimeCell } from '@/component'

const {
  response, list, onReloadData, onLoadMore, onAction,
} = useBillTable(PickingEntity, PickingService)

onPullDownRefresh(() => onReloadData())
onReachBottom(() => onLoadMore())

</script>

<style></style>
