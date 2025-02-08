<template>
  <ABody>
    <APage :response="response">
      <ACard
        v-for="item in list"
        :key="item.id"
        :badge="PublishStatusEnum.getLabel(item.isPublished)"
        :badge-color="PublishStatusEnum.getColor(item.isPublished)"
        :desc="item.code"
        :disabled="item.isDisabled"
        :title="item.name"
        @click="onAction(item)"
      >
        <ACardCell
          :color="BomTypeEnum.getColor(item.type)"
          label="配方类型"
        >
          {{ BomTypeEnum.getLabel(item.type) }}
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
import { useTable } from '@/hook/useTable'
import { BomEntity } from '@/model/mes/bom/BomEntity'
import { BomService } from '@/model/mes/bom/BomService'
import { BomTypeEnum } from '@/model/mes/bom/BomTypeEnum'
import { PublishStatusEnum } from '@/model/common/PublishStatusEnum'
import { TimeCell } from '@/component'

const {
  response, list, onReloadData, onLoadMore, onAction,
} = useTable(BomEntity, BomService, {
  showPublish: true,
})

onPullDownRefresh(() => onReloadData())
onReachBottom(() => onLoadMore())

</script>

<style></style>
