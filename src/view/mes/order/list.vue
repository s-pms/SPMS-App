<template>
  <ABody>
    <APage :response="response">
      <ACard
        v-for="item in list"
        :key="item.id"
        :badge="OrderStatusEnum.getLabel(item.status)"
        :badge-color="OrderStatusEnum.getColor(item.status)"
        :desc="AirDateTime.formatFromMilliSecond(item.createTime)"
        :disabled="item.isDisabled"
        :title="item.billCode"
        @click="onAction(item)"
      >
        <template #numbers>
          <ACardNumber
            :color="AirColor.NORMAL"
            label="订单数量"
          >
            {{ item.quantity }}
          </ACardNumber>
          <ACardNumber
            :color="AirColor.SUCCESS"
            label="完成数量"
          >
            {{ item.finishQuantity }}
          </ACardNumber>
          <ACardNumber
            :color="AirColor.WARNING"
            label="异常数量"
          >
            {{ item.ngQuantity }}
          </ACardNumber>
        </template>
        <ACardCell
          :color="OrderTypeEnum.getColor(item.type)"
          label="订单类型"
        >
          {{ OrderTypeEnum.getLabel(item.type) }}
        </ACardCell>
        <ACardCell label="物料编码">
          {{ item.material.code }}
        </ACardCell>
        <ACardCell label="物料名称">
          {{ item.material.name }}
        </ACardCell>
        <TimeCell :data="item" />
      </ACard>
    </APage>
  </ABody>
</template>

<script lang="ts" setup>
import { onPullDownRefresh, onReachBottom } from '@dcloudio/uni-app'
import {
  ABody, ACard, ACardCell, ACardNumber, APage,
} from '@/airpower/components'
import { useBillTable } from '@/hook/bill/useBillTable'
import { OrderEntity } from '@/model/mes/order/OrderEntity'
import { OrderService } from '@/model/mes/order/OrderService'
import { AirDateTime } from '@/airpower/helper/AirDateTime'
import { OrderStatusEnum } from '@/model/mes/order/OrderStatusEnum'
import { OrderTypeEnum } from '@/model/mes/order/OrderTypeEnum'
import { AirColor } from '@/airpower/enum/AirColor'
import { TimeCell } from '@/component'

const {
  response, list, onReloadData, onLoadMore, onAction,
} = useBillTable(OrderEntity, OrderService)

onPullDownRefresh(() => onReloadData())
onReachBottom(() => onLoadMore())

</script>

<style></style>
