import React from "react";
import MobileFeatureCard from "./MobileFeatureCard";

interface FeatureItem {
  iconSrc: string;
  title: string;
  description: string;
  customStyle?: React.CSSProperties;
}

interface FeatureCardListProps {
  features: FeatureItem[];
  className?: string;
  cardClassName?: string;
  gap?: string;
}

const FeatureCardList: React.FC<FeatureCardListProps> = ({
  features,
  className = "",
  cardClassName = "",
  gap = "16px",
}) => {
  return (
    <div
      className={`flex flex-wrap justify-between w-full mt-[29px] ${className}`}
      style={{gap}}
    >
      {features.map((feature, index) => (
        <div
          key={index}
          className="w-[calc(50%-8px)]" // 减去一半的间距
        >
          <MobileFeatureCard
            iconSrc={feature.iconSrc}
            title={feature.title}
            description={feature.description}
            style={feature.customStyle}
            className={cardClassName}
          />
        </div>
      ))}
    </div>
  );
};

export default FeatureCardList;
