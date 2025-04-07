import React from "react";

interface HonorCardProps {
  image: string;
  title: string;
  isFirst: boolean;
}

const HonorCard: React.FC<HonorCardProps> = ({image, title, isFirst}) => {
  return (
    <div
      className={`flex flex-col items-center w-[383px] h-[314px] shadow-aptitude bg-white rounded-lg py-[20px] ${!isFirst ? "ml-[16px]" : ""}`}
    >
      <img src={image} className="object-cover" alt={title} loading="lazy" />
      <div className="text-xl text-titileText mt-[20px] font-bold">{title}</div>
    </div>
  );
};

export default HonorCard;
