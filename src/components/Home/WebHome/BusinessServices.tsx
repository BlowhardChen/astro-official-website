const ServiceSection = ({
  image,
  title,
  description,
  link,
  roundedSide,
}: {
  image: string;
  title: string;
  description: string;
  link: string;
  roundedSide: "left" | "right";
}) => (
  <div
    className={`flex mt-[29px] w-[786px] h-[306px] ${
      roundedSide === "left" ? "rounded-bl-[60px]" : "rounded-tr-[60px]"
    } bg-white p-[16px]`}
  >
    <div className="w-[301px] h-[274px]">
      <img
        src={image}
        className="w-full h-full object-cover"
        alt={title}
        loading="lazy"
      />
    </div>
    <div className="ml-[24px] mt-[16px] flex-1">
      <div className="text-[24px] font-semibold">{title}</div>
      <div className="text-xl text-noteText2 mt-[4px] leading-8">
        {description}
      </div>
      <div className="mt-[12px] border w-[132px] h-[44px] flex items-center justify-center border-primary">
        <a href={link}>
          <span className="text-base text-primary">了解更多 → </span>
        </a>
      </div>
    </div>
  </div>
);

const BusinessServices = () => {
  return (
    <div className="relative overflow-hidden w-full">
      <img
        src="images/home/bg-3.webp"
        className="h-[470px] w-full object-cove"
        alt="bg-3"
        loading="lazy"
      />
      <div className="absolute left-1/2 transform -translate-x-1/2 top-[40px]">
        <span className="text-3xl text-black/90 font-bold">公司业务</span>
        <div className="flex gap-[8px]">
          <ServiceSection
            image="images/home/bg-servie-1.webp"
            title="土地托管"
            description="农户在不流转土地经营权的条件下，将农业生产中的耕、种、防、收等全部或部分作业环节委托给地约县级公司或村镇加盟店完成的农业经营方式。可以充分发挥农业规模化、集约化、机械化生产和统一经营管理的优势…"
            link="/business?landType=trusteeship"
            roundedSide="left"
          />
          <ServiceSection
            image="images/home/bg-servie-2.webp"
            title="土地流转"
            description="土地流转实质就是农村土地经营权的转让，土地流转是指拥有土地承包经营权的农户通过转包、出租、转让、互换、入股等方式将土地经营权（使用权）转让给地约，农户不参与土地经营，除入股流转方式外，其他流转方式…"
            link="/business?landType=circulation"
            roundedSide="right"
          />
        </div>
      </div>
    </div>
  );
};
export default BusinessServices;
