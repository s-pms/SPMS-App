<template>
  <ABody>
    <APage :response="response">
      <ACard
        v-for="item in list"
        :key="item.id"
        :desc="item.code"
        :title="item.name"
        :badge="PublishStatusEnum.getLabel(item.isPublished)"
        :badge-color="PublishStatusEnum.getColor(item.isPublished)"
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
          label="使用工艺配方"
          :color="BooleanYesNoDictionary.getColor(item.isRoutingBom)"
        >
          {{ item.isRoutingBom ? '是':'否' }}
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
import { useTable } from '@/hook/useTable'
import { RoutingEntity } from '@/model/mes/routing/RoutingEntity'
import { RoutingService } from '@/model/mes/routing/RoutingService'
import { BooleanYesNoDictionary } from '@/model/common/BooleanYesNoDictionary'
import { PublishStatusEnum } from '@/model/common/PublishStatusEnum'

const {
  response, list, onReloadData, onLoadMore, onAction,
} = useTable(RoutingEntity, RoutingService)

onPullDownRefresh(() => onReloadData())
onReachBottom(() => onLoadMore())

</script>

<style></style>
