import { useRouter } from 'next/navigation';
import { useMutation } from '@tanstack/react-query';
import { signUp } from '@/api/auth';
import type { ApiError } from '@/api/types';
import useForm from '@/hooks/useForm';

const useSignUpForm = () => {
  const router = useRouter();

  const mutation = useMutation(signUp, {
    onSuccess: () => {
      router.push('/login');
    },
    onError: ({ reason }: ApiError) => {
      alert(reason);
    },
  });

  const { values, handleChange, handleSubmit } = useForm({
    initialState: {
      username: '',
      password: '',
      nickname: '',
    },
    validate: ({ username, password, nickname }) => {
      let usernameError = null;
      let passwordError = null;
      let nicknameError = null;

      if (!username) {
        usernameError = '이메일을 입력해주세요.';
      }

      if (!password) {
        passwordError = '비밀번호를 입력해주세요.';
      }

      if (!nickname) {
        nicknameError = '닉네임을 입력해주세요.';
      }

      return {
        username: usernameError,
        password: passwordError,
        nickname: nicknameError,
      };
    },
    onSubmit: async () => {
      const { username, password, nickname } = values;
      await mutation.mutateAsync({ username, password, nickname });
    },
  });
  return {
    ...mutation,
    handleChange,
    handleSubmit,
  };
};
export default useSignUpForm;
