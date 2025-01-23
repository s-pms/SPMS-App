<template>
  <ABody>
    <APage :response="response">
      <ACard
        v-for="item in list"
        :key="item.id"
        :badge="PurchaseStatusEnum.getLabel(item.status)"
        :badge-color="PurchaseStatusEnum.getColor(item.status)"
        :title="item.billCode"
        :disabled="item.isDisabled"
        @click="onAction(item)"
      >
        <ACardCell label="总金额">
          ¥{{ item.totalPrice.toFixed(2) }}
        </ACardCell>
        <ACardCell label="实际金额">
          ¥{{ item.totalRealPrice.toFixed(2) }}
        </ACardCell>
        <ACardCell label="采购事由">
          {{ item.reason }}
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
import { useBillTable } from '@/hook/billTable/useBillTable'
import { PurchaseEntity } from '@/model/channel/purchase/PurchaseEntity'
import { PurchaseService } from '@/model/channel/purchase/PurchaseService'
import { PurchaseStatusEnum } from '@/model/channel/purchase/PurchaseStatusEnum'

const {
  response, list, onReloadData, onLoadMore, onAction,
} = useBillTable(PurchaseEntity, PurchaseService, {
  detailUrl: '/view/channel/purchase/detail',
})

onPullDownRefresh(() => onReloadData())
onReachBottom(() => onLoadMore())

</script>

<style></style>
