import { V1_RESOURCE } from '@api/constants';
import { commonInstance } from '@api/index';
import type {
  LoginFormInput,
  LoginResponse,
  SignUpFormInput,
  SignUpResponse,
} from './types';

export const login = async (data: LoginFormInput) =>
  commonInstance.post<LoginResponse>(`${V1_RESOURCE}/auth/login`, data);

export const signUp = async (data: SignUpFormInput) =>
  commonInstance.post<SignUpResponse>(`${V1_RESOURCE}/users`, data);
