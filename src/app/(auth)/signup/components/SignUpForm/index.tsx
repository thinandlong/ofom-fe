import useSignUpForm from '../../hooks/useSignUpForm';

const SignUpForm = () => {
  const { isLoading, handleChange, handleSubmit } = useSignUpForm();

  return (
    <form
      className="
        w-280 mt-43
        flex-col-items-center
        [&>input]:placeholder:text-gray400 [&>input]:border-gray400 [&>input]:border-b [&>input]:w-full [&>input]:h-31 [&>input]:outline-0 [&>input:not(:first-of-type)]:mt-32
      "
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        name="username"
        onChange={handleChange}
        placeholder="이름"
      />
      <input
        type="password"
        name="password"
        onChange={handleChange}
        placeholder="비밀번호"
      />
      <input
        type="text"
        name="nickname"
        onChange={handleChange}
        placeholder="닉네임"
      />
      <button
        className="h-56 text-white rounded-8 w-160 mt-75 bg-gray300 text-body_1_BD"
        type="submit"
        disabled={isLoading}
      >
        회원가입
      </button>
    </form>
  );
};

export default SignUpForm;
