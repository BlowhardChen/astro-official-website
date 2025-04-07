import React from "react";
import HonorCard from "./HonorCard";

const honorItems = [
  {
    image: "/images/home/img-aptitude-1.webp",
    title: "中关村高新技术企业",
  },
  {
    image: "/images/home/img-aptitude-2.webp",
    title: "圣丰集团优秀合作商称号",
  },
  {
    image: "/images/home/img-aptitude-3.webp",
    title: "计算机软件著作权",
  },
  {
    image: "/images/home/img-aptitude-4.webp",
    title: "北京亦庄创新创业大赛",
  },
];

const HonorsSection = () => {
  return (
    <div className="relative h-[448px] w-full overflow-hidden" id="honor">
      <img
        src={"/images/home/bg-4.webp"}
        className="h-[448px] w-full object-cover"
        alt="bg-4"
        loading="lazy"
      />
      <div className="absolute left-1/2 transform -translate-x-1/2 top-[20px] overflow-hidden">
        <span className="text-3xl font-bold">荣誉资质</span>
        <div className="flex mt-[24px]">
          {honorItems.map((item, index) => (
            <HonorCard
              key={index}
              image={item.image}
              title={item.title}
              isFirst={index === 0}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HonorsSection;
