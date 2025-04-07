import React from "react";
import TimelineItem from "./TimelineItem";

const timelineItems = [
  {
    year: "2017年",
    title: "乡土科技",
    description: "乡土(北京)科技有限公司成立。",
  },
  {
    year: "2018年",
    title: "地约1.0上线",
    description: "地约平台1.0上线，同时启动单县分公司。",
  },
  {
    year: "2020年",
    title: "业务标准化",
    description: "地约平台托管、流转士地共计七千亩，完成业务标准化。",
  },
  {
    year: "2023年",
    title: "深圳研发中心",
    description:
      "乡土(深圳)科技有限公司成立，地约平台2.0上线，启动物联网设备研发",
  },
  {
    year: "2024年",
    title: "连锁布局",
    description: "开启万店连锁布局，业务全面推向全国。",
  },
  {
    year: "2026年",
    title: "地约数字化",
    description: "完成地约农业数字化目标，初步实现智慧农业",
  },
];

const DevelopmentTimelineSection = () => {
  return (
    <div className="relative h-[297px] w-full overflow-hidden">
      <img
        src={"/images/home/bg-5.webp"}
        className="h-[297px] w-full object-cover"
        alt="bg-5"
        loading="lazy"
      />
      <div className="absolute left-1/2 transform -translate-x-1/2 top-[20px] overflow-hidden">
        <span className="text-3xl font-bold">发展历程</span>
        <div className="border border-dashed h-[1px] w-full mt-[32px]"></div>
        <div className="w-full flex">
          {timelineItems.map((item, index) => (
            <TimelineItem
              key={index}
              year={item.year}
              title={item.title}
              description={item.description}
              isFirst={index === 0}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DevelopmentTimelineSection;
