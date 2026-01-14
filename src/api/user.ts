import request from '@/utils/request';

export interface UserInfo {
  id: string;
  username: string;
  email: string;
  avatar: string;
  createdAt: string;
}

export interface LoginParams {
  username: string;
  password: string;
}

export interface RegisterParams {
  username: string;
  password: string;
  email: string;
}

export const userApi = {
  login: (params: LoginParams) => 
    request.post<{ token: string }>('/user/login', params),
  
  register: (params: RegisterParams) => 
    request.post<{ token: string }>('/user/register', params),
  
  getUserInfo: () => 
    request.get<UserInfo>('/user/info'),
  
  updateUserInfo: (params: Partial<UserInfo>) => 
    request.put<UserInfo>('/user/info', params),
  
  logout: () => 
    request.post('/user/logout'),
};