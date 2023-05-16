import { useState, useEffect } from "react";
import Subscribes from "../Subscribes/Subscribes";

const Switcher = ({ text, on, onClick }) => {
  return (
    <div className="flex mx-auto w-[343px] mt-[16px] text-h5 xl:w-[928px]">
      <div
        className={`absolute inline-flex items-center justify-center w-[32px] h-[16px]  ${
          on ? "bg-[#316FEE]" : "bg-[#EEEEEE]"
        } rounded-full cursor-pointer`}
        onClick={onClick}
      >
        <span
          className={`absolute left-0 inline-block h-[16px] w-[16px] bg-white rounded-full shadow-md transform transition-transform ${
            on ? "translate-x-full" : ""
          } `}
        ></span>
      </div>
      <div className="relative ml-[40px] mt-[-3px] md:ml-[] md:mt-[] ">
        {text}
      </div>
    </div>
  );
};

function SubscribesAll({ submitSubscribe }) {
  // const [screenSize, setScreenSize] = useState(window.innerWidth);
  const [onAll, setAllOn] = useState(false);

  const handleClick = () => {
    setAllOn(!onAll);
  };

  useEffect(() => {
    setAllOn(submitSubscribe ? false : onAll);
  }, [submitSubscribe, onAll]);

  return (
    <>
      <Switcher
        text="Подписаться на все рассылки"
        on={onAll}
        onClick={handleClick}
      />
      <Subscribes statusAll={onAll} subscribesDone={submitSubscribe} />
    </>
  );
}

export default SubscribesAll;
