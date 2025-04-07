import React from "react";
import LazyImage from "./LazyImage";
import styles from "./JoinProcess.module.css";

interface ProcessStep {
  title: string;
  number: number;
}

interface JoinProcessProps {}

const processSteps1: ProcessStep[] = [
  {title: "合作咨询", number: 1},
  {title: "合作洽谈", number: 2},
  {title: "合作申请", number: 3},
  {title: "资质审核", number: 4},
];

const processSteps2: ProcessStep[] = [
  {title: "开始服务", number: 7},
  {title: "缴纳费用", number: 6},
  {title: "签订合同", number: 5},
];

const JoinProcess: React.FC<JoinProcessProps> = () => {
  return (
    <div className="relative h-[360px] w-full overflow-hidden" id="process">
      <LazyImage
        src="/images/join/bg2-mobile.webp"
        alt="bg2-mobile"
        className="h-[360px] w-full object-cover"
      />
      <div className="absolute w-full top-0 left-0 overflow-hidden px-4">
        <h3 className="text-[18px] mt-[32px] font-bold">加盟流程</h3>
        <div className="relative w-ful">
          <div className="relative z-10 w-full flex justify-between mt-[24px] pl-[12px] pr-[16px]">
            {processSteps1.map((step, index) => (
              <div className="flex flex-col items-center " key={index}>
                <p className="text-sm font-bold text-titileText">
                  {step.title}
                </p>
                <div
                  className="w-[32px] h-[32px] rounded-full bg-[#D9F2E1]  border-4 border-[#D9F2E1] mt-[8px] flex justify-center items-center text-white font-bold"
                  style={{
                    background:
                      "linear-gradient( 180deg, #05D165 0%, #02A435 100%)",
                  }}
                >
                  {step.number}
                </div>
                <div className="w-[3px] h-[25px] bg-[#D8D8D8]"></div>
                <div className="w-[18px] h-[18px] rounded-full border-2 border-white bg-[#02A435]"></div>
              </div>
            ))}
          </div>
          <div className="relative z-10 w-full flex justify-between mt-[24px] pl-[43px] pr-[56px] mt-[38px]">
            {processSteps2.map((step, index) => (
              <div className="flex flex-col items-center " key={index}>
                <div className="w-[18px] h-[18px] rounded-full border-2 border-white bg-[#02A435]"></div>
                <div className="w-[3px] h-[25px] bg-[#D8D8D8]"></div>
                <div
                  className="w-[32px] h-[32px] rounded-full bg-[#D9F2E1]  border-4 border-[#D9F2E1] flex justify-center items-center text-white font-bold"
                  style={{
                    background:
                      "linear-gradient( 180deg, #05D165 0%, #02A435 100%)",
                  }}
                >
                  {step.number}
                </div>
                <p className="text-sm font-bold text-titileText mt-[8px]">
                  {step.title}
                </p>
              </div>
            ))}
          </div>
          {/* 时间轴 */}
          <div className="absolute z-0 w-full top-[92px] lef-0 flex flex-col justify-center">
            <div className="relative">
              <div className="absolute top-[-4px] left-0 w-[13px] h-[13px] rounded-full bg-[#D8D8D8]"></div>
              <div className="w-full h-[3px] bg-[#D8D8D8]"></div>
            </div>
            <div className="w-full flex justify-end">
              <div className="w-[3px] h-[52px] bg-[#D8D8D8]"></div>
            </div>
            <div className="w-full relative h-[17px]">
              <div className="relative w-full h-[3px] bg-[#D8D8D8] zIndex-[-1]"></div>
              <div className={styles.box}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinProcess;
