import React from "react";

const CompanyProfileSection = () => {
  return (
    <div
      className="absolute left-1/2 transform -translate-x-1/2 top-0 overflow-hidden"
      id="about"
    >
      <div className="relative mt-[59px] flex w-full">
        <div className="w-[1580px] z-50">
          <span className="text-3xl font-bold">公司简介</span>
          <div className="w-[892px] h-[421px] bg-white shadow-lg rounded-lg mt-[29px] px-[46px] py-[39px]">
            <span className="text-[28px] font-semibold">
              乡土（北京）科技有限公司
            </span>
            <div className="text-xl mt-[8px] leading-8 text-noteText2">
              乡土（北京）科技有限公司是一家致力于以数字技术推动农业发展的科技公司，旗下地约云平台以"互联网+农业服务"为基础，整合农资、农机、农技，运用物联网创新农业技术服务农业生产。
            </div>
            <div className="mt-[20px] border w-[132px] h-[44px] flex items-center justify-center border-primary">
              <a href="">
                <span className="text-base text-primary">了解更多 → </span>
              </a>
            </div>
          </div>
        </div>
        <div className="absolute z-10 w-[803px] h-[494px] right-0">
          <img
            src={"/images/home/bg-nasdaq.webp"}
            className="w-[803px] h-[494px] object-cove mt-[-8px] rounded"
            alt="nasdaq"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

export default CompanyProfileSection;
