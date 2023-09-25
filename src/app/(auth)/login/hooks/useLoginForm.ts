import { useRouter } from 'next/navigation';
import { useMutation } from '@tanstack/react-query';
import { login } from '@api/auth';
import type { ApiError } from '@api/types';
import useForm from '@hooks/useForm';

const useLogInForm = () => {
  const router = useRouter();

  const mutation = useMutation(login, {
    onSuccess: ({ token }) => {
      localStorage.setItem('token', token);
      router.push('/main');
    },
    onError: ({ reason }: ApiError) => {
      alert(reason);
    },
  });

  const { values, handleChange, handleSubmit } = useForm({
    initialState: {
      username: '',
      password: '',
    },
    validate: ({ password, username }) => {
      let passwordError = null;
      let usernameError = null;

      if (!username) {
        passwordError = '이메일을 입력해주세요.';
      }

      if (!password) {
        usernameError = '비밀번호를 입력해주세요.';
      }

      return {
        password: passwordError,
        username: usernameError,
      };
    },
    onSubmit: async () => {
      const { username, password } = values;
      await mutation.mutateAsync({ username, password });
    },
  });

  return {
    ...mutation,
    handleChange,
    handleSubmit,
  };
};

export default useLogInForm;
