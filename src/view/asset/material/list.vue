<template>
  <ABody>
    <APage :response="response">
      {{ response.page.pageNum }}
      <ACard
        v-for="item in response.list"
        :key="item.id"
        :title="item.name"
        :badge="MaterialTypeEnum.getLabel(item.materialType)"
        :badge-color="MaterialTypeEnum.getColor(item.materialType)"
      />
    </APage>
  </ABody>
</template>

<script setup lang="ts">
import { onPullDownRefresh, onReachBottom } from '@dcloudio/uni-app'
import { ACard, APage } from '@/airpower/components'
import { useAirTable } from '@/airpower/hook/useAirTable'
import { MaterialEntity } from '@/model/asset/material/MaterialEntity'
import { MaterialService } from '@/model/asset/material/MaterialService'
import { MaterialTypeEnum } from '@/model/asset/material/MaterialTypeEnum'

const { response, onReloadData, onLoadMore } = useAirTable(MaterialEntity, MaterialService)

onPullDownRefresh(() => onReloadData())
onReachBottom(() => onLoadMore())

</script>

<style></style>
