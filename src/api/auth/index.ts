import api from '@api/index';
import { LoginFormInput, Login } from './type';

const RESOURCE = '/api/v1/auth';

export const login = async (data: LoginFormInput) => {
	return api.post<Login>(`${RESOURCE}/login`, data);
};
