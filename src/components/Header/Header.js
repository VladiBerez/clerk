
import { useState, useEffect } from "react";

function Header() {
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
        <div className='flex flex-row justify-center text-h6 mt-[30px] md:mt-[42px] '>
          {screenSize < [768] ? (
            <a href='Главная' className='mr-[8px] text-grey'>Главная</a>
          ) : (
            <a href='Хлебные крошки' className='mr-[8px] text-grey'>Хлебные крошки</a>
          )}
          <div className='mr-[8px] text-grey'>&#x2192;</div>
          {screenSize < [768] ? (
            <a href='Рассылки' className='mr-[8px] text-grey'>Рассылки</a>
          ) : (
            <a href='Хлебные крошки' className='mr-[8px] text-grey'>Хлебные крошки</a>
          )}
          <div className='mr-[8px] text-grey'>&#x2192;</div>
          {screenSize < [768] ? (
            <a href='Хлебные крошки' className='mr-[8px] text-grey'>Хлебные крошки</a>
          ) : (
            <a href='Хлебные крошки' className='text-grey'>Хлебные крошки</a>
          )}
        </div>
    )
}
export default Header;