import '@/airpower/assets/css/airpower.scss'
import '@/static/css/main.scss'

import { createSSRApp } from 'vue'
import App from './App.vue'
import { AirConfig } from '@/airpower/config/AirConfig'
import { AirApi } from '@/airpower/config/AirApi.ts'

if (true) {
  const rootUrl = 'http://10.149.4.10:8080/'

  AirConfig.apiUrl = `${rootUrl}`
  AirConfig.staticUrl = `${rootUrl}upload/`
} else {
  AirConfig.apiUrl = '/api/'
}

AirConfig.login = () => {
  AirApi.navigateTo('/view/login')
}

export function createApp() {
  const app = createSSRApp(App)

  return {
    app,
  }
}
