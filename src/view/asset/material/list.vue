<template>
  <ABody>
    <APage :response="response">
      <ACard
        v-for="item in list"
        :key="item.id"
        :badge="MaterialTypeEnum.getLabel(item.materialType)"
        :badge-color="MaterialTypeEnum.getColor(item.materialType)"
        :desc="item.code"
        :disabled="item.isDisabled"
        :title="item.name"
        @click="onAction(item)"
      >
        <ACardCell label="计量单位">
          {{ item.unit.name }}
        </ACardCell>
        <ACardCell label="规格型号">
          {{ item.spc || '-' }}
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
import { MaterialEntity } from '@/model/asset/material/MaterialEntity'
import { MaterialService } from '@/model/asset/material/MaterialService'
import { MaterialTypeEnum } from '@/model/asset/material/MaterialTypeEnum'
import { useTable } from '@/hook/useTable'
import { TimeCell } from '@/component'

const {
  response, list, onReloadData, onLoadMore, onAction,
} = useTable(MaterialEntity, MaterialService)

onPullDownRefresh(() => onReloadData())
onReachBottom(() => onLoadMore())

</script>

<style></style>
