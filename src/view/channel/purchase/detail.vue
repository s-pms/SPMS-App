<template>
  <ABody>
    <ACard
      :badge="PurchaseStatusEnum.getLabel(formData.status)"
      :badge-color="PurchaseStatusEnum.getColor(formData.status)"
      :disabled="formData.isDisabled"
      :title="formData.billCode"
    >
      <ACardCell label="创建时间">
        {{ AirDateTime.formatFromMilliSecond(formData.createTime) }}
      </ACardCell>
      <ACardCell label="总金额">
        ¥{{ formData.totalPrice.toFixed(2) }}
      </ACardCell>
      <ACardCell label="实际金额">
        ¥{{ formData.totalRealPrice.toFixed(2) }}
      </ACardCell>
      <ACardCell label="采购事由">
        {{ formData.reason }}
      </ACardCell>
    </ACard>
    <ACard title="采购明细">
      <view
        v-for="detail in formData.details"
        :key="detail.id"
        class="input-detail"
      >
        <ACard
          :disabled="detail.isFinished"
          disable-label="已完成"
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
          <ACardCell label="物料编码">
            {{ detail.material.code }}
          </ACardCell>
          <ACardCell label="物料名称">
            {{ detail.material.name }}
          </ACardCell>
          <ACardCell label="供应商编码">
            {{ detail.supplier.code || '-' }}
          </ACardCell>
          <ACardCell label="供应商名称">
            {{ detail.supplier.name || '-' }}
          </ACardCell>
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
import { useAirDetail } from '@/airpower/hook/useAirDetail'
import { PurchaseStatusEnum } from '@/model/channel/purchase/PurchaseStatusEnum'
import { AirColor } from '@/airpower/enum/AirColor'
import { PurchaseEntity } from '@/model/channel/purchase/PurchaseEntity'
import { PurchaseService } from '@/model/channel/purchase/PurchaseService'
import { AirDateTime } from '@/airpower/helper/AirDateTime'

const { getDetail, setId, formData } = useAirDetail(PurchaseEntity, PurchaseService, {})

onLoad((query) => {
  setId(query?.id)
})

onPullDownRefresh(() => getDetail())

</script>

<style></style>
