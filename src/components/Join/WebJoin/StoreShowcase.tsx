import React from "react";
import LazyImage from "./LazyImage";

interface StoreShowcaseProps {}

const StoreShowcase: React.FC<StoreShowcaseProps> = () => {
  return (
    <div className="relative w-full h-[1148px] bg-white">
      <div className="absolute left-1/2 transform -translate-x-1/2 top-0 overflow-hidden">
        <div className="text-3xl font-bold mt-[40px]">门店展示</div>
        <div className="w-[1601px] h-[1028px] mt-[20px]">
          <LazyImage
            src="/images/join/bg4.webp"
            alt="门店展示背景"
            className="w-[1601px] h-[1028px]"
          />
        </div>
      </div>
    </div>
  );
};

export default StoreShowcase;
