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
    <div className="relative w-full overflow-hidden">
      <LazyImage
        src="/images/join/bg1-mobile.webp"
        alt="加盟条件背景"
        className="h-[526px] w-full object-cover"
      />
      <div className="absolute top-0 left-0 overflow-hidden px-4">
        <h3 className="text-[18px] font-bold mt-[20px] text-titileText">
          加盟条件
        </h3>
        <div className="w-full mt-[10px] ">
          {conditions.map((item, index) => (
            <div
              key={index}
              className="flex w-full mt-[8px] px-[12px] py-[16px] rounded-lg bg-white items-center"
            >
              <LazyImage
                src={item.icon}
                alt={`条件图标 ${index + 1}`}
                className="w-[32px] h-[32px]"
              />
              <span className="ml-[12px] text-noteText2 text-sm">
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
