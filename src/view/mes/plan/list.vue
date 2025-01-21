<template>
  <ABody>
    <APage :response="response">
      <ACard
        v-for="item in list"
        :key="item.id"
        :desc="AirDateTime.formatFromMilliSecond(item.createTime)"
        :title="item.billCode"
        :badge="PlanStatusEnum.getLabel(item.status)"
        :badge-color="PlanStatusEnum.getColor(item.status)"
        :disabled="item.isDisabled"
        @click="onAction(item)"
      >
        <ACardCell
          label="计划类型"
          :color="PlanTypeEnum.getColor(item.type)"
        >
          {{ PlanTypeEnum.getLabel(item.type) }}
        </ACardCell>
        <ACardCell label="交付日期">
          {{ AirDateTime.formatFromMilliSecond(item.deliverTime, AirDateTimeFormatter.YYYY_MM_DD) }}
        </ACardCell>
        <ACardCell label="开始时间">
          {{ AirDateTime.formatFromMilliSecond(item.startTime, AirDateTimeFormatter.YYYY_MM_DD) }}
        </ACardCell>
        <ACardCell label="完成时间">
          {{ item.finishTime ? AirDateTime.formatFromMilliSecond(item.finishTime, AirDateTimeFormatter.YYYY_MM_DD) : '-'
          }}
        </ACardCell>
        <template v-if="item.customer">
          <ACardCell
            label="客户编码"
          >
            {{ item.customer.code }}
          </ACardCell>
          <ACardCell
            label="客户名称"
          >
            {{ item.customer.name }}
          </ACardCell>
        </template>
      </ACard>
    </APage>
  </ABody>
</template>

<script lang="ts" setup>
import { onPullDownRefresh, onReachBottom } from '@dcloudio/uni-app'
import {
  ABody, ACard, ACardCell, APage,
} from '@/airpower/components'
import { PlanEntity } from '@/model/mes/plan/PlanEntity'
import { PlanService } from '@/model/mes/plan/PlanService'
import { useBillTable } from '@/hook/billTable/useBillTable'
import { AirDateTime } from '@/airpower/helper/AirDateTime'
import { PlanStatusEnum } from '@/model/mes/plan/PlanStatusEnum'
import { PlanTypeEnum } from '@/model/mes/plan/PlanTypeEnum'
import { AirDateTimeFormatter } from '@/airpower/enum/AirDateTimeFormatter'

const {
  response, list, onReloadData, onLoadMore, onAction,
} = useBillTable(PlanEntity, PlanService)

onPullDownRefresh(() => onReloadData())
onReachBottom(() => onLoadMore())

</script>

<style></style>
