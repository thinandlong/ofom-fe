import { useMutation } from 'react-query';
import * as api from '@api/user';

const QUERY_KEY = 'signup';

const useMutateSignUp = () => {
	const mutation = useMutation(QUERY_KEY, api.signUp);
	const { mutateAsync: signUp, isError, isLoading } = mutation;

	return { signUp, isError, isLoading };
};

export default useMutateSignUp;
