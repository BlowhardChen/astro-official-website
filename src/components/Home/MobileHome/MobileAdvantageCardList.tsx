import React from "react";
import AdvantageCard from "./MobileAdvantageCard";

interface AdvantageItem {
  iconSrc: string;
  title: string;
  description: string;
}

interface AdvantageCardListProps {
  advantages: AdvantageItem[];
  className?: string;
  gap?: string;
  cardClassName?: string;
}

const AdvantageCardList: React.FC<AdvantageCardListProps> = ({
  advantages,
  className = "",
  gap = "16px",
}) => {
  return (
    <div className={`mt-[16px] ${className}`} style={{gap}}>
      {advantages.map((advantage, index) => (
        <AdvantageCard
          key={index}
          iconSrc={advantage.iconSrc}
          title={advantage.title}
          description={advantage.description}
        />
      ))}
    </div>
  );
};

export default AdvantageCardList;
