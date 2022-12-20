import { useMutation } from '@tanstack/react-query';
import { loginApi } from '@api/auth';

const QUERY_KEY = ['login'];

const useMutateLogin = () => {
	const mutaion = useMutation(QUERY_KEY, loginApi, {
		onSuccess: (res) => {
			const { token } = res.data;
			localStorage.setItem('token', token);
		},
	});

	const { mutateAsync: login, isLoading } = mutaion;

	return { login, isLoading };
};

export default useMutateLogin;
