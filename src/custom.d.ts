import axios from 'axios'

declare module 'axios' {
  interface AxiosRequestConfig {
    banRepeatCancel?: boolean
  }
}