import React from "react";
import LazyImage from "./LazyImage";

interface Condition {
  icon: string;
  text: string;
}

interface JoinConditionsProps {}

const conditions: Condition[] = [
  {
    icon: "/images/join/icon1.webp",
    text: "无犯罪记录，个人及企业银行信用记录良好",
  },
  {
    icon: "/images/join/icon2.webp",
    text: "有志在农业种植行业长远发展，并渴望获得成功",
  },
  {
    icon: "/images/join/icon3.webp",
    text: "接受我们的商业模式，并认可我们的目标和宗旨",
  },
  {
    icon: "/images/join/icon4.webp",
    text: "有团队合作精神，能够积极与其他加盟成员友好合作",
  },
  {
    icon: "/images/join/icon5.webp",
    text: "有一定的资金实力及良好的人脉关系，熟悉和了解当地市场结构",
  },
  {
    icon: "/images/join/icon6.webp",
    text: "具有合法的营业执照或有能力组建公司和团队",
  },
];

const JoinConditions: React.FC<JoinConditionsProps> = () => {
  return (
    <div className="relative h-[388px] w-full overflow-hidden">
      <LazyImage
        src="/images/join/bg1.webp"
        alt="加盟条件背景"
        className="h-[388px] w-full object-cover"
      />
      <div className="absolute left-1/2 transform -translate-x-1/2 top-[38px] overflow-hidden">
        <span className="text-3xl text-titileText font-bold">加盟条件</span>
        <div className="w-[1581px] flex flex-wrap mt-[31px] gap-[16px]">
          {conditions.map((item, index) => (
            <div
              key={index}
              className="flex w-full sm:w-[calc(50%-8px)] md:w-[calc(33.333%-10.666px)] h-[108px] rounded-lg bg-white items-center px-[26px]"
            >
              <LazyImage
                src={item.icon}
                alt={`条件图标 ${index + 1}`}
                className="w-[46px] h-[46px]"
              />
              <span className="ml-[16px] text-noteText2 text-xl">
                {item.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JoinConditions;
