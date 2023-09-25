import { UseMutateAsyncFunction } from '@tanstack/react-query';
import { ApiError } from '@api/types';
import useForm from '@hooks/useForm';
import { Login, LoginFormInput } from '@mutations/useLoginMutaion/types';

interface useLogInFormProps {
  mutateAsync: UseMutateAsyncFunction<Login, ApiError, LoginFormInput, unknown>;
}
const useLogInForm = ({ mutateAsync }: useLogInFormProps) => {
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
      await mutateAsync({ username, password });
    },
  });
  return {
    handleSubmit,
    handleChange,
  };
};
export default useLogInForm;
