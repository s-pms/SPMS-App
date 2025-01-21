<template>
  <ABody>
    <APage :response="response">
      <ACard
        v-for="item in list"
        :key="item.id"
        :badge="MaterialTypeEnum.getLabel(item.materialType)"
        :badge-color="MaterialTypeEnum.getColor(item.materialType)"
        :desc="item.code"
        :title="item.name"
      />
    </APage>
  </ABody>
</template>

<script lang="ts" setup>
import { onPullDownRefresh, onReachBottom } from '@dcloudio/uni-app'
import { ABody, ACard, APage } from '@/airpower/components'
import { useAirTable } from '@/airpower/hook/useAirTable'
import { MaterialEntity } from '@/model/asset/material/MaterialEntity'
import { MaterialService } from '@/model/asset/material/MaterialService'
import { MaterialTypeEnum } from '@/model/asset/material/MaterialTypeEnum'

const {
  response, list, onReloadData, onLoadMore,
} = useAirTable(MaterialEntity, MaterialService)

onPullDownRefresh(() => onReloadData())
onReachBottom(() => onLoadMore())

</script>

<style></style>
