<template>
  <ABody>
    <APage :response="response">
      <ACard
        v-for="item in list"
        :key="item.id"
        :badge="MoveStatusEnum.getLabel(item.status)"
        :badge-color="MoveStatusEnum.getColor(item.status)"
        :desc="AirDateTime.formatFromMilliSecond(item.createTime)"
        :disabled="item.isDisabled"
        :title="item.billCode"
        @click="onAction(item)"
      >
        <ACardCell
          label="目标仓库"
        >
          {{ item.storage.name }}
        </ACardCell>
        <ACardCell
          label="仓库编码"
        >
          {{ item.storage.code }}
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
import { MoveService } from '@/model/wms/move/MoveService'
import { MoveEntity } from '@/model/wms/move/MoveEntity'
import { AirDateTime } from '@/airpower/helper/AirDateTime'
import { MoveStatusEnum } from '@/model/wms/move/MoveStatusEnum'
import { TimeCell } from '@/component'

const {
  response, list, onReloadData, onLoadMore, onAction,
} = useBillTable(MoveEntity, MoveService, {})

onPullDownRefresh(() => onReloadData())
onReachBottom(() => onLoadMore())

</script>

<style></style>
