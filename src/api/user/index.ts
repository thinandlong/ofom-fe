import api from '@api/index';
import { SignUp, SignUpFormInput } from './type';

const RESOURCE = '/api/v1/users';

export const signUp = async (data: SignUpFormInput) => {
	const response = await api.post<SignUp>(`${RESOURCE}`, data);
	return response;
};
