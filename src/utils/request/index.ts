import { showFailToast } from '../toast';
import axios, { AxiosRequestConfig } from 'axios';

export const request = axios.create({
  baseURL: 'https://www.shiliuapp.net:8088/zlb',
  timeout: 120 * 1000,
});

const pending = new Map();

const addPending = (config: AxiosRequestConfig & {banRepeatCancel?: boolean}) => {
  if (config.banRepeatCancel) return; // 接口配置了重复请求不会取消
  const url = [config.method, config.url!.replace(config.baseURL!, '')].join('&');
  config.cancelToken =
    config.cancelToken ||
    new axios.CancelToken(cancel => {
      if (!pending.has(url)) {
        // 如果 pending 中不存在当前请求，则添加进去
        pending.set(url, cancel);
      }
    });
};
/**
 * 移除请求
 * @param {Object} config
 */
const removePending = (config: AxiosRequestConfig) => {
  const url = [config.method, config.url!.replace(config.baseURL!, '')].join('&');
  if (pending.has(url)) {
    // 如果在 pending 中存在当前请求标识，需要取消当前请求，并且移除
    pending.get(url)();
    pending.delete(url);
  }
};
/**
 * 清空 pending 中的请求（在路由跳转时调用）
 */
export const clearPending = () => {
  pending.forEach(cancel => cancel());
  pending.clear();
};

request.interceptors.request.use(
  config => {
    const formData = new FormData()
    Object.keys(config.data).map(key => formData.append(key, config.data[key]))
    config.data = formData
      removePending(config); // 在请求开始前，对之前的请求做检查取消操作
    addPending(config); // 将当前请求添加到 pending 中
    return config;
  },
  err => {
    // Do something with index error
    showFailToast({ message: '客户端网络错误' });
    throw err;
  }
);

// Add a response interceptor
request.interceptors.response.use(
  response => {
    // Do something with response data
    removePending(response.config); // 在请求结束后，移除本次请求
    return response.data;
    // if (data.code === 200) {
    //   return data;
    // } else {
    //   console.error('😭😭😭', response);
    //   showFailToast({ message: data.message || '出错了' });
    //   throw data;
    // }
  },
  err => {
    if (axios.isCancel(err)) {
      throw '💩💩💩请求已取消';
    }
    showFailToast({ message: '服务器开小差了，请刷新重试' });
    throw err;
  }
);
