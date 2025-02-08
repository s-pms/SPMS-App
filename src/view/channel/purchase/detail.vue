<template>
  <ABody>
    <ACard
      :badge="PurchaseStatusEnum.getLabel(formData.status)"
      :badge-color="PurchaseStatusEnum.getColor(formData.status)"
      :desc="formData.reason"
      :disabled="formData.isDisabled"
      :title="formData.billCode"
    >
      <ACardCell label="总金额">
        ¥{{ formData.totalPrice.toFixed(2) }}
      </ACardCell>
      <ACardCell label="实际金额">
        ¥{{ formData.totalRealPrice.toFixed(2) }}
      </ACardCell>
      <TimeCell :data="formData" />
    </ACard>
    <ACard title="采购明细">
      <view
        v-for="detail in formData.details"
        :key="detail.id"
        class="purchase-detail"
      >
        <ACard
          :desc="detail.material.name"
          :disabled="detail.isFinished"
          :title="detail.material.code"
          disable-label="采购完成"
          @click="onDetailClicked(detail)"
        >
          <template #numbers>
            <ACardNumber
              label="采购数量"
            >
              {{ detail.quantity }}
            </ACardNumber>
            <ACardNumber
              :color="AirColor.SUCCESS"
              label="已采购数量"
            >
              {{ detail.finishQuantity }}
            </ACardNumber>
          </template>
          <ACardCell
            label="采购单价"
          >
            ¥{{ detail.price.toFixed(2) }}
          </ACardCell>
        </ACard>
      </view>
    </ACard>
  </ABody>
</template>

<script lang="ts" setup>
import { onLoad, onPullDownRefresh } from '@dcloudio/uni-app'
import {
  ABody, ACard, ACardCell, ACardNumber,
} from '@/airpower/components'
import { PurchaseStatusEnum } from '@/model/channel/purchase/PurchaseStatusEnum'
import { AirColor } from '@/airpower/enum/AirColor'
import { PurchaseEntity } from '@/model/channel/purchase/PurchaseEntity'
import { PurchaseService } from '@/model/channel/purchase/PurchaseService'
import { TimeCell } from '@/component'
import { PurchaseDetailEntity } from '@/model/channel/purchase/PurchaseDetailEntity'
import { AppForm } from '@/config/AppForm'
import { useBillDetail } from '@/hook/bill/detail/useBillDetail'

const props = defineProps({
  id: {
    type: Number,
    required: true,
  },
})
const { getDetail, formData, addDetailFinishQuantity } = useBillDetail(PurchaseEntity, PurchaseService, {
  id: props.id,
})

onPullDownRefresh(() => getDetail())
onLoad(() => getDetail())

async function onDetailClicked(detail: PurchaseDetailEntity) {
  if (detail.isFinished) {
    return
  }
  const number = await AppForm.getNumber(detail.material.name, '请输入本次采购数量...')
  addDetailFinishQuantity(detail, number)
}
</script>

<style></style>
