<script lang="ts" setup>
import { PropType } from 'vue'
import { AirDateTime } from '@airpower/helper/AirDateTime'
import { ACardCell } from '@airpower/components'
import { BaseEntity } from '@/base/BaseEntity'

defineProps({
  /**
   * # 实体数据
   */
  data: {
    type: Object as PropType<BaseEntity>,
    required: true,
  },
})

</script>

<template>
  <ACardCell label="创建时间">
    {{ AirDateTime.formatFromMilliSecond(data.createTime) }}
  </ACardCell>
  <ACardCell label="最后更新">
    {{ AirDateTime.formatFromMilliSecond(data.updateTime) }}
  </ACardCell>
</template>

<style scoped>

</style>
