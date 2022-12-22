import { ApiError } from '@api/types';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import { signUpApi } from './api';

const QUERY_KEY = ['signup'];

const useSignUpMutation = () => {
	const router = useRouter();

	const mutation = useMutation(QUERY_KEY, signUpApi, {
		onSuccess: ({ socialType, username }) => {
			console.log(username, socialType, 'asdf');
			router.push('/login');
		},
		onError: ({ errorCode, errors, reason, status }: ApiError) => {
			// 저는 여기서 예외처리하는게 맞는것 같아요
			console.error(errorCode, 'errorCode');
			return 'test error';
		},
	});

	return mutation;
};

export default useSignUpMutation;
