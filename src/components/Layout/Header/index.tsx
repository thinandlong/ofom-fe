import Image from 'next/image';
import useUser from '@/hooks/useUser';

const Header = () => {
  const { data: user } = useUser();

  return (
    <div className="flex justify-around items-center absolute top-0 w-[100%] h-[56px] bg-white">
      <div className="flex justify-between items-center gap-[28px] text-body_2_MD text-gray700">
        <Image
          className="w-auto h-auto"
          src="/images/app-icon.png"
          alt="앱아이콘"
          width={36}
          height={36}
        />
        {user && <span className="cursor-pointer">마이 폼</span>}
        <span className="cursor-pointer">서비스 소개 ↗️</span>
      </div>

      {/* 설문 작성 페이지에서의 설문 제목 상태와 연동되는 UI 추후 구현
      {user && <div>input</div>} */}

      {user ? (
        <div className="flex-center gap-[16px]">
          <Image
            className="w-auto h-auto cursor-pointer"
            src={user.thumbnailUrl || '/images/default-thumbnail.png'}
            alt="프로필이미지"
            width={28}
            height={28}
          />
          <Image
            className="w-auto h-auto cursor-pointer"
            src="/images/popup.png"
            alt="알림"
            width={24}
            height={24}
          />
          <button
            type="button"
            className="flex-center w-[81px] h-[29px] px-[16px] py-[4px] gap-[8px] bg-gray100 rounded-[100px] text-body_3_MD text-gray700 cursor-pointer"
          >
            로그아웃
          </button>
        </div>
      ) : (
        <span className="flex-center w-[169px] h-[29px] bg-gray100 text-gray500 text-body_3_MD rounded-[100px] cursor-pointer">
          ✉️ 이메일을 잊으셨나요?
        </span>
      )}
    </div>
  );
};

export default Header;
