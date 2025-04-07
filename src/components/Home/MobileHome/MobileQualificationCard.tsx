import React from "react";

interface QualificationCardProps {
  imageSrc: string;
  title: string;
  className?: string;
  imageClassName?: string;
  titleClassName?: string;
  shadow?: boolean;
}

const QualificationCard: React.FC<QualificationCardProps> = ({
  imageSrc,
  title,
  className = "",
  imageClassName = "w-full h-[105px]", // 修改此处
  titleClassName = "",
  shadow = true,
}) => {
  return (
    <div
      className={`flex flex-col items-center flex-1 min-w-[45%]  // 核心修改
        bg-white rounded-lg p-[8px] ${
          shadow ? "shadow-aptitude" : ""
        } ${className}`}
    >
      <div className="w-full aspect-[152/105]">
        <img
          src={imageSrc}
          className={`object-cover w-full h-full ${imageClassName}`}
          alt={title}
          loading="lazy"
        />
      </div>
      <div
        className={`text-sm text-titileText mt-[10px] font-bold ${titleClassName}`}
      >
        {title}
      </div>
    </div>
  );
};

export default QualificationCard;
