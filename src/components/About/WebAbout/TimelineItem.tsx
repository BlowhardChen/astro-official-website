import React from "react";

interface TimelineItemProps {
  year: string;
  title: string;
  description: string;
  isFirst: boolean;
}

const TimelineItem: React.FC<TimelineItemProps> = ({
  year,
  title,
  description,
  isFirst,
}) => {
  return (
    <div
      className={`relative flex flex-col items-center w-[220px] ${!isFirst ? "ml-[52px]" : ""}`}
    >
      <div className="relative top-[-6px] w-[12px] h-[12px] bg-primary rounded-full"></div>
      <div className="text-titileText text-2xl font-semibold">{year}</div>
      <div className="text-lg mt-[15px] font-semibold">{title}</div>
      <div className="text-noteText ext-base mt-[9px] text-center">
        {description}
      </div>
    </div>
  );
};

export default TimelineItem;
