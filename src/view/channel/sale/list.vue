<template>
  <ABody>
    <APage :response="response">
      <ACard
        v-for="item in list"
        :key="item.id"
        :badge="SaleStatusEnum.getLabel(item.status)"
        :badge-color="SaleStatusEnum.getColor(item.status)"
        :desc="item.reason"
        :disabled="item.isDisabled"
        :title="item.billCode"
        @click="onAction(item)"
      >
        <ACardCell label="客户编码">
          {{ item.customer.code }}
        </ACardCell>
        <ACardCell label="客户名称">
          {{ item.customer.name }}
        </ACardCell>
        <ACardCell label="销售总金额">
          ¥{{ item.totalPrice.toFixed(2) }}
        </ACardCell>
        <ACardCell label="销售说明">
          {{ item.reason }}
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
import { SaleEntity } from '@/model/channel/sale/SaleEntity'
import { SaleService } from '@/model/channel/sale/SaleService'
import { SaleStatusEnum } from '@/model/channel/sale/SaleStatusEnum'
import { useBillTable } from '@/hook/billTable/useBillTable'
import { TimeCell } from '@/component'

const {
  response, list, onReloadData, onLoadMore, onAction,
} = useBillTable(SaleEntity, SaleService)

onPullDownRefresh(() => onReloadData())
onReachBottom(() => onLoadMore())

</script>

<style></style>
