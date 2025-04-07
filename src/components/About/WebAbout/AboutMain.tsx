import BannerSection from "./BannerSection";
import CompanyProfileSection from "./CompanyProfileSection";
import CompanyCultureSection from "./CompanyCultureSection";
import DevelopmentTimelineSection from "./DevelopmentTimelineSection";
import HonorsSection from "./HonorsSection";

const AboutMain = () => {
  return (
    <main>
      <BannerSection />
      <div className="relative w-full h-[885px]">
        <img
          src={"/images/home/bg-2.webp"}
          className="h-[885px] w-full object-cover"
          alt="bg-2"
          loading="lazy"
        />
        <CompanyProfileSection />
        <CompanyCultureSection />
      </div>
      <DevelopmentTimelineSection />
      <HonorsSection />
    </main>
  );
};

export default AboutMain;
