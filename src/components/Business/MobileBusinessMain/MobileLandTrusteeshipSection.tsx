import React from "react";

interface LandTrusteeshipSectionProps {
  title: string;
  description: string;
  services: string;
  benefits: string;
  imageSrc: string;
  imageAlt: string;
  isImageLeft: boolean;
  additionalInfo?: string;
}

const LandTrusteeshipSection: React.FC<LandTrusteeshipSectionProps> = ({
  title,
  description,
  services,
  benefits,
  imageSrc,
  imageAlt,
  isImageLeft,
  additionalInfo,
}) => (
  <div className="w-full mt-[16px]">
    <div className="w-full mt-[17px]">
      <div className="flex items-center relative">
        <div
          className="absolute bottom-[4px] w-[48px] h-[8px]"
          style={{
            background:
              "linear-gradient(90deg, rgba(2,164,53,0.7) 0%, rgba(2,164,53,0) 100%)",
          }}
        />
        <div className="text-base font-semibold">{title}</div>
      </div>
      <div className="mt-[10px] text-sm text-noteText2 leading-6">
        {description}
      </div>
      <div className="relative h-[5px] mt-[12px]">
        <div className="w-full h-[1px] bg-[#D8D8D8] zIndex-[-1]" />
        <div className="absolute w-[48px] h-[5px] top-[-1px] bg-primary" />
      </div>
      <div className="mt-[16px] text-sm text-noteText2 leading-6">
        服务内容包括
        <span className="text-titileText text-sm font-semibold">
          {services}
        </span>
        多个覆盖农业生产的环节；
      </div>
      <div className="text-sm text-noteText2 leading-6">
        地约在规定时间内完成生产环节中某项具体任务后、农户验收作业质量并照协议价格
        <span className="text-titileText text-sm font-semibold">
          {benefits}
        </span>
      </div>
      {additionalInfo && (
        <div className="text-sm text-noteText2 leading-6">{additionalInfo}</div>
      )}
    </div>

    {isImageLeft && (
      <div className="w-full h-[194px]">
        <img
          src={imageSrc}
          className="w-full h-[194px] object-cover rounded-md"
          alt={imageAlt}
          loading="lazy"
        />
      </div>
    )}
    {!isImageLeft && (
      <div className="w-full h-[194px] mt-[8px]">
        <img
          src={imageSrc}
          className="w-full h-[194px] object-cover rounded-md"
          alt={imageAlt}
          loading="lazy"
        />
      </div>
    )}
  </div>
);

export default LandTrusteeshipSection;
