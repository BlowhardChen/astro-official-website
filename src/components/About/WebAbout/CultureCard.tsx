import React from "react";

interface CultureCardProps {
  icon: string;
  title: string;
  description: string;
  isFirst: boolean;
}

const CultureCard: React.FC<CultureCardProps> = ({
  icon,
  title,
  description,
  isFirst,
}) => {
  return (
    <div
      className={`flex items-center px-[32px] w-[383px] h-[145px] bg-white shadow-lg rounded-lg ${!isFirst ? "ml-[16px]" : ""}`}
    >
      <img
        src={icon}
        className="w-[66px] h-[66px] object-cove mt-[-8px] rounded"
        alt={title}
        loading="lazy"
      />
      <div className="ml-[24px]">
        <div className="text-[24px] font-semibold">{title}</div>
        <div className="text-xl text-noteText2 mt-[8px]">{description}</div>
      </div>
    </div>
  );
};

export default CultureCard;
