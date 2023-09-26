const Sidebar = () => {
  return (
    <div className="absolute top-[56px] left-0 w-[473px] h-[884px]">
      <aside className="pt-[20px] pl-[260px] pr-[24px]">
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
              {/* Badges 컴포넌트로 추상화 필요 */}
              <div className="flex items-start w-[49px] h-[23px] py-[3px] px-[8px] bg-blue100 rounded-[100px] text-blue850 gap-[4px]">
                <span className="w-[21px] h-[17px] text-caption_1_RG">
                  필수
                </span>
                <span className="w-[8px] h-[17px] text-caption_1_SB">0</span>
              </div>
              <div className="flex items-start w-[49px] h-[23px] py-[3px] px-[8px] bg-gray200 rounded-[100px] text-gray600 gap-[4px]">
                <span className="w-[21px] h-[17px] text-caption_1_RG">
                  선택
                </span>
                <span className="w-[8px] h-[17px] text-caption_1_SB">0</span>
              </div>
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

        <div>
          {/* Button 컴포넌트 추상화 필요 */}
          <button type="button">설문 시작</button>
          <button type="button">응답</button>
          <button type="button">
            <span>저장</span>
            <div>00분 전</div>
          </button>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
