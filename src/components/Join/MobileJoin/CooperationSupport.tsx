import React from "react";
import LazyImage from "./LazyImage";

interface Support {
  image: string;
  title: string;
}

interface CooperationSupportProps {}

const supports: Support[] = [
  {image: "/images/join/img2.webp", title: "产品支持"},
  {image: "/images/join/img3.webp", title: "运营支持"},
  {image: "/images/join/img4.webp", title: "市场支持"},
];

const CooperationSupport: React.FC<CooperationSupportProps> = () => {
  return (
    <div
      className="relative  w-full overflow-hidden px-4 pb-[12px]"
      id="support"
    >
      <h3 className="text-[18px] font-bold mt-[32px]">合作支持</h3>
      <div className="flex mt-[16px] gap-[16px]">
        {supports.map((item, index) => (
          <div
            key={index}
            className="flex-1 h-[100px] border rounded-lg flex flex-col items-center justify-center bg-white "
          >
            <LazyImage
              src={item.image}
              alt={item.title}
              className="w-[46px] h-[46px]"
            />
            <div className="text-sm font-bold mt-[6px] text-titileText">
              {item.title}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CooperationSupport;
