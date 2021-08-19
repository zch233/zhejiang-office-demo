import { Toast, ToastOptions } from 'vant';

export const showLoadingToast = (options: ToastOptions) => Toast.loading({ message: '加载中...', duration: 0, forbidClick: true, ...options });

export const showOverlayLoadingToast = (options: ToastOptions) => Toast.loading({ message: '加载中...', duration: 0, forbidClick: true, overlay: true, ...options });

export const clearToast = () => Toast.clear();

export const showSuccessToast = (options: ToastOptions) => Toast.success({ message: '操作成功', ...options });

export const showFailToast = (options: ToastOptions) => Toast.fail({ message: '出错了', ...options });

export const showToast = (options: ToastOptions) => Toast({ message: '出错了', ...options });
