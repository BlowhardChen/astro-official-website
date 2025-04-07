import React from "react";
import LazyImage from "./LazyImage";

interface StoreShowcaseProps {}

const StoreShowcase: React.FC<StoreShowcaseProps> = () => {
  return (
    <div className="relative w-full px-4 pb-[32px]">
      <h3 className="text-[18px] font-bold mt-[32px]">门店展示</h3>
      <div className="w-full h-[242px] mt-[20px]">
        <LazyImage
          src="/images/join/bg4-mobile.webp"
          alt="门店展示背景"
          className="w-full h-[242px]"
        />
      </div>
    </div>
  );
};

export default StoreShowcase;
