import React from "react";

const CompanyProfileSection: React.FC = () => {
  return (
    <div id="about">
      <div className="w-full top-0 px-4 pt-[24px]">
        <h3 className="text-xl font-bold">公司简介</h3>
        <div className="mt-[16px] w-full p-3 bg-[#fff]">
          <span className="text-base font-semibold">
            乡土（北京）科技有限公司
          </span>
          <div className="text-sm mt-[8px] leading-[22px] text-[#666]">
            乡土（北京）科技有限公司是一家致力于以数字技术推动农业发展的科技公司，旗下地约云平台以"互联网+农业服务"为基础，整合农资、农机、农技，运用物联网创新农业技术服务农业生产。
            <a href="">
              <span className="text-sm text-primary">了解更多</span>
            </a>
          </div>
        </div>
        <div className="mt-[2px] w-full h-[229px]">
          <img
            src={"/images/about/bg-nasdaq-mobile.webp"}
            className="w-full h-[229px] object-cover mt-[-8px] rounded"
            alt="nasdaq"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

export default CompanyProfileSection;
