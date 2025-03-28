<template>
  <ABody>
    <ACard
      :badge="InputStatusEnum.getLabel(formData.status)"
      :badge-color="InputStatusEnum.getColor(formData.status)"
      :desc="AirDateTime.formatFromMilliSecond(formData.createTime)"
      :disabled="formData.isDisabled"
      :title="formData.billCode"
    >
      <ACardCell
        :color="InputTypeEnum.getColor(formData.type)"
        label="入库类型"
      >
        {{ InputTypeEnum.getLabel(formData.type) }}
      </ACardCell>
      <TimeCell :data="formData" />
    </ACard>
    <ACard title="入库明细">
      <view
        v-for="detail in formData.details"
        :key="detail.id"
        class="input-detail"
      >
        <ACard
          :desc="detail.material.code"
          :disabled="detail.isFinished"
          :title="detail.material.name"
          disable-label="入库完成"
        >
          <template #numbers>
            <ACardNumber
              label="入库数量"
            >
              {{ detail.quantity }}
            </ACardNumber>
            <ACardNumber
              :color="AirColor.SUCCESS"
              label="已入库"
            >
              {{ detail.finishQuantity }}
            </ACardNumber>
          </template>
          <ACardCell label="计量单位">
            {{ detail.material.unit.name }}
          </ACardCell>
          <ACardCell label="规格型号">
            {{ detail.material.spc || '-' }}
          </ACardCell>
        </ACard>
      </view>
    </ACard>
    <ACard
      v-if="InputTypeEnum.PURCHASE.equalsKey(formData.type)"
      :disabled="formData.isDisabled"
      title="采购单信息"
      @click="AirRouter.go('/view/channel/purchase/detail?param='+formData.purchase.id)"
    >
      <ACardCell label="采购单号">
        {{ formData.purchase.billCode }}
      </ACardCell>
      <ACardCell label="总金额">
        ¥{{ formData.purchase.totalPrice.toFixed(2) }}
      </ACardCell>
      <ACardCell label="实际金额">
        ¥{{ formData.purchase.totalRealPrice.toFixed(2) }}
      </ACardCell>
      <ACardCell
        :color="PurchaseStatusEnum.getColor(formData.purchase.status)"
        label="状态"
      >
        {{ PurchaseStatusEnum.getLabel(formData.purchase.status) }}
      </ACardCell>
    </ACard>
    <ACard
      v-if="InputTypeEnum.MOVE.equalsKey(formData.type)"
      :disabled="formData.isDisabled"
      title="移库单信息"
    >
      <ACardCell label="移库单号">
        {{ formData.move.billCode }}
      </ACardCell>
      <ACardCell label="目标仓库编码">
        {{ formData.move.storage.code }}
      </ACardCell>
      <ACardCell label="目标仓库名称">
        {{ formData.move.storage.name }}
      </ACardCell>
      <ACardCell
        :color="MoveStatusEnum.getColor(formData.move.status)"
        label="状态"
      >
        {{ MoveStatusEnum.getLabel(formData.move.status) }}
      </ACardCell>
    </ACard>
    <ACard
      v-if="InputTypeEnum.PRODUCTION.equalsKey(formData.type)"
      :disabled="formData.order.isDisabled"
      title="订单信息"
    >
      <template #numbers>
        <ACardNumber
          :color="AirColor.NORMAL"
          label="订单数量"
        >
          {{ formData.order.quantity }}
        </ACardNumber>
        <ACardNumber
          :color="AirColor.SUCCESS"
          label="完成数量"
        >
          {{ formData.order.finishQuantity }}
        </ACardNumber>
        <ACardNumber
          :color="AirColor.WARNING"
          label="异常数量"
        >
          {{ formData.order.ngQuantity }}
        </ACardNumber>
      </template>
      <ACardCell label="订单号">
        {{ formData.order.billCode }}
      </ACardCell>
      <ACardCell
        :color="OrderTypeEnum.getColor(formData.order.type)"
        label="订单类型"
      >
        {{ OrderTypeEnum.getLabel(formData.order.type) }}
      </ACardCell>
      <ACardCell
        :color="OrderStatusEnum.getColor(formData.order.status)"
        label="状态"
      >
        {{ OrderStatusEnum.getLabel(formData.order.status) }}
      </ACardCell>
    </ACard>
  </ABody>
</template>

<script lang="ts" setup>
import { onLoad, onPullDownRefresh } from '@dcloudio/uni-app'
import { AirColor } from '@airpower/enum/AirColor'
import { AirDateTime } from '@airpower/helper/AirDateTime'
import { airPropsId } from '@airpower/config/AirProps'
import { AirRouter } from '@airpower/helper/AirRouter'
import {
  ABody, ACard, ACardCell, ACardNumber,
} from '@airpower/components'
import { InputEntity } from '@/model/wms/input/InputEntity'
import { InputService } from '@/model/wms/input/InputService'
import { InputStatusEnum } from '@/model/wms/input/InputStatusEnum'
import { InputTypeEnum } from '@/model/wms/input/InputTypeEnum'
import { MoveStatusEnum } from '@/model/wms/move/MoveStatusEnum'
import { PurchaseStatusEnum } from '@/model/channel/purchase/PurchaseStatusEnum'
import { OrderTypeEnum } from '@/model/mes/order/OrderTypeEnum'
import { OrderStatusEnum } from '@/model/mes/order/OrderStatusEnum'
import { TimeCell } from '@/component'
import { useBillDetail } from '@/hook/bill/detail/useBillDetail'

const props = defineProps(airPropsId())
const { getDetail, formData } = useBillDetail(InputEntity, InputService, {
  id: props.param,
})

onPullDownRefresh(() => getDetail())
onLoad(() => getDetail())

</script>

<style></style>
