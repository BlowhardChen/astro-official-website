import React from "react";
import LazyImage from "./LazyImage";

interface ProspectAnalysisProps {}

const ProspectAnalysis: React.FC<ProspectAnalysisProps> = () => {
  return (
    <div className="relative w-full px-4">
      <h3 className="text-[18px] font-bold mt-[24px]">前景分析</h3>
      <div className="w-full mt-[16px] bg-white px-[12px] pb-[12px]">
        <div className="w-full h-[110px]">
          <LazyImage
            src="/images/join/img1.webp"
            alt="前景分析图片"
            className="w-full h-[110px]"
          />
        </div>
        <div className="w-full mt-[16px]">
          <span className="text-base font-bold">农业行业广阔天地大有可为</span>
          <div className="text-sm text-noteText2 mt-[8px]">
            国家作出了加快建设农业强国的战略部署，要求发展新型农业经营主体和社会服务，14.5亿亩粮食种植催生了万亿市场，种植发展前景可观，加上面临的人口老龄化、土地碎片化等突出问题，从而催生了土地流转、土地托管种植模式。
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProspectAnalysis;
