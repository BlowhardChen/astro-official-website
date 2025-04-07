import React from "react";

interface ButtonGroupProps {
  activeButton: boolean;
  setActiveButton: (value: boolean) => void;
  "client:load"?: boolean; // 添加这行
}

const ButtonGroup: React.FC<ButtonGroupProps> = (props) => {
  const { activeButton, setActiveButton } = props;

  return (
    <div className="text-white absolute left-1/2 bottom-0 -translate-x-1/2">
      <div className="flex">
        <div
          onClick={() => setActiveButton(true)}
          className={`button1 flex w-[790px] h-[62px] text-2xl text-white text-center justify-center items-center cursor-pointer ${
            activeButton ? "bg-primary" : "bg-white/[0.3]"
          }`}
        >
          土地托管
        </div>
        <div
          onClick={() => setActiveButton(false)}
          className={`button2 flex w-[790px] h-[62px] text-2xl text-white text-center justify-center items-center cursor-pointer ${
            activeButton ? "bg-white/[0.3]" : "bg-primary"
          }`}
        >
          土地流转
        </div>
      </div>
    </div>
  );
};

export default ButtonGroup;
