<template>
  <ABody>
    <APage :response="response">
      <ACard
        v-for="item in list"
        :key="item.id"
        :badge="PurchaseStatusEnum.getLabel(item.status)"
        :badge-color="PurchaseStatusEnum.getColor(item.status)"
        :desc="item.reason"
        :disabled="item.isDisabled"
        :title="item.billCode"
        @click="AirRouter.callback(item,props.eventId)"
      >
        <ACardCell label="总金额">
          ¥{{ item.totalPrice.toFixed(2) }}
        </ACardCell>
        <ACardCell label="实际金额">
          ¥{{ item.totalRealPrice.toFixed(2) }}
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
import { airProps } from '@airpower/config/AirProps'
import { useAirSelector } from '@airpower/hook/useAirSelector'
import { AirRouter } from '@airpower/helper/AirRouter'
import { PurchaseEntity } from '@/model/channel/purchase/PurchaseEntity'
import { PurchaseService } from '@/model/channel/purchase/PurchaseService'
import { PurchaseStatusEnum } from '@/model/channel/purchase/PurchaseStatusEnum'
import { TimeCell } from '@/component'

const props = defineProps(airProps())
const {
  response, list, onReloadData, onLoadMore,
} = useAirSelector(props, PurchaseEntity, PurchaseService)

onPullDownRefresh(() => onReloadData())
onReachBottom(() => onLoadMore())

</script>

<style></style>
