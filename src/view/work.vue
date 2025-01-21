<template>
  <ABody tabbar>
    <template
      v-for="module in moduleList"
      :key="module.id"
    >
      <view
        v-if="module.children?.length>0"
        class="module-item"
      >
        <view class="module-title">
          {{ module.name }}
        </view>
        <view class="module-menu-list">
          <view
            v-for="menu in module.children"
            :key="menu.id"
            class="menu-item"
            @click="openMenu(menu)"
          >
            {{ menu.name }}
          </view>
        </view>
      </view>
    </template>
  </ABody>
</template>

<script lang="ts" setup>
import { onShow } from '@dcloudio/uni-app'
import { ref } from 'vue'
import { AppConfig } from '@/config/AppConfig'
import { UserService } from '@/model/personnel/user/UserService'
import { MenuEntity } from '@/model/system/menu/MenuEntity'
import { ABody } from '@/airpower/components'

const moduleList = ref<MenuEntity[]>([])

async function init() {
  AppConfig.currentUser.value = await UserService.create().getMyInfo()
  moduleList.value = await UserService.create().getMyMenuList()
}

onShow(() => {
  init()
})

function openMenu(menu: MenuEntity) {
  uni.navigateTo({
    url: menu.path.replace('/console/', '/view/'),
  })
}

</script>

<style lang="scss">
.module-item {
  background-color: white;
  border-radius: 20rpx;
  margin: 20rpx 10rpx;
  padding: 20rpx;

  .module-title {
    font-size: 32rpx;
    margin-bottom: 20rpx;
    padding: 0 10rpx;
    color: #111;
  }

  .module-menu-list {
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;

    .menu-item {
      margin: 8rpx;
      width: calc(33.3333333% - 16rpx);
      box-sizing: border-box;
      font-size: 26rpx;
      background-color: var(--primary-color-bg);
      text-align: center;
      height: 100rpx;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 20rpx;
      color: #666;
    }
  }
}
</style>
