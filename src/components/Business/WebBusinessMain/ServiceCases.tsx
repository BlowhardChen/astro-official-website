import React from "react";

interface ServiceCase {
  imageSrc: string;
  title: string;
  description: string;
  isImageLeft: boolean;
}

interface ServiceCasesProps {
  title: string;
  cases: ServiceCase[];
}

const ServiceCases: React.FC<ServiceCasesProps> = ({title, cases}) => (
  <div className="relative w-full h-[1620px] overflow-hidden">
    <div className="absolute left-1/2 transform -translate-x-1/2 top-[86px]">
      <div className="flex w-[1453px] justify-between items-center">
        <img
          src={"/images/business/title-bg-left.webp"}
          className="w-[510px] h-[22px] object-cover"
          alt="title background left"
          loading="lazy"
        />
        <h2
          className="text-[60px]"
          style={{
            background:
              "linear-gradient(to bottom, #02A435 0%, rgba(2,164,53,0.4) 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          {title}
        </h2>
        <img
          src={"/images/business/title-bg-right.webp"}
          className="w-[510px] h-[22px] object-cover"
          alt="title background right"
          loading="lazy"
        />
      </div>

      {cases.map((caseItem, index) => (
        <div key={index} className={`flex mt-[46px] w-[1580px]`}>
          {caseItem.isImageLeft && (
            <img
              src={caseItem.imageSrc}
              className="w-[969px] h-[414px] object-cover"
              alt={caseItem.title}
              loading="lazy"
            />
          )}

          <div className="mt-[90px] pl-[50px] pr-[61px]">
            <h3 className="text-titileText text-[28px] font-semibold">
              {caseItem.title}
            </h3>
            <p className="mt-[16px] text-2xl text-noteText2 leading-9">
              {caseItem.description}
            </p>
          </div>

          {!caseItem.isImageLeft && (
            <img
              src={caseItem.imageSrc}
              className="w-[969px] h-[414px] object-cover"
              alt={caseItem.title}
              loading="lazy"
            />
          )}
        </div>
      ))}
    </div>
  </div>
);

export default ServiceCases;
