import React from "react";
import LazyImage from "./LazyImage";

interface BannerProps {}

const Banner: React.FC<BannerProps> = () => {
  return (
    <div className="relative mt-[66px]" id="us">
      <LazyImage
        src="/images/join/banner-mobile.webp"
        alt="banner"
        className="h-[284px] w-full object-cover"
      />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center text-white text-2xl sm:text-3xl">
        <LazyImage
          src="/images/join/title-bg-mobile.webp"
          alt="phone"
          className="w-full h-[76px]"
        />
      </div>
    </div>
  );
};

export default Banner;
