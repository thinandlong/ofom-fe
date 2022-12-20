import api from '@api/index';
import type { SignUp, SignUpFormInput } from './types';

const RESOURCE = '/api/v1/users';

export const signUpApi = async (data: SignUpFormInput) => {
	const response = await api.post<SignUp>(`${RESOURCE}`, data);
	return response;
};
