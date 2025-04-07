import React from "react";

interface ServiceCase {
  imageSrc: string;
  title: string;
  description: string;
  isImageLeft: boolean;
  top: string;
  imgWidth: string;
  imgHeight: string;
}

interface ServiceCasesProps {
  title: string;
  caseUrl: string;
  cases: ServiceCase[];
}

const ServiceCases: React.FC<ServiceCasesProps> = ({title, cases, caseUrl}) => (
  <div className="relative w-full px-[16px] bg-[#F5F6F8] pb-[16px]">
    <div className="flex w-full mt-[32px] justify-between items-center">
      <img
        src={caseUrl}
        className="w-full h-[20px] object-cover"
        alt="case"
        loading="lazy"
      />
    </div>

    {cases.map((caseItem, index) => (
      <div
        key={index}
        className={`flex mt-[${caseItem.top}] w-full bg-white rounded-lg bx-shadow-[0px 2px 8px 0px rgba(0,0,0,0.04)]`}
      >
        {caseItem.isImageLeft && (
          <img
            src={caseItem.imageSrc}
            className={`w-${caseItem.imgHeight} h-${caseItem.imgHeight} object-cover`}
            alt={caseItem.title}
            loading="lazy"
          />
        )}

        <div className="mt-[18px] ml-[10px]">
          <h3 className="text-titileText text-base font-semibold">
            {caseItem.title}
          </h3>
          <p className="mt-[8px] text-sm text-noteText2 leading-6 mr-[10px]">
            {caseItem.description}
          </p>
        </div>

        {!caseItem.isImageLeft && (
          <img
            src={caseItem.imageSrc}
            className={`w-${caseItem.imgHeight} h-${caseItem.imgHeight} object-cover`}
            alt={caseItem.title}
            loading="lazy"
          />
        )}
      </div>
    ))}
  </div>
);

export default ServiceCases;
