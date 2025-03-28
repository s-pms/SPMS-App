<template>
  <ABody>
    <APage :response="response">
      <ACard
        v-for="item in list"
        :key="item.id"
        :badge="InputStatusEnum.getLabel(item.status)"
        :badge-color="InputStatusEnum.getColor(item.status)"
        :disabled="item.isDisabled"
        :title="item.billCode"
        link-tip="查看详情"
        @click="onAction(item)"
        @link="onDetail(item.id)"
      >
        <ACardCell
          :color="InputTypeEnum.getColor(item.type)"
          label="入库类型"
        >
          {{ InputTypeEnum.getLabel(item.type) }}
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
import { useBillTable } from '@/hook/bill/useBillTable'
import { InputEntity } from '@/model/wms/input/InputEntity'
import { InputService } from '@/model/wms/input/InputService'
import { InputTypeEnum } from '@/model/wms/input/InputTypeEnum'
import { InputStatusEnum } from '@/model/wms/input/InputStatusEnum'
import { TimeCell } from '@/component'

const {
  response, list, onReloadData, onLoadMore, onAction, onDetail,
} = useBillTable(InputEntity, InputService, {
  detailUrl: '/view/wms/input/detail',
})

onPullDownRefresh(() => onReloadData())
onReachBottom(() => onLoadMore())

</script>

<style></style>
