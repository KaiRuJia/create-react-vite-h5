import axios, { AxiosError, type AxiosRequestConfig, type AxiosResponse, type InternalAxiosRequestConfig } from 'axios';
import { Toast } from 'antd-mobile';

interface RequestConfig extends AxiosRequestConfig {
  showLoading?: boolean;
  showError?: boolean;
}

const instance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

let loadingCount = 0;

const showLoading = () => {
  if (loadingCount === 0) {
    Toast.show({
      icon: 'loading',
      content: '加载中...',
      duration: 0,
    });
  }
  loadingCount++;
};

const hideLoading = () => {
  loadingCount--;
  if (loadingCount <= 0) {
    loadingCount = 0;
    Toast.clear();
  }
};

instance.interceptors.request.use(
  (config: InternalAxiosRequestConfig & { showLoading?: boolean }) => {
    if (config.showLoading !== false) {
      showLoading();
    }
    
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    
    return config;
  },
  (error: AxiosError) => {
    hideLoading();
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response: AxiosResponse) => {
    hideLoading();
    
    const { data } = response;
    
    if (data.code === 200) {
      return data.data;
    } else {
      Toast.show({
        content: data.message || '请求失败',
        icon: 'fail',
      });
      return Promise.reject(new Error(data.message || '请求失败'));
    }
  },
  (error: AxiosError) => {
    hideLoading();
    
    const config = error.config as RequestConfig;
    
    if (config?.showError !== false) {
      if (error.response) {
        const status = error.response.status;
        let message = '请求失败';
        
        switch (status) {
          case 400:
            message = '请求参数错误';
            break;
          case 401:
            message = '未授权，请重新登录';
            localStorage.removeItem('token');
            break;
          case 403:
            message = '拒绝访问';
            break;
          case 404:
            message = '请求资源不存在';
            break;
          case 500:
            message = '服务器内部错误';
            break;
          case 502:
            message = '网关错误';
            break;
          case 503:
            message = '服务不可用';
            break;
          case 504:
            message = '网关超时';
            break;
          default:
            message = `请求失败 (${status})`;
        }
        
        Toast.show({
          content: message,
          icon: 'fail',
        });
      } else if (error.request) {
        Toast.show({
          content: '网络错误，请检查网络连接',
          icon: 'fail',
        });
      } else {
        Toast.show({
          content: error.message || '请求失败',
          icon: 'fail',
        });
      }
    }
    
    return Promise.reject(error);
  }
);

export default instance;