import Image from 'next/image';
import useForm from '@hooks/useForm';
import useSignUpMutation from '@mutations/useSignUpMutaion';
import { useMemo } from 'react';
import SignUpApiErrorTxt from '@components/SignUpApiErrorTxt';

const SignUpForm = () => {
  const { mutateAsync, isLoading, error: signUpApiError } = useSignUpMutation();
  const initialFormState = useMemo(
    () => ({
      username: '',
      password: '',
      nickname: '',
    }),
    [],
  );

  const { values, errors, handleChange, handleSubmit, hasFormError } = useForm({
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
  return (
    <div className="flex justify-center items-center w-[1045px] h-[600px] rounded-[8px] bg-white">
      <form
        className="flex flex-col items-center h-[480px]"
        onSubmit={handleSubmit}
      >
        <Image
          className="w-auto h-auto "
          src="/logo.png"
          width={109}
          height={54}
          alt="logo"
          priority
        />
        <span className="mt-[40px] not-italic font-bold text-[20px] leading-[150%]">
          ✍️️회원가입
        </span>

        <span className="mt-[4px] not-italic font-light text-[16px] line-height-[150%]">
          로그인하고 쉽고 재밌게 설문을 만들어보세요.
        </span>

        <input
          className="w-full mt-[40px] p-1 border-b"
          type="text"
          name="username"
          onChange={handleChange}
          placeholder="이메일"
        />
        {errors.username && <span>{errors.username}</span>}
        <input
          className="w-full mt-[32px] p-1 border-b"
          type="password"
          name="password"
          onChange={handleChange}
          placeholder="비밀번호"
        />

        <input
          className="w-full mt-[32px] p-1 border-b"
          type="text"
          name="nickname"
          onChange={handleChange}
          placeholder="닉네임"
        />

        <button
          className="w-[160px] h-[56px] mt-[75px] bg-[#D0D4DB] rounded-[8px] not-italic font-bold text-[20px] leading-[150%] text-white"
          type="submit"
          disabled={isLoading}
        >
          회원가입
        </button>
        {!hasFormError && signUpApiError && (
          <SignUpApiErrorTxt errorCode={signUpApiError.errorCode} />
        )}
      </form>
    </div>
  );
};

export default SignUpForm;
