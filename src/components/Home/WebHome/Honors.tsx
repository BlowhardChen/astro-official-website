const HonorItem = ({image, title}: {image: string; title: string}) => (
  <div className="flex flex-col items-center w-[383px] h-[314px] shadow-aptitude bg-white rounded-lg py-[20px]">
    <img src={image} className="object-cover" alt={title} loading="lazy" />
    <div className="text-[20px] text-titileText mt-[20px] font-bold">
      {title}
    </div>
  </div>
);

const Honors = () => {
  const honors = [
    {
      image: "/images/home/img-aptitude-1.webp",
      title: "中关村高新技术企业",
    },
    {
      image: "/images/home/img-aptitude-2.webp",
      title: "圣丰集团优秀合作商称号",
    },
    {
      image: "/images/home/img-aptitude-3.webp",
      title: "计算机软件著作权",
    },
    {
      image: "/images/home/img-aptitude-4.webp",
      title: "北京亦庄创新创业大赛",
    },
  ];

  return (
    <div className="relative h-[448px] w-full overflow-hidden">
      <img
        src="images/home/bg-4.webp"
        className="h-[448px] w-full object-cover"
        alt="bg-4"
        loading="lazy"
      />
      <div className="absolute left-1/2 transform -translate-x-1/2 top-[20px] overflow-hidden">
        <span className="text-3xl font-bold">荣誉资质</span>
        <div className="flex mt-[24px] gap-[16px]">
          {honors.map((item, index) => (
            <HonorItem key={index} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Honors;
