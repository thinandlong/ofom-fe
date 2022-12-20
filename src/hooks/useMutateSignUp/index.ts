import { useMutation } from '@tanstack/react-query';
import { signUpApi } from '@api/user';

const QUERY_KEY = ['signup'];

const useMutateSignUp = () => {
	const mutation = useMutation(QUERY_KEY, signUpApi);
	const { mutateAsync: signUp, isError, isLoading } = mutation;

	return { signUp, isError, isLoading };
};

export default useMutateSignUp;
