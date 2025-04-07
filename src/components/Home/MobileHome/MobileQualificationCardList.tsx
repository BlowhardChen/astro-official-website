import React from "react";
import MobileQualificationCard from "./MobileQualificationCard";

interface QualificationItem {
  imageSrc: string;
  title: string;
}

interface QualificationCardListProps {
  qualifications: QualificationItem[];
  className?: string;
  gap?: string;
  wrap: boolean;
  cardClassName?: string;
}

const QualificationCardList: React.FC<QualificationCardListProps> = ({
  qualifications,
  className = "",
  wrap = true,
  gap = "7px", // 默认值改为 7px
}) => {
  return (
    <div
      className={`flex ${wrap ? "flex-wrap" : ""} ${className}`}
      style={{
        gap: gap,
        marginTop: "7px", // 添加顶部间距
        marginBottom: "7px", // 添加底部间距
      }}
    >
      {qualifications.map((qualification, index) => (
        <MobileQualificationCard
          key={index}
          imageSrc={qualification.imageSrc}
          title={qualification.title}
          className="flex-grow"
        />
      ))}
    </div>
  );
};

export default QualificationCardList;
