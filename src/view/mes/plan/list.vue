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
import { PlanEntity } from '@/model/mes/plan/PlanEntity'
import { PlanService } from '@/model/mes/plan/PlanService'
import { useBillTable } from '@/hook/billTable/useBillTable'
import { AirDateTime } from '@/airpower/helper/AirDateTime'

const {
  response, list, onReloadData, onLoadMore, onAction,
} = useBillTable(PlanEntity, PlanService)

onPullDownRefresh(() => onReloadData())
onReachBottom(() => onLoadMore())

</script>

<style></style>
