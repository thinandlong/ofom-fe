import Image from 'next/image';
import useForm from '@hooks/useForm';
import useMutateLogin from '@hooks/useMutateLogin';
import { useRouter } from 'next/router';

const LoginForm = () => {
	const router = useRouter();
	const { login, isLoading } = useMutateLogin();

	// mutation을 통한 예외처리 로직 구체화 필요
	// useForm validate 구체화 필요
	const { values, handleChange, handleSubmit } = useForm({
		initialState: {
			username: '',
			password: '',
		},
		validate: ({ username, password }) => {
			const errors: { [key: string]: string } = {};

			if (!username) {
				errors.username = '이메일을 입력해주세요.';
			}

			if (!password) {
				errors.password = '비밀번호를 입력해주세요.';
			}

			return errors;
		},
		onSubmit: async () => {
			const { username, password } = values;
			await login({ username, password });
			router.push('/main');
		},
	});

	return (
		<div className="flex justify-center items-center w-[1045px] h-[600px] rounded-[8px] bg-white">
			<form
				className="flex flex-col items-center h-[480px]"
				onSubmit={handleSubmit}
			>
				<Image
					className=" w-auto h-auto"
					src="/logo.png"
					width={109}
					height={54}
					alt="logo"
					priority
				/>

				<span className="mt-[40px] not-italic font-bold text-[20px] leading-[150%]">
					✍️️로그인
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

				<input
					className="w-full mt-[32px] p-1 border-b"
					type="password"
					name="password"
					onChange={handleChange}
					placeholder="비밀번호"
				/>

				<button
					className="w-[160px] h-[56px] mt-[75px] bg-[#D0D4DB] rounded-[8px] not-italic font-bold text-[20px] leading-[150%] text-white"
					type="submit"
					disabled={isLoading}
				>
					로그인
				</button>
			</form>
		</div>
	);
};

export default LoginForm;
