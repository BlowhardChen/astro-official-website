import React from "react";
import MobileServiceCases from "./MobileServiceCases";

const LandCirculationContent: React.FC = () => (
  <>
    <div className="relative w-full px-[16px]">
      <h2 className="text-base font-bold mt-[24px]">土地流转</h2>
      <p className="mt-[6px] text-sm leading-6 text-noteText2">
        土地流转实质就是农村土地经营权的转让，土地流转是指拥有土地承包经营权的农户通过转包、出租、转让、互换、入股等方式将土地经营权（使用权）转让给地约，农户不参与土地经营，除入股流转方式外，其他流转方式中农户也均不参与分配转出土地的经营收益，仅获得土地流转费用。
      </p>
      <div className="mt-[10px] ">
        <img
          src={"/images/business/banner2-mobile.webp"}
          className="w-full h-[194px] object-cover rounded-md"
          alt="土地流转示例"
          loading="lazy"
        />
      </div>
    </div>

    <MobileServiceCases
      title="流转服务案例"
      caseUrl="/images/business/case-mobile-2.webp"
      cases={[
        {
          imageSrc: "/images/business/business-4-mobile.webp",
          title: "签订土地流转合同",
          description:
            "地约团队的同事正在与农户沟通并签订流转合同，测量地块亩数，并登记土地相关信息上传至平台留存，留存的土地数据也将对农户公开，农户可随时在APP上查看自己地块的相关信息。",
          isImageLeft: true,
          top: "24px",
          imgWidth: "130px",
          imgHeight: "206px",
        },
        {
          imageSrc: "/images/business/business-5-mobile.webp",
          title: "数智化技术管理土地",
          description:
            "地约用数智化系统来管控耕、种、管、收全流程，降低种植过程中的风险，增加粮食产量，提高种植收益。",
          isImageLeft: false,
          top: "16px",
          imgWidth: "130px",
          imgHeight: "142px",
        },
        {
          imageSrc: "/images/business/business-6-mobile.webp",
          title: "流转的大地块批量作业",
          description:
            "机耕团队正在大地块的进行收割作业，大地块的集中作业与管理，既保证了农户的收益，又在一定程度上降低了种植成本，提高了农业生产效率。",
          isImageLeft: true,
          top: "16px",
          imgWidth: "130px",
          imgHeight: "162px",
        },
      ]}
    />
  </>
);

export default LandCirculationContent;
