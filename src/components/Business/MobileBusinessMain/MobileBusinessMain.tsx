import {useState, useEffect} from "react";
import BannerSection from "./MobileBannerSection";
import LandTrusteeshipContent from "./MobileLandTrusteeshipContent"; // 土地托管
import LandCirculationContent from "./MobileLandCirculationContent"; // 土地流转

const BusinessMain = () => {
  const [activeButton, setActiveButton] = useState<boolean>(true);
  const [params, setParams] = useState<string>(window.location.search);

  useEffect(() => {
    const landType = new URLSearchParams(params).get("landType");
    setActiveButton(landType === "trusteeship");
  }, [params]);

  return (
    <main className="bg-[#F5F6F8]">
      <BannerSection
        activeButton={activeButton}
        setActiveButton={setActiveButton}
      />
      {activeButton ? <LandTrusteeshipContent /> : <LandCirculationContent />}
    </main>
  );
};

export default BusinessMain;
