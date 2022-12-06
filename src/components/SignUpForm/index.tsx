import Image from 'next/image';

const SignUpForm = () => {
	return (
		<div className="flex justify-center items-center w-[1045px] h-[600px] rounded-[8px] bg-white">
			<div className="flex flex-col items-center h-[480px]">
				<Image src="/logo.png" width={109} height={54} alt="logo" priority />
				<span className="mt-[40px] not-italic font-bold text-[20px] leading-[150%]">
					✍️️회원가입
				</span>
				<span className="mt-[4px] not-italic font-light text-[16px] line-height-[150%]">
					로그인하고 쉽고 재밌게 설문을 만들어보세요.
				</span>
				<input
					className="w-full mt-[40px] p-1 border-b"
					type="text"
					placeholder="이메일"
				/>
				<input
					className="w-full mt-[32px] p-1 border-b"
					type="password"
					placeholder="비밀번호"
				/>
				<input
					className="w-full mt-[32px] p-1 border-b"
					type="text"
					placeholder="닉네임"
				/>
				<button
					className="w-[160px] h-[56px] mt-[75px] bg-[#D0D4DB] rounded-[8px] not-italic font-bold text-[20px] leading-[150%] text-white"
					type="submit"
				>
					회원가입
				</button>
			</div>
		</div>
	);
};

export default SignUpForm;
