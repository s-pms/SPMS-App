<template>
  <ABody>
    <APage :response="response">
      <ACard
        v-for="item in list"
        :key="item.id"
        :badge="PublishStatusEnum.getLabel(item.isPublished)"
        :badge-color="PublishStatusEnum.getColor(item.isPublished)"
        :desc="item.code"
        :title="item.name"
        @click="onAction(item)"
      >
        <ACardCell label="物料编码">
          {{ item.material.code }}
        </ACardCell>
        <ACardCell label="物料名称">
          {{ item.material.name }}
        </ACardCell>
        <ACardCell label="物料名称">
          {{ item.material.name }}
        </ACardCell>
        <ACardCell
          :color="BooleanYesNoDictionary.getColor(item.isRoutingBom)"
          label="使用工艺配方"
        >
          {{ item.isRoutingBom ? '是' : '否' }}
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
import { useTable } from '@/hook/useTable'
import { RoutingEntity } from '@/model/mes/routing/RoutingEntity'
import { RoutingService } from '@/model/mes/routing/RoutingService'
import { BooleanYesNoDictionary } from '@/model/common/BooleanYesNoDictionary'
import { PublishStatusEnum } from '@/model/common/PublishStatusEnum'
import { TimeCell } from '@/component'

const {
  response, list, onReloadData, onLoadMore, onAction,
} = useTable(RoutingEntity, RoutingService)

onPullDownRefresh(() => onReloadData())
onReachBottom(() => onLoadMore())

</script>

<style></style>
