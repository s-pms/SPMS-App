import '@/airpower/assets/css/airpower.scss'
import '@/airpower/assets/css/weui.scss'
import '@/static/css/main.scss'

import { createSSRApp } from 'vue'
import App from './App.vue'
import { AirConfig } from '@/airpower/config/AirConfig'

const rootUrl = 'http://127.0.0.1:8080/'

AirConfig.apiUrl = `${rootUrl}api/`
AirConfig.staticUrl = `${rootUrl}upload/`

export function createApp() {
  const app = createSSRApp(App)

  return {
    app,
  }
}
