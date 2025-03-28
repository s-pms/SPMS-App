<template>
  <ABody>
    <APage :response="response">
      <ACard
        v-for="item in list"
        :key="item.id"
        :desc="item.code"
        :title="item.name"
        @click="onAction(item)"
      >
        <TimeCell :data="item" />
      </ACard>
    </APage>
  </ABody>
</template>

<script lang="ts" setup>
import { onPullDownRefresh, onReachBottom } from '@dcloudio/uni-app'
import { ABody, ACard, APage } from '@airpower/components'
import { useTable } from '@/hook/useTable'
import { OperationEntity } from '@/model/mes/operation/OperationEntity'
import { OperationService } from '@/model/mes/operation/OperationService'
import { TimeCell } from '@/component'

const {
  response, list, onReloadData, onLoadMore, onAction,
} = useTable(OperationEntity, OperationService)

onPullDownRefresh(() => onReloadData())
onReachBottom(() => onLoadMore())

</script>

<style></style>
