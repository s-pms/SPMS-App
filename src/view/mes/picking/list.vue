<template>
  <ABody>
    <APage :response="response">
      <ACard
        v-for="item in list"
        :key="item.id"
        :desc="AirDateTime.formatFromMilliSecond(item.createTime)"
        :title="item.billCode"
        @click="onAction(item)"
      />
    </APage>
  </ABody>
</template>

<script lang="ts" setup>
import { onPullDownRefresh, onReachBottom } from '@dcloudio/uni-app'
import { ABody, ACard, APage } from '@/airpower/components'
import { useBillTable } from '@/hook/billTable/useBillTable'
import { PickingEntity } from '@/model/mes/picking/PickingEntity'
import { PickingService } from '@/model/mes/picking/PickingService'
import { AirDateTime } from '@/airpower/helper/AirDateTime'

const {
  response, list, onReloadData, onLoadMore, onAction,
} = useBillTable(PickingEntity, PickingService)

onPullDownRefresh(() => onReloadData())
onReachBottom(() => onLoadMore())

</script>

<style></style>
