import React from "react";

interface ServiceCardProps {
  imageSrc: string;
  title: string;
  description: string;
  linkUrl: string;
  linkText?: string;
  roundedSide?: "left" | "right";
  className?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  imageSrc,
  title,
  description,
  linkUrl,
  linkText = "了解更多",
  className = "",
}) => {
  return (
    <div
      className={`w-full bg-white p-[12px] rounded-lg mb-[8px] ${className}`}
      style={{
        borderImage:
          "linear-gradient(140deg, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0)) 0 0;",
        backdropFilter: "blur(0px)",
      }}
    >
      <div className="h-[125px]">
        <img
          src={imageSrc}
          className="w-full h-full object-cover"
          alt={title}
          loading="lazy"
        />
      </div>
      <div className="mt-[14px] flex-1">
        <div className="text-base font-semibold">{title}</div>
        <div className="text-sm text-noteText2 mt-[4px] leading-5">
          {description}{" "}
          <a href={linkUrl}>
            <span className="text-sm text-primary">{linkText}</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
