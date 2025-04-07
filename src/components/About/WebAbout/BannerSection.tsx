import React from "react";

const BannerSection = () => {
  return (
    <div className="relative mt-[66px]">
      <img
        src={"/images/about/banner.webp"}
        className="h-[634px] w-full object-cover"
        alt="bg-1"
        loading="lazy"
      />
    </div>
  );
};

export default BannerSection;
