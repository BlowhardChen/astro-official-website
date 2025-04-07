import React from "react";
import MobileServiceCard from "./MobileServiceCard";

interface ServiceItem {
  imageSrc: string;
  title: string;
  description: string;
  linkUrl: string;
  linkText?: string;
}

interface ServiceCardListProps {
  services: ServiceItem[];
  className?: string;
  gap?: string;
}

const ServiceCardList: React.FC<ServiceCardListProps> = ({
  services,
  className = "",
  gap = "8px",
}) => {
  return (
    <div className={`${className}`} style={{gap}}>
      {services.map((service, index) => (
        <MobileServiceCard
          key={index}
          imageSrc={service.imageSrc}
          title={service.title}
          description={service.description}
          linkUrl={service.linkUrl}
          linkText={service.linkText}
        />
      ))}
    </div>
  );
};

export default ServiceCardList;
