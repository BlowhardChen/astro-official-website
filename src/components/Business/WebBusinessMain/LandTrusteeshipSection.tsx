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
  <div className="flex w-full mt-[46px]">
    {isImageLeft && (
      <div className="w-[680px] h-[385px]">
        <img
          src={imageSrc}
          className="w-[680px] h-[385px] object-cover"
          alt={imageAlt}
          loading="lazy"
        />
      </div>
    )}

    <div
      className={`${isImageLeft ? "pl-[62px]" : "pr-[62px]"} mt-[17px] w-[844px]`}
    >
      <div className="flex items-center relative">
        <div
          className="absolute bottom-[4px] w-[108px] h-[12px]"
          style={{
            background:
              "linear-gradient(90deg, rgba(2,164,53,0.7) 0%, rgba(2,164,53,0) 100%)",
          }}
        />
        <div className="text-[28px] font-semibold">{title}</div>
      </div>
      <div className="mt-[10px] text-2xl text-noteText2 leading-10 font-normal">
        {description}
      </div>
      <div className="relative h-[5px] mt-[24px]">
        <div className="absolute w-[790px] h-[1px] bg-[#D8D8D8] top-[2px] zIndex-[-1]" />
        <div className="absolute w-[48px] h-[5px] bg-primary" />
      </div>
      <div className="mt-[25px] text-[22px] text-noteText2 leading-10">
        服务内容包括
        <span className="text-titileText font-semibold">{services}</span>
        多个覆盖农业生产的环节；
      </div>
      <div className="text-[22px] text-noteText2 leading-10">
        地约在规定时间内完成生产环节中某项具体任务后、农户验收作业质量并照协议价格
        <span className="text-titileText font-semibold">{benefits}</span>
      </div>
      {additionalInfo && (
        <div className="text-[22px] text-noteText2 leading-10">
          {additionalInfo}
        </div>
      )}
    </div>

    {!isImageLeft && (
      <div className="w-[680px] h-[385px]">
        <img
          src={imageSrc}
          className="w-[680px] h-[385px] object-cover"
          alt={imageAlt}
          loading="lazy"
        />
      </div>
    )}
  </div>
);

export default LandTrusteeshipSection;
