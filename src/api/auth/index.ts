import { commonInstance } from '@/api';
import { V1_RESOURCE } from '@/api/constants';
import type {
  LoginFormInput,
  LoginResponse,
  SignUpFormInput,
  SignUpResponse,
  UserResponse,
} from './types';

export const login = (data: LoginFormInput) =>
  commonInstance.post<LoginResponse>(`${V1_RESOURCE}/auth/login`, data);

export const signUp = (data: SignUpFormInput) =>
  commonInstance.post<SignUpResponse>(`${V1_RESOURCE}/users`, data);

export const getUser = () =>
  commonInstance.get<UserResponse>(`${V1_RESOURCE}/auth/user-infos`);
