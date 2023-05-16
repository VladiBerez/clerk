import { useState, useEffect } from "react";
import firstPicture from "../../assets/First_notification.png";
import secondPicture from "../../assets/Second_notification.png";
import secondPictureMobile from "../../assets/Second_mobile.png";
import thirdPicture from "../../assets/Third_notification.png";
import thirdPictureMobile from "../../assets/Third_mobile.png";
import FourthPicture from "../../assets/Fourth_notification.png";
import FourthPictureMobile from "../../assets/Fourth_mobile.png";

// import fourthPicture from "";
import submit from "../../assets/submit.png";

const Switcher = ({ on, onClick }) => {
  return (
    <div className="flex mx-auto w-[343px] mt-[16px] text-h5 xl:w-[928px]">
      <div
        className={`absolute inline-flex items-center justify-center w-[48px] h-[24px]  ${
          on ? "bg-[#316FEE]" : "bg-[#EEEEEE]"
        } rounded-full cursor-pointer`}
        onClick={onClick}
      >
        <span
          className={`absolute left-0 inline-block h-[24px] w-[24px] bg-white rounded-full shadow-md transform transition-transform ${
            on ? "translate-x-full" : ""
          } `}
        ></span>
      </div>
    </div>
  );
};

function Subscribes({ statusAll, subscribesDone }) {
  const [screenSize, setScreenSize] = useState(window.innerWidth);
  const [subscribe, setSubscribe] = useState([false, false, false, false]);

  const handleOnSubscribe = (index) => {
    setSubscribe((prevSubscribes) => {
      const newSubscribes = [...prevSubscribes];
      newSubscribes[index] = !newSubscribes[index];
      return newSubscribes;
    });
  };

  const handleScreenSize = () => {
    setScreenSize(window.innerWidth);
  };

  useEffect(() => {
    setSubscribe((prevSubscribes) =>
      statusAll ? [true, true, true, true] : prevSubscribes
    );

    setSubscribe((prevSubscribes) =>
      subscribesDone ? [false, false, false, false] : prevSubscribes
    );

    window.addEventListener("resize", handleScreenSize);

    return () => {
      window.removeEventListener("resize", handleScreenSize);
    };
  }, [statusAll, subscribesDone]);

  return (
    <main className="flex mx-auto grid grid-cols-1 gap-[24px] p-[24px] xl:grid-cols-2 xl:pt-[32px] xl:pb-[48px]">
      <div
        className={`mx-auto w-[343px] h-[252px] rounded-xl bg-white ${
          subscribe[0] ? "shadow-lg" : ""
        } xl:w-[476px] xl:h-[244px]`}
      >
        {/* First block with two options
        it FIRST */}
        {screenSize < [1680] ? (
          <div className="mx-[16px] my-[24px]">
            <div className="flex flex-row justify-between">
              <div className="flex flex-col text-start">
                <div className="text-h6 text-[#999999]">Перед рассветом</div>
                <div className="text-h4 font-medium">Утренний бухгалтер</div>
              </div>
              <img
                src={firstPicture}
                alt="beforeRise"
                className="w-[40px] h-[40px]"
              />
            </div>
            <div className="text-h5 text-[#999999]">
              Самые важные новости и события за день. Кратко, по делу,
              структурировано.
            </div>
            <div className="flex flex-row items-center mt-[16px]">
              <img src={submit} alt="submit" className="h-[16px] w-[16px]" />
              <div className="text-h5 ml-[8px]">
                Новости для бухгалтеров, ИП и директора
              </div>
            </div>
            <div className="flex flex-row items-center mt-[8px]">
              <img src={submit} alt="submit" className="h-[16px] w-[16px]" />
              <div className="text-h5 ml-[8px]">Подборка статей за день</div>
            </div>
            <div className=" mt-[24px]">
              <Switcher
                on={subscribe[0]}
                onClick={() => handleOnSubscribe(0)}
              />
              <div className="text-h5 ml-[64px]">
                Уже получает 59 342 человек
              </div>
            </div>
          </div>
        ) : (
          // SECOND
          <div className="mx-[16px] my-[24px]">
            <div className="flex flex-row justify-between">
              <div className="flex flex-col w-[320px] text-start">
                <div className="text-h6 text-[#999999]">Перед рассветом</div>
                <div className="text-h4 font-medium">Утренний бухгалтер</div>
                <div className="text-h5 text-[#999999]">
                  Самые важные новости и события за день. Кратко, по делу,
                  структурировано.
                </div>
                <div className="flex flex-row items-center mt-[16px]">
                  <img
                    src={submit}
                    alt="submit"
                    className="h-[16px] w-[16px]"
                  />
                  <div className="text-h5 ml-[8px]">
                    Новости для бухгалтеров, ИП и директора
                  </div>
                </div>
                <div className="flex flex-row items-center mt-[8px]">
                  <img
                    src={submit}
                    alt="submit"
                    className="h-[16px] w-[16px]"
                  />
                  <div className="text-h5 ml-[8px]">
                    Подборка статей за день
                  </div>
                </div>
                <>
                  <Switcher
                    on={subscribe[0]}
                    onClick={() => handleOnSubscribe(0)}
                  />
                  <div className="text-h5 ml-[64px]">
                    Уже получает 59 342 человек
                  </div>
                </>
              </div>
              <img
                src={firstPicture}
                alt="beforeRise"
                className="w-[80px] h-[80px]"
              />
            </div>
          </div>
        )}
      </div>
      {/* Second Block with 2 options
      FIRST */}
      <div
        className={`mx-auto w-[343px] h-[272px] rounded-xl bg-white ${
          subscribe[1] ? "shadow-lg" : ""
        } xl:w-[476px] xl:h-[244px]`}
      >
        {screenSize < [1680] ? (
          <div className="mx-[16px] my-[24px]">
            <div className="flex flex-row justify-between">
              <div className="flex flex-col text-start">
                <div className="text-h6 text-[#999999]">После заката</div>
                <div className="text-h4 font-medium">Ночной бухгалтер</div>
              </div>
              <img
                src={secondPictureMobile}
                alt="beforeRise"
                className="w-[40px] h-[40px]"
              />
            </div>
            <div className="text-h5 text-[#999999]">
              Самая краткая газета о налогах и бухучете в мире — современная
              рассылка для вечернего чтения.
            </div>
            <div className="flex flex-row items-center mt-[16px]">
              <img src={submit} alt="submit" className="h-[16px] w-[16px]" />
              <div className="text-h5 ml-[8px]">
                Новости для бухгалтеров, ИП и директора
              </div>
            </div>
            <div className="flex flex-row items-center mt-[8px]">
              <img src={submit} alt="submit" className="h-[16px] w-[16px]" />
              <div className="text-h5 ml-[8px]">Подборка статей за день</div>
            </div>
            <div className=" mt-[24px]">
              <Switcher
                on={subscribe[1]}
                onClick={() => handleOnSubscribe(1)}
              />
              <div className="text-h5 ml-[64px]">
                Уже получает 59 342 человек
              </div>
            </div>
          </div>
        ) : (
          // SECOND
          <div className="mx-[16px] my-[24px]">
            <div className="flex flex-row justify-between">
              <div className="flex flex-col w-[320px] text-start">
                <div className="text-h6 text-[#999999]">Перед рассветом</div>
                <div className="text-h4 font-medium">Утренний бухгалтер</div>
                <div className="text-h5 text-[#999999]">
                  Самая краткая газета о налогах и бухучете в мире — современная
                  рассылка для чтения.
                </div>
                <div className="flex flex-row items-center mt-[16px]">
                  <img
                    src={submit}
                    alt="submit"
                    className="h-[16px] w-[16px]"
                  />
                  <div className="text-h5 ml-[8px]">
                    Анализ, оценка и только самое главное
                  </div>
                </div>
                <div className="flex flex-row items-center mt-[8px]">
                  <img
                    src={submit}
                    alt="submit"
                    className="h-[16px] w-[16px]"
                  />
                  <div className="text-h5 ml-[8px]">
                    Лучшие комменты юзеров в обзоре
                  </div>
                </div>
                <>
                  <Switcher
                    on={subscribe[1]}
                    onClick={() => handleOnSubscribe(1)}
                  />
                  <div className="text-h5 ml-[64px]">
                    Уже получает 37 480 человек
                  </div>
                </>
              </div>
              <img
                src={secondPicture}
                alt="beforeRise"
                className="w-[80px] h-[80px]"
              />
            </div>
          </div>
        )}
      </div>
      {/* THIRD BLOCK with 2 options
      FIRST */}
      <div
        className={`mx-auto w-[343px] h-[272px] rounded-xl bg-white ${
          subscribe[2] ? "shadow-lg" : ""
        } xl:w-[476px] xl:h-[244px]`}
      >
        {screenSize < [1680] ? (
          <div className="mx-[16px] my-[24px]">
            <div className="flex flex-row justify-between">
              <div className="flex flex-col text-start">
                <div className="text-h6 text-[#999999]">
                  По мере появления анонсов
                </div>
                <div className="text-h4 font-medium">Чемодан вебинаров</div>
              </div>
              <img
                src={thirdPictureMobile}
                alt="beforeRise"
                className="w-[40px] h-[40px]"
              />
            </div>
            <div className="text-h5 text-[#999999]">
              Подборка с анонсами бесплатных вебинаров на самые топовые темы при
              участии экспертов.
            </div>
            <div className="flex flex-row items-center mt-[16px]">
              <img src={submit} alt="submit" className="h-[16px] w-[16px]" />
              <div className="text-h5 ml-[8px]">
                Акции и скидки от лидеров рынка
              </div>
            </div>
            <div className="flex flex-row items-center mt-[8px]">
              <img src={submit} alt="submit" className="h-[16px] w-[16px]" />
              <div className="text-h5 ml-[8px]">
                Те, кто подписался – экономят много денег 🤑
              </div>
            </div>
            <div className=" mt-[24px]">
              <Switcher
                on={subscribe[2]}
                onClick={() => handleOnSubscribe(2)}
              />
              <div className="text-h5 ml-[64px]">
                Уже получает 59 342 человек
              </div>
            </div>
          </div>
        ) : (
          // SECOND
          <div className="mx-[16px] my-[24px]">
            <div className="flex flex-row justify-between">
              <div className="flex flex-col w-[320px] text-start">
                <div className="text-h6 text-[#999999]">Раз в две недели</div>
                <div className="text-h4 font-medium">Ножницы скидок</div>
                <div className="text-h5 text-[#999999]">
                  Подборка самых выгодных и полезных спецпредложений от надежных
                  компаний.
                </div>
                <div className="flex flex-row items-center mt-[16px]">
                  <img
                    src={submit}
                    alt="submit"
                    className="h-[16px] w-[16px]"
                  />
                  <div className="text-h5 ml-[8px]">
                    Акции и скидки от лидеров рынка
                  </div>
                </div>
                <div className="flex flex-row items-center mt-[8px]">
                  <img
                    src={submit}
                    alt="submit"
                    className="h-[16px] w-[16px]"
                  />
                  <div className="text-h5 ml-[8px]">
                    Те, кто подписался – экономят много денег
                  </div>
                </div>
                <>
                  <Switcher
                    on={subscribe[2]}
                    onClick={() => handleOnSubscribe(2)}
                  />
                  <div className="text-h5 ml-[64px]">
                    Уже получает 92 118 человек
                  </div>
                </>
              </div>
              <img
                src={thirdPicture}
                alt="beforeRise"
                className="w-[80px] h-[80px]"
              />
            </div>
          </div>
        )}
      </div>
      {/* FOURTH BLOCK with 2 options
      FIRST */}
      <div
        className={`mx-auto w-[343px] h-[272px] rounded-xl bg-white ${
          subscribe[3] ? "shadow-lg" : ""
        } xl:w-[476px] xl:h-[244px]`}
      >
        {screenSize < [1680] ? (
          <div className="mx-[16px] my-[24px]">
            <div className="flex flex-row justify-between">
              <div className="flex flex-col text-start">
                <div className="text-h6 text-[#999999]">
                  По мере появления анонсов
                </div>
                <div className="text-h4 font-medium">Чемодан вебинаров</div>
              </div>
              <img
                src={FourthPictureMobile}
                alt="beforeRise"
                className="w-[40px] h-[40px]"
              />
            </div>
            <div className="text-h5 text-[#999999]">
              Подборка с анонсами бесплатных вебинаров на самые топовые темы при
              участии экспертов.
            </div>
            <div className="flex flex-row items-center mt-[16px]">
              <img src={submit} alt="submit" className="h-[16px] w-[16px]" />
              <div className="text-h5 font-medium ml-[8px]">
                Никогда не пришлем платные вебинары
              </div>
            </div>
            <div className="flex flex-row items-center mt-[8px]">
              <img src={submit} alt="submit" className="h-[16px] w-[16px]" />
              <div className="text-h5 ml-[8px]">
                Подборка топовых тем для вебинаров
              </div>
            </div>
            <div className=" mt-[24px]">
              <Switcher
                on={subscribe[3]}
                onClick={() => handleOnSubscribe(3)}
              />
              <div className="text-h5 ml-[64px]">
                Уже получает 92 082 человек
              </div>
            </div>
          </div>
        ) : (
          // SECOND
          <div className="mx-[16px] my-[24px]">
            <div className="flex flex-row justify-between">
              <div className="flex flex-col w-[320px] text-start">
                <div className="text-h6 text-[#999999]">
                  По мере появления анонсов
                </div>
                <div className="text-h4 font-medium">Чемодан вебинаров</div>
                <div className="text-h5 text-[#999999]">
                  Подборка с анонсами бесплатных вебинаров на самые топовые темы
                  при участии экспертов.
                </div>
                <div className="flex flex-row items-center mt-[16px]">
                  <img
                    src={submit}
                    alt="submit"
                    className="h-[16px] w-[16px]"
                  />
                  <div className="text-h5 font-medium ml-[8px]">
                    Никогда не пришлем платные вебинары
                  </div>
                </div>
                <div className="flex flex-row items-center mt-[8px]">
                  <img
                    src={submit}
                    alt="submit"
                    className="h-[16px] w-[16px]"
                  />
                  <div className="text-h5 ml-[8px]">
                    Подборка топовых тем для вебинаров
                  </div>
                </div>
                <>
                  <Switcher
                    on={subscribe[3]}
                    onClick={() => handleOnSubscribe(3)}
                  />
                  <div className="text-h5 ml-[64px]">
                    Уже получает 92 082 человек
                  </div>
                </>
              </div>
              <img
                src={FourthPicture}
                alt="beforeRise"
                className="w-[80px] h-[80px]"
              />
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
export default Subscribes;
