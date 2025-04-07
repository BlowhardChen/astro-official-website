import React from "react";

interface FeatureCardProps {
  iconSrc: string;
  title: string;
  description: string;
  className?: string;
  style?: React.CSSProperties;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  iconSrc,
  title,
  description,
  className = "",
  style,
}) => {
  return (
    <div
      className={`flex flex-col items-center justify-start w-full h-full p-4 bg-white rounded-lg shadow-md ${className}`}
      style={style}
    >
      <img
        src={iconSrc}
        className="w-8 h-8 object-contain"
        alt={title}
        loading="lazy"
      />
      <h3 className="text-base font-semibold mt-3 text-center">{title}</h3>
      <p className="text-sm text-gray-600 mt-2 text-center leading-tight">
        {description}
      </p>
    </div>
  );
};

export default FeatureCard;
