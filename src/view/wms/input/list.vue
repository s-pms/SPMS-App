<template>
  <ABody>
    <APage :response="response">
      <ACard
        v-for="item in list"
        :key="item.id"
        :badge="InputStatusEnum.getLabel(item.status)"
        :badge-color="InputStatusEnum.getColor(item.status)"
        :desc="AirDateTime.formatFromMilliSecond(item.createTime)"
        :disabled="item.isDisabled"
        :title="item.billCode"
        @click="onAction(item)"
      >
        <ACardCell
          :color="InputTypeEnum.getColor(item.type)"
          label="入库类型"
        >
          {{ InputTypeEnum.getLabel(item.type) }}
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
import { InputEntity } from '@/model/wms/input/InputEntity'
import { InputService } from '@/model/wms/input/InputService'
import { InputTypeEnum } from '@/model/wms/input/InputTypeEnum'
import { InputStatusEnum } from '@/model/wms/input/InputStatusEnum'
import { AirDateTime } from '@/airpower/helper/AirDateTime'

const {
  response, list, onReloadData, onLoadMore, onAction,
} = useBillTable(InputEntity, InputService, {
  detailUrl: '/view/wms/input/detail',
})

onPullDownRefresh(() => onReloadData())
onReachBottom(() => onLoadMore())

</script>

<style></style>
