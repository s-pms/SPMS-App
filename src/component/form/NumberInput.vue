<script lang="ts" setup>
import { computed, ref } from 'vue'
import { ADialog } from '@airpower/components'
import { AirRouter } from '@airpower/helper/AirRouter'
import { airProps } from '@airpower/config/AirProps'

const props = defineProps({
  ...airProps(),
  ...{
    title: {
      type: String,
      default: '',
    },
    desc: {
      type: String,
      default: '',
    },
    max: {
      type: Number,
      default: Number.MAX_SAFE_INTEGER,
    },
    min: {
      type: Number,
      default: 0,
    },
  },
})

const num = ref<number>()

const isDisabled = computed(() => {
  if (!num.value) {
    return true
  }
  return num.value > props.max || num.value < props.min
})
</script>

<template>
  <ADialog :title="title">
    <view class="input">
      <input
        v-model="num"
        :placeholder="desc"
        confirm-type="confirm"
        focus="focus"
        type="number"
      >
    </view>
    <button
      :disabled="isDisabled"
      @click="AirRouter.callback(num,props.eventId)"
    >
      确认
    </button>
  </ADialog>
</template>

<style lang="scss" scoped>
.input {
  input {
    font-size: 32rpx;
    background-color: #f5f5f5;
    padding: 20rpx;
    border-radius: 20rpx;
    margin-bottom: 40rpx;
    text-align: left;
  }
}
</style>
