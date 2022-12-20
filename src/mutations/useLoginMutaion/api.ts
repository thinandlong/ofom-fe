import api from '@api/index';
import type { LoginFormInput, Login } from './types';

const RESOURCE = '/api/v1/auth';

export const loginApi = async (data: LoginFormInput) => {
	return api.post<Login>(`${RESOURCE}/login`, data);
};
