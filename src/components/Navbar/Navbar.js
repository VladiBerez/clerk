import { useState } from "react";

function Navbar() {
  const [activeLink, setActiveLink] = useState("Рассылки");

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <div className="flex flex-row justify-center mt-[24px] ">
      <button
        className={`px-[8px] pb-[14px] mr-[16px] text-h6 md:pb-[16px] ${
          activeLink === "Рассылки"
            ? "border-b border-[#5A8CF1] border-b-2 text-[#5A8CF1] font-medium"
            : ""
        }`}
        onClick={() => handleLinkClick("Рассылки")}
      >
        Рассылки
      </button>
      <button
        className={`px-[8px] pb-[14px] mr-[16px] text-h6 md:pb-[16px] ${
          activeLink === "Соцсети"
            ? "border-b border-[#5A8CF1] border-b-2 text-[#5A8CF1] font-medium "
            : ""
        }`}
        onClick={() => handleLinkClick("Соцсети")}
      >
        Соцсети
      </button>
      <button
        className={`px-[8px] pb-[14px] text-h6 md:pb-[16px] ${
          activeLink === "Мессенджеры"
            ? "border-b border-[#5A8CF1] border-b-2 text-[#5A8CF1] font-medium "
            : ""
        }`}
        onClick={() => handleLinkClick("Мессенджеры")}
      >
        Мессенджеры
      </button>
    </div>
  );
}

export default Navbar;
