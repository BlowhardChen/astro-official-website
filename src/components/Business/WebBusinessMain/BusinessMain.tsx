import {useState, useEffect} from "react";
import ButtonGroup from "./ButtonGroup";
import LandTrusteeshipContent from "./LandTrusteeshipContent";
import LandCirculationContent from "./LandCirculationContent";

const BusinessMain = () => {
  const [activeButton, setActiveButton] = useState<boolean>(true);
  const [params, setParams] = useState<string>(window.location.search);

  useEffect(() => {
    const landType = new URLSearchParams(params).get("landType");
    setActiveButton(landType === "trusteeship");
  }, [params]);

  return (
    <main>
      {/* 第一屏 */}
      <div className="relative mt-[66px]">
        <img
          src={"/images/business/banner.webp"}
          className="h-[634px] w-full object-cover"
          alt="banner"
          loading="lazy"
        />
        <div className="text-white absolute left-1/2 top-[50%] -translate-x-1/2 -translate-y-1/2">
          <img
            src={"/images/business/banner-title.webp"}
            className="w-[432px] h-[76px]"
            alt="banner title"
            loading="lazy"
          />
        </div>
        <div className="text-white absolute left-1/2 bottom-0 -translate-x-1/2">
          <ButtonGroup
            client:load
            activeButton={activeButton}
            setActiveButton={setActiveButton}
          />
        </div>
      </div>

      {activeButton ? <LandTrusteeshipContent /> : <LandCirculationContent />}
    </main>
  );
};

export default BusinessMain;
