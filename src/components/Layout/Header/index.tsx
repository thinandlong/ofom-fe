import Image from 'next/image';
import { useUser } from '@queries/index';
import appIcon from '../../../../public/app-icon.png';
import defaultThumbnail from '../../../../public/default-thumbnail.png';
import popUp from '../../../../public/popup.png';

const Header = () => {
  const { data: user } = useUser();

  return (
    <div className="flex justify-around items-center absolute top-0 w-[100%] h-[56px] bg-white">
      <div className="flex justify-between items-center gap-[28px] text-body_2_MD text-gray700">
        <Image src={appIcon} alt="앱아이콘" priority />
        {user && <span className="cursor-pointer">마이 폼</span>}
        <span className="cursor-pointer">서비스 소개 ↗️</span>
      </div>

      {/* 설문 작성 페이지에서의 설문 제목 상태와 연동되는 UI 추후 구현
      {user && <div>input</div>} */}

      {user ? (
        <div className="flex-center gap-[16px]">
          <Image
            src={user.thumbnailUrl || defaultThumbnail}
            alt="프로필이미지"
            priority
            className="rounded-[6px]"
          />
          <Image src={popUp} alt="알림" priority className="cursor-pointer" />
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
