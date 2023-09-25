import useLoginForm from '../../hooks/useLoginForm';

const LoginForm = () => {
  const { isLoading, handleChange, handleSubmit } = useLoginForm();

  return (
    <form
      className="w-280 mt-43
      flex-col-items-center
      [&>input]:placeholder:text-gray400 [&>input]:border-gray400 [&>input]:border-b [&>input]:w-full [&>input]:h-31 [&>input]:outline-0 [&>input:not(:first-of-type)]:mt-32"
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
      <button
        className="h-56 text-white rounded-8 w-160 mt-75 bg-gray300 text-body_1_BD"
        type="submit"
        disabled={isLoading}
      >
        로그인
      </button>
    </form>
  );
};

export default LoginForm;
