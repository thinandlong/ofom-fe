import { useMutation } from 'react-query';
import * as api from '@api/auth';

const QUERY_KEY = 'login';

const useMutateLogin = () => {
	const mutaion = useMutation(QUERY_KEY, api.login, {
		onSuccess: (res) => {
			const { token } = res.data;
			localStorage.setItem('token', token);
		},
	});

	const { mutateAsync: login, isLoading } = mutaion;

	return { login, isLoading };
};

export default useMutateLogin;
