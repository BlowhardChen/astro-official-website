import React from "react";
import CultureCard from "./CultureCard";

const cultureItems = [
  {
    icon: "/images/home/icon-company-1.webp",
    title: "初心使命",
    description: "地约用心，种地省心",
  },
  {
    icon: "/images/home/icon-company-2.webp",
    title: "愿景理念",
    description: "地尽其力，地利共享",
  },
  {
    icon: "/images/home/icon-company-3.webp",
    title: "价值观",
    description: "诚信实干，为农谋利",
  },
  {
    icon: "/images/home/icon-company-4.webp",
    title: "经营目标",
    description: "降成本，多打粮，种好地",
  },
];

const CompanyCultureSection = () => {
  return (
    <div
      className="absolute left-1/2 transform -translate-x-1/2 top-[610px] overflow-hidden"
      id="culture"
    >
      <span className="text-3xl font-bold">企业文化</span>
      <div className="flex mt-[29px]">
        {cultureItems.map((item, index) => (
          <CultureCard
            key={index}
            icon={item.icon}
            title={item.title}
            description={item.description}
            isFirst={index === 0}
          />
        ))}
      </div>
    </div>
  );
};

export default CompanyCultureSection;
