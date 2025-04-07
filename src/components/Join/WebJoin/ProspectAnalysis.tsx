import React from "react";
import LazyImage from "./LazyImage";

interface ProspectAnalysisProps {}

const ProspectAnalysis: React.FC<ProspectAnalysisProps> = () => {
  return (
    <div className="relative w-full h-[480px] bg-white">
      <div className="absolute left-1/2 transform -translate-x-1/2 top-0 overflow-hidden">
        <div className="text-3xl font-bold mt-[40px]">前景分析</div>
        <div className="w-full flex mt-[30px]">
          <div className="w-[855px] h-[358px] mr-[52px]">
            <LazyImage
              src="/images/join/img1.webp"
              alt="前景分析图片"
              className="w-[855px] h-[358px]"
            />
          </div>
          <div className="w-[673px] mt-[66px]">
            <span className="text-[28px] font-medium">
              农业行业广阔天地大有可为
            </span>
            <div className="text-xl text-noteText2 mt-[14px]">
              国家作出了加快建设农业强国的战略部署，要求发展新型农业经营主体和社会服务，14.5亿亩粮食种植催生了万亿市场，种植发展前景可观，加上面临的人口老龄化、土地碎片化等突出问题，从而催生了土地流转、土地托管种植模式。
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProspectAnalysis;
