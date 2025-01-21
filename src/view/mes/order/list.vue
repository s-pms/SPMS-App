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
import { OrderEntity } from '@/model/mes/order/OrderEntity'
import { OrderService } from '@/model/mes/order/OrderService'
import { AirDateTime } from '@/airpower/helper/AirDateTime'

const {
  response, list, onReloadData, onLoadMore, onAction,
} = useBillTable(OrderEntity, OrderService)

onPullDownRefresh(() => onReloadData())
onReachBottom(() => onLoadMore())

</script>

<style></style>
