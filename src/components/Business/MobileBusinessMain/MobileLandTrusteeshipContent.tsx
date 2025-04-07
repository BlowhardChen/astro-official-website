import React from "react";
import MobileLandTrusteeshipSection from "./MobileLandTrusteeshipSection";
import MobileServiceCases from "./MobileServiceCases";

const LandTrusteeshipContent: React.FC = () => (
  <>
    <div className="relative w-full px-[16px]">
      <h2 className="text-base font-bold mt-[24px]">土地托管</h2>
      <p className="mt-[6px] text-sm leading-6 text-noteText2">
        农户在不流转土地经营权的条件下，将农业生,将农业生产中的耕、种、防、收等全部或部分作业环节委托给地约县级公司或村镇加盟店完成的农业经营方式。可以充分发挥农业规模化、集约化、机械生产化和统一经营管理的优势，大幅度减少生产要素资源投入总量，提高农业生产效率，降低农业生产成本，提高农业产量，增加农户收入。
      </p>

      <MobileLandTrusteeshipSection
        title="半托管"
        description="半托管是指家中缺乏劳动力但是又不愿放弃地的农户，把农业生产过程中的部分消耗体力的环节委托给地约。"
        services="整地施底肥、种子、除草、追肥、一喷三防和病虫害防治、灌溉等"
        benefits="交纳相应的服务费，土地其余收益全部归农户所有。"
        imageSrc="/images/business/land-img-1-mobile.webp"
        imageAlt="半托管示例"
        isImageLeft={true}
      />

      <MobileLandTrusteeshipSection
        title="全托管"
        description="全托管是指地约替农户进行农业生产经营的全程管理"
        services="土地生产的全部过程委托给地约，"
        benefits="获取一定的土地种植收益，"
        additionalInfo="地约负责土地生产的从种到管、从技术服务到农业生产资料购买的一切事务。"
        imageSrc="/images/business/land-img-2-mobile.webp"
        imageAlt="全托管示例"
        isImageLeft={false}
      />
    </div>

    <MobileServiceCases
      title="托管服务案例"
      caseUrl="/images/business/case-mobile.webp"
      cases={[
        {
          imageSrc: "/images/business/business-1-mobile.webp",
          title: "帮农户测量托管地块",
          description:
            "地约团队的同事正在使用厘米级高精度手持RTK帮农户测量地块亩数",
          top: "24px",
          isImageLeft: true,
          imgWidth: "130px",
          imgHeight: "124px",
        },
        {
          imageSrc: "/images/business/business-2-mobile.webp",
          title: "为农户配送农资",
          description:
            "地约团队的同事正在使用地约APP帮农户下托管订单，配送种子和肥料，并帮农户完成拌种。",
          isImageLeft: false,
          top: "16px",
          imgWidth: "130px",
          imgHeight: "142px",
        },
        {
          imageSrc: "/images/business/business-3-mobile.webp",
          title: "帮农户托管的地块播种",
          description:
            "地约团队的同事配合机耕队完成播种作业，以及监督作业是否符合作业要求",
          isImageLeft: true,
          top: "16px",
          imgWidth: "130px",
          imgHeight: "124px",
        },
      ]}
    />
  </>
);

export default LandTrusteeshipContent;
