const Banner = () => {
  return (
    <div className="relative mt-[66px]">
      <img
        src="/images/home/bg-1.webp"
        className="w-full object-cover h-[634px]"
        alt="bg-1"
        loading="lazy"
      />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center text-white text-2xl sm:text-3xl">
        <img
          src="images/home/icon-home-title.webp"
          className="w-[840px] h-[114px]"
          alt="title"
          loading="lazy"
          width={840}
          height={114}
        />
      </div>
    </div>
  );
};
export default Banner;
