import React from "react";
import MobileBannerSection from "./MobileBannerSection";
import MobileCompanyProfileSection from "./MobileCompanyProfileSection";
import MobileDevelopmentTimelineSection from "./MobileDevelopmentTimelineSection";
import MobileFeatureCardList from "../../Home/MobileHome/MobileFeatureCardList";
import MobileQualificationCardList from "../../../components/Home/MobileHome/MobileQualificationCardList";
import {homeData} from "../../../data/homeData";

const AboutMain: React.FC = () => {
  const {features, qualifications} = homeData;
  return (
    <main className="bg-[#F5F6F8]">
      {/* banner */}
      <MobileBannerSection />
      {/*  公司简介  */}
      <MobileCompanyProfileSection />
      {/*  企业文化  */}
      <div className="pt-[32px] px-[16px] bg-[#F5F6F8]">
        <h3 className="text-xl font-bold">企业文化</h3>
        <MobileFeatureCardList features={features} />
      </div>
      {/* 发展历程 */}
      <MobileDevelopmentTimelineSection />
      {/*  荣誉资质  */}
      <div className="relative h-[405px] ">
        <img
          src={"/images/home/bg-4-mobile.webp"}
          className="h-[405px] w-full object-cover"
          alt="bg-3"
          loading="lazy"
        />
        <div className="absolute w-full top-0 px-[16px]">
          <h3 className="text-xl font-bold ]">荣誉资质</h3>
          <div className="mt-[16px] mb-[26px]">
            <MobileQualificationCardList
              qualifications={qualifications}
              className="justify-between"
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

export default AboutMain;
