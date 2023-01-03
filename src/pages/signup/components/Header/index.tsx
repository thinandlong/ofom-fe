import Image from 'next/image';

const Header = () => {
  return (
    <>
      <Image
        className="w-auto h-auto mt-[55px]"
        src="/logo.png"
        width={109}
        height={54}
        alt="logo"
        priority
      />
      <h1 className="mt-40 text-gray800 text-body_1_BD">✍️️회원가입</h1>
      <h2 className="mt-4 text-body_3_MD text-gray600">
        로그인하고 쉽고 재밌게 설문을 만들어보세요.
      </h2>
    </>
  );
};
export default Header;
