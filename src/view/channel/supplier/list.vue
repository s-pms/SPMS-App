<template>
  <ABody>
    <APage :response="response">
      <ACard
        v-for="item in list"
        :key="item.id"
        :desc="item.code"
        :title="item.name"
      >
        <ACardCell label="联系电话">
          {{ item.phone }}
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
import { useAirTable } from '@/airpower/hook/useAirTable'
import { SupplierEntity } from '@/model/channel/supplier/SupplierEntity'
import { SupplierService } from '@/model/channel/supplier/SupplierService'

const {
  response, list, onReloadData, onLoadMore,
} = useAirTable(SupplierEntity, SupplierService)

onPullDownRefresh(() => onReloadData())
onReachBottom(() => onLoadMore())

</script>

<style></style>
