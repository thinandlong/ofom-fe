import { ApiError } from '@api/types';
import useForm from '@hooks/useForm';
import { SignUp, SignUpFormInput } from '@mutations/useSignUpMutaion/types';
import { UseMutateAsyncFunction } from '@tanstack/react-query';
import { useMemo } from 'react';

interface UseSignUpFormProps {
  mutateAsync: UseMutateAsyncFunction<
    SignUp,
    ApiError,
    SignUpFormInput,
    unknown
  >;
}

const useSignUpForm = ({ mutateAsync }: UseSignUpFormProps) => {
  const initialFormState = useMemo(
    () => ({
      username: '',
      password: '',
      nickname: '',
    }),
    [],
  );

  const { values, handleChange, handleSubmit } = useForm({
    initialState: initialFormState,
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
      await mutateAsync({ username, password, nickname });
    },
  });
  return {
    handleChange,
    handleSubmit,
  };
};
export default useSignUpForm;
