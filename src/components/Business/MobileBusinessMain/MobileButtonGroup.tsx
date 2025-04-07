import React from "react";

interface MobileButtonGroupProps {
  activeButton: boolean;
  setActiveButton: (value: boolean) => void;
  "client:load"?: boolean;
}

const MobileButtonGroup: React.FC<MobileButtonGroupProps> = (props) => {
  const {activeButton, setActiveButton} = props;

  return (
    <div className="flex w-full">
      <div
        onClick={() => setActiveButton(true)}
        className={`flex-1 flex h-[40px] text-base text-white text-center justify-center items-center cursor-pointer ${
          activeButton ? "bg-primary" : "bg-white/[0.3]"
        }`}
      >
        土地托管
      </div>
      <div
        onClick={() => setActiveButton(false)}
        className={`flex-1 flex h-[40px] text-base text-white text-center justify-center items-center cursor-pointer ${
          activeButton ? "bg-white/[0.3]" : "bg-primary"
        }`}
      >
        土地流转
      </div>
    </div>
  );
};

export default MobileButtonGroup;
