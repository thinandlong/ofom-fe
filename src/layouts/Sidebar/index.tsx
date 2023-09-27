import Badge from '@/components/badge';
import Button from '@/components/button';

const Sidebar = () => {
  return (
    <aside className="w-[473px] h-[884px] bg-white">
      <div className="pt-[20px] pl-[260px] pr-[24px]">
        <div className="flex flex-col w-[189px] h-[292px] gap-[20px] cursor-default">
          {/* progress */}
          <div className="w-[189px] h-[84px]">
            <span className="inline-block mb-[8px] text-body_3_MD text-gray600">
              전체 질문 개수
            </span>
            <div className="flex items-center justify-between w-[163px] h-[54px] gap-[6px]">
              <div className="flex items-end">
                <span className="w-[23px] h-[54px] text-gray400 text-title_2_SB">
                  0
                </span>
                <span className="w-[18px] h-[36px] text-gray400 text-body_1_SB">
                  개
                </span>
              </div>

              <Badge variant="require" count={0} />
              <Badge variant="select" count={0} />
            </div>
          </div>

          {/* time */}
          <div className="w-[189px] h-[84px]">
            <span className="inline-block mb-[8px] text-body_3_MD text-gray600">
              예상 소요 시간
            </span>
            <div>
              <span className="w-[23px] h-[54px] text-gray400 text-title_2_SB">
                0
              </span>
              <span className="w-[18px] h-[36px] text-gray400 text-body_1_SB">
                분
              </span>
            </div>
          </div>

          {/* quantity */}
          <div className="w-[189px] h-[84px]">
            <span className="inline-block mb-[8px] text-body_3_MD text-gray600">
              설문 완성도
            </span>
            <div>
              <span className="w-[23px] h-[54px] text-gray400 text-title_2_SB">
                00
              </span>
              <span className="w-[18px] h-[36px] text-gray400 text-body_1_SB">
                %
              </span>
            </div>
          </div>
        </div>

        {/* controller button groups */}
        <Button variant="start">설문 시작</Button>
        <Button variant="analytics">응답</Button>
        <Button variant="save">
          <span className="text-white text-body_2_BD">저장</span>
          <span className="w-[55px] h-[23px] px-2 py-[3px] bg-white bg-opacity-10 rounded-[100px] text-white text-caption_1_SB">
            00분 전
          </span>
        </Button>
      </div>
    </aside>
  );
};

export default Sidebar;
