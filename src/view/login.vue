<template>
  <view class="login">
    <input
      v-model="user.email"
      confirm-type="next"
      focus
      placeholder="邮箱/账号/ID..."
      type="email"
    >
    <input
      v-model="user.password"
      confirm-type="done"
      placeholder="登录密码..."
      type="password"
    >
    <button
      :disabled="!(user.email && user.password)"
      type="button"
      @click="onLogin"
    >
      登录系统
    </button>
    <view class="footer">
      <navigator
        class="weui-agree__link"
        url="../register/index"
      >
        注册账号
      </navigator>
      <navigator
        class="weui-agree__link"
        url="../forget/index"
      >
        忘记密码
      </navigator>
    </view>
  </view>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { UserEntity } from '@/model/personnel/user/UserEntity'
import { UserService } from '@/model/personnel/user/UserService.ts'
import { AirConfig } from '@/airpower/config/AirConfig.ts'
import { AirApi } from '@/airpower/config/AirApi.ts'

const user = ref(new UserEntity())

user.value.email = 'admin@hamm.cn'
user.value.password = 'Aa123456'

async function onLogin() {
  const accessToken = await UserService.create('登录中').login(user.value)
  AirConfig.saveAccessToken(accessToken)
  AirApi.navigateBack()
}
</script>

<style lang="scss" scoped>
.login {
  .footer {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 50rpx;
  }
}
</style>
