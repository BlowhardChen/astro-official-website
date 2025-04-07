import React from "react";
import styles from "./Timeline.module.css"; // 导入 CSS 模块

interface TimelineItem {
  year: string;
  title: string;
  description: string;
}

const DevelopmentTimeline: React.FC = () => {
  const timelineData: TimelineItem[] = [
    {
      year: "2017年",
      title: "乡土科技",
      description: "乡土科技有限公司成立。",
    },
    {
      year: "2018年",
      title: "地约1.0上线",
      description: "地约平台1.0上线，同时启动单县分公司。",
    },
    {
      year: "2020年",
      title: "业务标准化",
      description: "地约平台托管、流转土地共计七千亩，完成业务标准化。",
    },
    {
      year: "2023年",
      title: "深圳研发中心",
      description:
        "乡土（深圳）科技有限公司成立，地约平台2.0上线，启动物联网设备研发。",
    },
    {
      year: "2024年",
      title: "连锁布局",
      description: "开启万店连锁布局，业务全面推向全国。",
    },
    {
      year: "2026年",
      title: "地约数字化",
      description: "完成地约农业数字化目标，初步实现智慧农业。",
    },
  ];

  return (
    <div className="w-full px-[16px] pt-[32px] pb-[18px]">
      <h2 className="text-xl font-bold mb-[22px]">发展历程</h2>
      {timelineData.map((item, index) => (
        <div
          key={index}
          className={`${styles.timelineItem} ${
            index === timelineData.length - 1 ? styles.lastItem : ""
          }`}
        >
          <div className={styles.contentWrapper}>
            <div className="flex items-start">
              <div className="flex ml-3">
                <p className={styles.yearText}>{item.year}</p>
                <div className="ml-3">
                  <p className={styles.titleText}>{item.title}</p>
                  <p className={styles.descriptionText}>{item.description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DevelopmentTimeline;
