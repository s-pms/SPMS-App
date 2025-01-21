import '@/airpower/assets/css/airpower.scss'
import '@/static/css/main.scss'

import { createSSRApp } from 'vue'
import App from './App.vue'
import { AirConfig } from '@/airpower/config/AirConfig'
import { AirApi } from '@/airpower/config/AirApi.ts'

const system = uni.getSystemInfoSync()

if (system.uniPlatform !== 'web') {
  const rootUrl = 'http://10.0.0.6:8080/'

  AirConfig.apiUrl = `${rootUrl}`
  AirConfig.staticUrl = `${rootUrl}upload/`
} else {
  AirConfig.apiUrl = '/api/'
}

AirConfig.login = () => {
  AirApi.redirect('/view/login')
}

export function createApp() {
  const app = createSSRApp(App)

  return {
    app,
  }
}
