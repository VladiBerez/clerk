import { useState, useEffect } from "react";
import SubscribesAll from "../SubscribesAll";
import EmailSubmit from "../../assets/MailSubmit.png";

function EmailSubscribe() {
  const [screenSize, setScreenSize] = useState(window.innerWidth);
  const [email, setEmail] = useState("");
  const [isInputFocused, setIsInputFocused] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleScreenSize = () => {
    setScreenSize(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleScreenSize);

    return () => {
      window.removeEventListener("resize", handleScreenSize);
    };
  }, []);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleInputFocus = () => {
    setIsInputFocused(true);
  };

  const handleInputBlur = () => {
    setIsInputFocused(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmail("");
    setIsSubscribed(true);
    setTimeout(() => {
      setIsSubscribed(false);
    }, 3000);
  };

  return (
    <>
      <div className="flex justify-center mx-auto w-[343px]  text-start font-medium text-[20px] pt-[32px] md:w-[582px] md:pt-[48px] md:text-[23px] md:text-center">
        Выберите рассылки, которые подходят именно вам
      </div>
      <div className="flex flex-row justify-center items-center">
        <form
          onSubmit={handleSubmit}
          className="flex flex-row items-center mt-[16px] lg:mx-[48px] lg:mt-[24px]"
        >
          <label htmlFor="email" className="sr-only">
            Email
          </label>
          <div className="relative w-full max-w-sm lg:max-w-full">
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
              onFocus={handleInputFocus}
              onBlur={handleInputBlur}
              className="relative w-[343px] h-[56px] border border-gray-400 rounded-l-[2000px] rounded-r-full focus:outline-none focus:pl-4 focus:ml-[0px] xl:w-[928px] focus:ml-[10px]"
              required
            />
            {!isInputFocused && !email && (
              <label
                htmlFor="email"
                className="absolute top-4 left-4 text-[16px] text-[#666666]"
              >
                Электронная почта
              </label>
            )}
            {screenSize < [1680] ? (
              <button
                type="submit"
                className="absolute right-[0px] w-[56px] h-[56px] text-white bg-[#316FEE] rounded-full focus:outline-none rounded-full"
              >
                <img src={EmailSubmit} alt="submit" className="mx-auto" />
              </button>
            ) : (
              <button
                type="submit"
                className="absolute right-[0px] w-[56px] h-[56px] text-white bg-[#316FEE] rounded-full focus:outline-none rounded-full xl:w-[163px] xl:h-[56px] xl:text-[16px] xl:text-[#FFFFFF]"
              >
                Подписаться
              </button>
            )}
          </div>
        </form>
        {isSubscribed && (
          <div className="absolute top-0 left-0 z-50 flex items-center justify-center w-screen h-screen">
            <div className="relative px-6 py-4 text-lg font-medium text-white bg-[#316FEE] rounded-lg">
              Вы подписались!
            </div>
          </div>
        )}
      </div>
      <SubscribesAll submitSubscribe={isSubscribed} />
    </>
  );
}

export default EmailSubscribe;
