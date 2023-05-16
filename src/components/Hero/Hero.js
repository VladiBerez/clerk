import { useState, useEffect } from "react";

function Hero() {
    const [screenSize, setScreenSize] = useState(window.innerWidth);
    const handleResize = () => {
        setScreenSize(window.innerWidth)
      };

    useEffect(() => {
    window.addEventListener('resize', handleResize);

    return() => {
        window.removeEventListener('resize', handleResize)
    }
    }, []);
    return(
        <div className='flex justify-center mt-[9px] md:mt-[25px] '>
          {screenSize < [768] ? (
            <div className="text-h2 font-medium ">
              Подписки «Клерка» 
            </div>
          ) : (
            <div className="text-h1 font-medium ">
              Подписки «Клерка»
            </div>
          )}
        </div>
    )
}

export default Hero;