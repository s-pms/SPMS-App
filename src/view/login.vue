<template>
  <ABody>
    <view class="login">
      <view class="form">
        <view class="title">
          请先登录SPMS
        </view>
        <view class="input">
          <input
            v-model="user.email"
            confirm-type="next"
            focus
            placeholder="你的邮箱/手机/ID..."
            type="email"
          >
        </view>
        <view class="input">
          <input
            v-model="user.password"
            confirm-type="done"
            placeholder="你的登录密码..."
            type="password"
          >
        </view>
        <view class="submit">
          <button
            :disabled="!(user.email && user.password)"
            @click="onLogin"
          >
            登录系统
          </button>
        </view>
        <view class="footer">
          <navigator
            class="link"
            url="../register/index"
          >
            注册账号
          </navigator>
          <navigator
            class="link"
            url="../forget/index"
          >
            忘记密码
          </navigator>
        </view>
      </view>
    </view>
  </ABody>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { UserEntity } from '@/model/personnel/user/UserEntity'
import { UserService } from '@/model/personnel/user/UserService'
import { AirConfig } from '@/airpower/config/AirConfig'
import { ABody } from '@/airpower/components'

const user = ref(new UserEntity())

user.value.email = 'admin@hamm.cn'
user.value.password = 'Aa123456'

async function onLogin() {
  const accessToken = await UserService.create('登录中').login(user.value)
  AirConfig.saveAccessToken(accessToken)
  uni.reLaunch({
    url: '/view/work',
  })
}
</script>

<style lang="scss" scoped>
.login {
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  inset: 0;

  .form {
    padding: 0 100rpx;
    margin-top: -200rpx;

    .title {
      font-size: 48rpx;
      text-align: center;
      margin-bottom: 80rpx;
    }

    .input {
      input {
        background-color: white;
        border: 2rpx solid var(--primary-color-bg);
        color: #333;
        padding: 20rpx 30rpx;
        border-radius: 20rpx;
        margin: 20rpx 0;
        font-size: 30rpx;
      }
    }

    .submit {
      margin-top: 50rpx;
    }

    .footer {
      margin-top: 40rpx;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;

      .link {
        padding: 10rpx 20rpx;
        margin: 0 5rpx;
        color: #999;
        font-size: 26rpx;
        border-radius: 20rpx;
      }
    }
  }
}
</style>
