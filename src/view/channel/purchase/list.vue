<template>
  <ABody>
    <APage :response="response">
      <ACard
        v-for="item in list"
        :key="item.id"
        :badge="PurchaseStatusEnum.getLabel(item.status)"
        :badge-color="PurchaseStatusEnum.getColor(item.status)"
        :desc="item.reason"
        :title="item.billCode"
      >
        <ACardCell label="总金额">
          ¥{{ item.totalPrice.toFixed(2) }}
        </ACardCell>
        <ACardCell label="实际金额">
          ¥{{ item.totalRealPrice.toFixed(2) }}
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
import { PurchaseEntity } from '@/model/channel/purchase/PurchaseEntity.ts'
import { PurchaseService } from '@/model/channel/purchase/PurchaseService.ts'
import { PurchaseStatusEnum } from '@/model/channel/purchase/PurchaseStatusEnum.ts'

const {
  response, list, onReloadData, onLoadMore,
} = useAirTable(PurchaseEntity, PurchaseService)

onPullDownRefresh(() => onReloadData())
onReachBottom(() => onLoadMore())

</script>

<style></style>
