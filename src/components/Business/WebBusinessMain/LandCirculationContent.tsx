import ServiceCases from "./ServiceCases";

const LandCirculationContent = () => (
  <>
    <div className="relative w-full h-[668px] overflow-hidden">
      <div className="absolute w-[1580px] left-1/2 transform -translate-x-1/2 top-[80px]">
        <h2 className="text-3xl font-bold">土地流转</h2>
        <p className="text-2xl text-titileText leading-10 mt-[20px]">
          土地流转实质就是农村土地经营权的转让，土地流转是指拥有土地承包经营权的农户通过转包、出租、转让、互换、入股等方式将土地经营权（使用权）转让给地约，农户不参与土地经营，除入股流转方式外，其他流转方式中农户也均不参与分配转出土地的经营收益，仅获得土地流转费用。
        </p>
        <div className="mt-[30px]">
          <img
            src={"/images/business/banner2.webp"}
            className="w-[1580px] h-[416px] object-cover"
            alt="土地流转示例"
            loading="lazy"
          />
        </div>
      </div>
    </div>

    <ServiceCases
      title="流转服务案例"
      cases={[
        {
          imageSrc: "/images/business/business-4.webp",
          title: "签订土地流转合同",
          description:
            "地约团队的同事正在与农户沟通并签订流转合同，测量地块亩数，并登记土地相关信息上传至平台留存，留存的土地数据也将对农户公开，农户可随时在APP上查看自己地块的相关信息。",
          isImageLeft: true,
        },
        {
          imageSrc: "/images/business/business-5.webp",
          title: "数智化技术管理土地",
          description:
            "地约用数智化系统来管控耕、种、管、收全流程，降低种植过程中的风险，增加粮食产量，提高种植收益。",
          isImageLeft: false,
        },
        {
          imageSrc: "/images/business/business-6.webp",
          title: "流转的大地块批量作业",
          description:
            "机耕团队正在大地块的进行收割作业，大地块的集中作业与管理，既保证了农户的收益，又在一定程度上降低了种植成本，提高了农业生产效率。",
          isImageLeft: true,
        },
      ]}
    />
  </>
);

export default LandCirculationContent;
