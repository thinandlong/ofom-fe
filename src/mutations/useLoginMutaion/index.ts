import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import { loginApi } from './api';

const useLoginMutaion = () => {
	const router = useRouter();

	const mutaion = useMutation(loginApi, {
		onSuccess: ({ token }) => {
			localStorage.setItem('token', token);
			router.push('/main');
		},
	});

	return mutaion;
};

export default useLoginMutaion;
