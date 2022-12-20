import { useMutation } from '@tanstack/react-query';
import { signUpApi } from '@api/user';
import { useRouter } from 'next/router';

const QUERY_KEY = ['signup'];

const useSignUpMutation = () => {
	const router = useRouter();

	const mutation = useMutation(QUERY_KEY, signUpApi, {
		onSuccess: () => {
			router.push('/login');
		},
	});

	return mutation;
};

export default useSignUpMutation;
