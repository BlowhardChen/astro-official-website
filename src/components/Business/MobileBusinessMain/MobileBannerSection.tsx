import React from "react";
import MobileButtonGroup from "./MobileButtonGroup";

interface BannerSectionProps {
  activeButton: boolean;
  setActiveButton: (value: boolean) => void;
}

const BannerSection: React.FC<BannerSectionProps> = ({
  activeButton,
  setActiveButton,
}) => {
  return (
    <div className="relative mt-[66px]">
      <img
        src={"/images/business/banner-mobile.webp"}
        className="h-[284px] w-full object-cover"
        alt="banner"
        loading="lazy"
      />
      <div className="text-white absolute left-1/2 top-[50%] -translate-x-1/2 -translate-y-1/2">
        <img
          src={"/images/business/banner-title-mobile.webp"}
          className="w-[206px] h-[41px]"
          alt="banner title"
          loading="lazy"
        />
      </div>
      <div className="w-full text-white absolute left-1/2 bottom-0 -translate-x-1/2">
        <MobileButtonGroup
          client:load
          activeButton={activeButton}
          setActiveButton={setActiveButton}
        />
      </div>
    </div>
  );
};

export default BannerSection;
