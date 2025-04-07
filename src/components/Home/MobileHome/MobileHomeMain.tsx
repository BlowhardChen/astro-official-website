import React from "react";
import MobileFeatureCardList from "./MobileFeatureCardList";
import MobileServiceCardList from "./MobileServiceCardList";
import MobileAdvantageCardList from "./MobileAdvantageCardList";
import MobileQualificationCardList from "./MobileQualificationCardList";
import {homeData} from "../../../data/homeData";

const MobileHomeMain: React.FC = () => {
  const {features, services, advantages, qualifications} = homeData;

  return (
    <main>
      {/*  banner  */}
      <div className="relative mt-[66px]">
        <img
          src={"/images/home/bg-1-mobile.webp"}
          className="w-full object-cover h-[284px]"
          alt="bg-1"
          loading="lazy"
        />
        <div className="absolute top-[142px] left-[45px] items-center">
          <img
            src={"/images/home/icon-home-title-mobile.webp"}
            className="h-[38px]"
            alt="title"
            loading="lazy"
          />
        </div>
      </div>

      {/*  公司简介  */}
      <div className="relative">
        <img
          src={"/images/home/bg-2-mobile.webp"}
          className="h-[438px] w-full object-cover"
          alt="bg-2"
          loading="lazy"
        />
        <div className="absolute w-full top-0 px-4 pt-[24px]">
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
          <div className="mt-[2px]">
            <img
              src={"/images/home/bg-nasdaq-mobile.webp"}
              className="w-full h-[229px] object-cover mt-[-8px] rounded"
              alt="nasdaq"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      {/*  企业文化  */}
      <div className="py-[32px] px-[16px] bg-[#F5F6F8]">
        <h3 className="text-xl font-bold">企业文化</h3>
        <MobileFeatureCardList features={features} />
      </div>

      {/*  公司业务  */}
      <div className="relative">
        <img
          src={"/images/home/bg-3-mobile.webp"}
          className="h-[678px] w-full object-cover"
          alt="bg-3"
          loading="lazy"
        />
        <div className="absolute w-full top-0 px-4 pt-[24px]">
          <h3 className="text-xl font-bold">公司业务</h3>
          <div className="mt-[16px]">
            <MobileServiceCardList services={services} />
          </div>
        </div>
      </div>

      {/*  能力优势  */}
      <div className="py-[32px] px-[16px] bg-[#F5F6F8]">
        <h3 className="text-xl font-bold">能力优势</h3>
        <MobileAdvantageCardList
          advantages={advantages}
          className="justify-center"
          gap="24px"
          cardClassName="hover:bg-black/20 transition-colors"
        />
      </div>

      {/*  荣誉资质  */}
      <div className="relative h-[405px]">
        <img
          src={"/images/home/bg-4-mobile.webp"}
          className="h-[405px] w-full object-cover"
          alt="bg-3"
          loading="lazy"
        />
        <div className="absolute w-full top-0 px-4">
          <h3 className="text-xl font-bold ">荣誉资质</h3>
          <div className="mt-[16px]">
            <MobileQualificationCardList
              qualifications={qualifications}
              className="justify-center"
              gap="7px"
              cardClassName="hover:scale-105 transition-transform"
              wrap
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default MobileHomeMain;
