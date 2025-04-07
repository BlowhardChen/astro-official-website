import React from "react";

interface AdvantageCardProps {
  iconSrc: string;
  title: string;
  description: string;
  className?: string;
  iconSize?: string;
  titleSize?: string;
  descriptionSize?: string;
}

const AdvantageCard: React.FC<AdvantageCardProps> = ({
  iconSrc,
  title,
  description,
  className = "",
  iconSize = "w-[60px] h-[60px]",
  titleSize = "text-base",
  descriptionSize = "text-sm",
}) => {
  return (
    <div
      className={`w-full h-[102px] border rounded-lg bg-black/12 flex flex-row items-center mb-[8px] pl-[15px] pr-[12px] ${className}`}
    >
      <img
        src={iconSrc}
        className={`${iconSize} object-cover`}
        alt={title}
        loading="lazy"
      />
      <div className={`ml-[15px]`}>
        <div className={`${titleSize} font-semibold`}>{title}</div>
        <div className={`mt-[8px] ${descriptionSize} text-black/50 text-left`}>
          {description}
        </div>
      </div>
    </div>
  );
};

export default AdvantageCard;
