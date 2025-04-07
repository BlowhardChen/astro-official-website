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
      className="relative h-[425px] w-full overflow-hidden bg-white"
      id="support"
    >
      <div className="absolute left-1/2 transform -translate-x-1/2 top-[41px] overflow-hidden">
        <span className="text-3xl font-bold">合作支持</span>
        <div className="flex mt-[24px] gap-[16px]">
          {supports.map((item, index) => (
            <div
              key={index}
              className="w-[516px] h-[268px] border rounded-lg flex flex-col items-center p-6"
            >
              <LazyImage
                src={item.image}
                alt={item.title}
                className="w-[100px] h-[100px] mt-[54px]"
              />
              <div className="text-2xl font-bold mt-[6px] text-titileText">
                {item.title}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CooperationSupport;
