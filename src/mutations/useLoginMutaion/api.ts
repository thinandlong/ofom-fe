import { V1_RESOURCE } from '@api/constants';
import { commonInstance } from '@api/index';
import type { LoginFormInput, Login } from './types';

export const loginApi = async (data: LoginFormInput) =>
	commonInstance.post<Login>(`${V1_RESOURCE}/auth/login`, data);
