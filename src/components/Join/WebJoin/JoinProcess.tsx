import React from "react";
import LazyImage from "./LazyImage";

interface ProcessStep {
  title: string;
}

interface JoinProcessProps {}

const processSteps: ProcessStep[] = [
  {title: "合作咨询"},
  {title: "合作申请"},
  {title: "签订合同"},
  {title: "开始服务"},
];

const JoinProcess: React.FC<JoinProcessProps> = () => {
  return (
    <div className="relative h-[493px] w-full overflow-hidden" id="process">
      <LazyImage
        src="/images/join/bg2.webp"
        alt="加盟流程背景"
        className="h-[493px] w-full object-cover"
      />
      <div className="absolute left-1/2 transform -translate-x-1/2 top-0 overflow-hidden">
        <div className="text-3xl mt-[41px] font-bold">加盟流程</div>
        <div className="w-[1581px] mt-[46px] flex justify-between">
          {processSteps.map((step, index) => (
            <div
              key={index}
              className={`flex-1 text-center text-2xl text-titileText font-bold ${index % 2 === 1 ? "hidden" : ""}`}
            >
              {step.title}
            </div>
          ))}
        </div>
        <LazyImage
          src="/images/join/bg3.webp"
          alt="流程分隔图"
          className="w-[1581px] h-[234px] object-cover mt-[21px]"
        />
        <div className="flex mt-[19px] w-full justify-between">
          {processSteps.map((step, index) => (
            <div
              key={index}
              className={`flex-1 text-center ${index % 2 !== 1 ? "hidden" : ""}`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JoinProcess;
