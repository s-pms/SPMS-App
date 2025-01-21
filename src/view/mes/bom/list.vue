<template>
  <ABody>
    <APage :response="response">
      <ACard
        v-for="item in list"
        :key="item.id"
        :badge="item.isPublished?'已发布':'未发布'"
        :badge-color="BooleanYesNoDictionary.getColor(item.isPublished)"
        :desc="item.code"
        :title="item.name"
        @click="onAction(item)"
      >
        <ACardCell
          :color="BomTypeEnum.getColor(item.type)"
          label="配方类型"
        >
          {{ BomTypeEnum.getLabel(item.type) }}
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
import { BomEntity } from '@/model/mes/bom/BomEntity'
import { BomService } from '@/model/mes/bom/BomService'
import { BomTypeEnum } from '@/model/mes/bom/BomTypeEnum'
import { BooleanYesNoDictionary } from '@/model/common/BooleanYesNoDictionary'

const {
  response, list, onReloadData, onLoadMore, onAction,
} = useTable(BomEntity, BomService, {
  showPublish: true,
})

onPullDownRefresh(() => onReloadData())
onReachBottom(() => onLoadMore())

</script>

<style></style>
