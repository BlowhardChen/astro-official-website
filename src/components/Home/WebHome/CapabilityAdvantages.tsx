const AdvantageItem = ({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) => (
  <div className="w-[516px] h-[295px] border rounded-lg bg-black/12 flex flex-col items-center pt-[20px] px-[70px]">
    <img
      src={icon}
      className="w-[100px] h-[100px]"
      alt={title}
      loading="lazy"
    />
    <div className="mt-[10px] text-2xl font-semibold">{title}</div>
    <div className="mt-[16px] text-xl text-black/50 text-center">
      {description}
    </div>
  </div>
);

const CapabilityAdvantages = () => {
  const advantages = [
    {
      icon: "/images/home/icon-advantage-1.webp",
      title: "集团供应链集采",
      description: "通过集团供应链集采，为客户提供优质低价的大牌农资",
    },
    {
      icon: "/images/home/icon-advantage-2.webp",
      title: "数智化技术",
      description: "通过数字化改造农机农艺结合，能提供标准化的服务能力",
    },
    {
      icon: "/images/home/icon-advantage-3.webp",
      title: "强大的服务团队",
      description: "强大的服务团队和农业产业链，为农业生产保驾护航",
    },
  ];

  return (
    <div className="relative h-[448px] w-full overflow-hidden">
      <div className="absolute left-1/2 transform -translate-x-1/2 mt-[40px]">
        <span className="text-3xl text-black/90 font-bold">能力优势</span>
        <div className="flex mt-[29px] gap-[16px]">
          {advantages.map((item, index) => (
            <AdvantageItem key={index} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default CapabilityAdvantages;
