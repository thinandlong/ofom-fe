/* eslint-disable no-console */
import { ApiError } from '@api/types';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import { signUpApi } from './api';

const useSignUpMutation = () => {
  const router = useRouter();

  const mutation = useMutation(signUpApi, {
    onSuccess: () => {
      router.push('/login');
    },
    onError: ({ reason }: ApiError) => {
      alert(reason);
    },
  });

  return mutation;
};

export default useSignUpMutation;
