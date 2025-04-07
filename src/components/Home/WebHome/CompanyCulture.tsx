const CultureItem = ({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) => (
  <div className="flex items-center px-[32px] w-[383px] h-[145px] bg-white shadow-lg rounded-lg">
    <img
      src={icon}
      className="w-[66px] h-[66px] object-cove mt-[-8px] rounded"
      alt={title}
      loading="lazy"
    />
    <div className="ml-[24px]">
      <div className="text-[24px] font-semibold">{title}</div>
      <div className="text-xl text-noteText2 mt-[8px]">{description}</div>
    </div>
  </div>
);

const CompanyCulture = () => {
  const cultures = [
    {
      icon: "/images/home/icon-company-1.webp",
      title: "初心使命",
      description: "地约用心，种地省心",
    },
    {
      icon: "/images/home/icon-company-2.webp",
      title: "愿景理念",
      description: "地尽其力，地利共享",
    },
    {
      icon: "/images/home/icon-company-3.webp",
      title: "价值观",
      description: "诚信实干，为农谋利",
    },
    {
      icon: "/images/home/icon-company-4.webp",
      title: "经营目标",
      description: "降成本，多打粮，种好地",
    },
  ];

  return (
    <div className="absolute left-1/2 transform -translate-x-1/2 top-[610px] overflow-hidden">
      <span className="text-3xl font-bold">企业文化</span>
      <div className="flex mt-[29px] gap-[16px]">
        {cultures.map((item, index) => (
          <CultureItem key={index} {...item} />
        ))}
      </div>
    </div>
  );
};
export default CompanyCulture;
