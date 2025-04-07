import React from "react";
import LazyImage from "./LazyImage";

interface BannerProps {}

const Banner: React.FC<BannerProps> = () => {
  return (
    <div className="relative mt-[66px]" id="us">
      <LazyImage
        src="/images/join/banner.webp"
        alt="加盟背景"
        className="h-[634px] w-full object-cover"
      />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center text-white text-2xl sm:text-3xl">
        <LazyImage
          src="/images/join/title-bg.webp"
          alt="标题背景"
          className="w-[608px] h-[76px]"
        />
        <LazyImage
          src="/images/join/phone-bg.webp"
          alt="手机预览"
          className="w-[411px] h-[34px] mt-[31px]"
        />
      </div>
    </div>
  );
};

export default Banner;
