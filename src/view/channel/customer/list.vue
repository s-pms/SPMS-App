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
        <ACardCell label="联系电话">
          {{ item.phone }}
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
import { CustomerEntity } from '@/model/channel/customer/CustomerEntity'
import { CustomerService } from '@/model/channel/customer/CustomerService'
import { useTable } from '@/hook/useTable'
import { TimeCell } from '@/component'

const {
  response, list, onReloadData, onLoadMore, onAction,
} = useTable(CustomerEntity, CustomerService)

onPullDownRefresh(() => onReloadData())
onReachBottom(() => onLoadMore())

</script>

<style></style>
