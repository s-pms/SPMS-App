<template>
  <ABody>
    <APage :response="response">
      <ACard
        v-for="item in list"
        :key="item.id"
        :desc="AirDateTime.formatFromMilliSecond(item.createTime)"
        :title="item.billCode"
        :disabled="item.isDisabled"
        :badge="OrderStatusEnum.getLabel(item.status)"
        :badge-color="OrderStatusEnum.getColor(item.status)"
        @click="onAction(item)"
      >
        <template #numbers>
          <ACardNumber
            label="订单数量"
            :color="AirColor.NORMAL"
          >
            {{ item.quantity }}
          </ACardNumber>
          <ACardNumber
            label="完成数量"
            :color="AirColor.SUCCESS"
          >
            {{ item.finishQuantity }}
          </ACardNumber>
          <ACardNumber
            label="异常数量"
            :color="AirColor.WARNING"
          >
            {{ item.ngQuantity }}
          </ACardNumber>
        </template>
        <ACardCell
          label="订单类型"
          :color="OrderTypeEnum.getColor(item.type)"
        >
          {{ OrderTypeEnum.getLabel(item.type) }}
        </ACardCell>
        <ACardCell label="物料编码">
          {{ item.material.code }}
        </ACardCell>
        <ACardCell label="物料名称">
          {{ item.material.name }}
        </ACardCell>
      </ACard>
    </APage>
  </ABody>
</template>

<script lang="ts" setup>
import { onPullDownRefresh, onReachBottom } from '@dcloudio/uni-app'
import {
  ABody, ACard, ACardCell, ACardNumber, APage,
} from '@/airpower/components'
import { useBillTable } from '@/hook/billTable/useBillTable'
import { OrderEntity } from '@/model/mes/order/OrderEntity'
import { OrderService } from '@/model/mes/order/OrderService'
import { AirDateTime } from '@/airpower/helper/AirDateTime'
import { OrderStatusEnum } from '@/model/mes/order/OrderStatusEnum'
import { OrderTypeEnum } from '@/model/mes/order/OrderTypeEnum'
import { AirColor } from '@/airpower/enum/AirColor'

const {
  response, list, onReloadData, onLoadMore, onAction,
} = useBillTable(OrderEntity, OrderService)

onPullDownRefresh(() => onReloadData())
onReachBottom(() => onLoadMore())

</script>

<style></style>
