<template>
  <ABody>
    <APage :response="response">
      <ACard
        v-for="item in list"
        :key="item.id"
        :badge="OutputTypeEnum.getLabel(item.status)"
        :badge-color="OutputTypeEnum.getColor(item.status)"
        :desc="AirDateTime.formatFromMilliSecond(item.createTime)"
        :disabled="item.isDisabled"
        :title="item.billCode"
        @click="onAction(item)"
      >
        <ACardCell
          :color="OutputTypeEnum.getColor(item.type)"
          label="出库类型"
        >
          {{ OutputTypeEnum.getLabel(item.type) }}
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
import { AirDateTime } from '@airpower/helper/AirDateTime'
import { useBillTable } from '@/hook/bill/useBillTable'
import { OutputTypeEnum } from '@/model/wms/output/OutputTypeEnum'
import { OutputEntity } from '@/model/wms/output/OutputEntity'
import { OutputService } from '@/model/wms/output/OutputService'
import { TimeCell } from '@/component'

const {
  response, list, onReloadData, onLoadMore, onAction,
} = useBillTable(OutputEntity, OutputService, {})

onPullDownRefresh(() => onReloadData())
onReachBottom(() => onLoadMore())

</script>

<style></style>
