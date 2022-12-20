import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import { loginApi } from './api';

const QUERY_KEY = ['login'];

const useLoginMutaion = () => {
	const router = useRouter();

	const mutaion = useMutation(QUERY_KEY, loginApi, {
		onSuccess: (res) => {
			const { token } = res.data;

			localStorage.setItem('token', token);
			router.push('/main');
		},
	});

	return mutaion;
};

export default useLoginMutaion;
