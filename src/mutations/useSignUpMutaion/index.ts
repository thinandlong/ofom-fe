/* eslint-disable no-console */
import { ApiError } from '@api/types';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import { signUpApi } from './api';

const useSignUpMutation = () => {
  const router = useRouter();

  const mutation = useMutation(signUpApi, {
    onSuccess: ({ socialType, username }) => {
      console.log(username, socialType, 'asdf');
      router.push('/login');
    },
    onError: ({ errorCode }: ApiError) => {
      console.error(errorCode, 'errorCode');
    },
  });

  return mutation;
};

export default useSignUpMutation;
