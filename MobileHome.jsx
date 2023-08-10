import React from "react";

const MobileHome = () => {
  return (
    <div className="block sm:hidden">
      <div className="relative">
        <img src="./assets/images/mobile/1.png" className="w-full" alt="" />
        <div className="absolute top-1/2 w-full -translate-y-1/2">
          <h1 className="text-4xl text-white font-Cormorant-light text-center font-light">
            WINTER SHOW <span className="block">2023</span>
          </h1>
        </div>
        <svg
          className="absolute left-1/2 -translate-x-1/2 bottom-[73px]"
          width="50"
          height="50"
          viewBox="0 0 70 70"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M35 58.3332V11.6665M35 58.3332L14.5833 37.9165M35 58.3332L55.4167 37.9165"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <rect x="0.5" y="0.5" width="69" height="69" stroke="black" />
        </svg>
      </div>
      <div className="relative">
        <img src="./assets/images/mobile/2.png" className="w-full" alt="" />
        <h2 className="text-2xl font-Crimson-Regular-I text-center absolute right-5 top-8">
          MONOCHROME <span className="block font-Crimson-Regular">AFFAIR</span>
        </h2>
        <div className="absolute bottom-0 left-0 grid grid-cols-2 w-full">
          <div className="flex justify-center flex-col items-center">
            <h1 className="text-[1.875rem] font-Crimson-Regular text-center text-white">
              STYLE
            </h1>
            <p className="font-Noto w-[146px] font-light leading-relaxed text-justify text-xs text-white">
              Step into the world of Luceria & Co. and immerse yourself in the
              allure of masterful craftsmanship and timeless beauty.{" "}
            </p>
          </div>
          <img src="./assets/images/mobile/3.png" className="w-full" alt="" />
        </div>
      </div>
      <div>
        <img src="./assets/images/mobile/4.png" className="w-full" alt="" />
        <div className="flex justify-center my-10">
          <h2 className="text-[1.375rem] font-Crimson-Regular text-center max-w-[256px] leading-[25px]">
            “<span className=" font-Crimson-Regular-I">Elegance</span> is not
            standing out, but being{" "}
            <span className=" font-Crimson-Regular-I">remembered.</span>” -
            <span className="text-2xl lg:text-[2.5rem] block">
              {" "}
              Giorgio Armani
            </span>
          </h2>
        </div>
      </div>
      <img src="./assets/images/mobile/5.png" className="w-full" alt="" />
      <div className="relative">
        <div className="grid grid-cols-2">
          <div className="flex justify-center mt-24">
            <h2 className="text-2xl font-Crimson-Regular text-center w-[156px]">
              Every <span className="font-Crimson-Semibold-I">thread </span>
              tells a story.
            </h2>
          </div>
          <img src="./assets/images/mobile/6.png" className="w-full" alt="" />
        </div>
      </div>
      <div className="relative -mt-36">
        <img src="./assets/images/mobile/7.png" className="w-[261px]" alt="" />
        <div className="p-7 bg-white absolute bottom-0 right-0">
          <h2 className="text-1.375rem] font-Crimson-Semibold px-1 text-center w-[151px]">
            “<span className=" font-Crimson-Semibold-I">Fashion </span>
            is a form of{" "}
            <span className=" font-Crimson-Semibold-I ">escapism</span> not an
            imprisonment.” -{" "}
            <span className="text-lg block font-Crimson-Regular">
              Alexander Mcqueen
            </span>
          </h2>
        </div>
      </div>
      <div className="relative">
        <img src="./assets/images/mobile/8.png" className="w-full" alt="" />
        <div className="w-[286px] bg-white absolute right-0 py-6 pl-6 -bottom-16">
          <h2 className="px-4 text-right text-lg font-Crimson-Regular leading-[18px]">
            Embrace every moment with the self-assured grace that defines you,
            and your style radiates a brilliance matched only by your
            confidence.
          </h2>
        </div>
      </div>
      <img src="./assets/images/mobile/9.png" className="w-full mt-28" alt="" />
      <h2 className="text-[1.75rem] font-Crimson-Regular mt-16 mb-9 text-center ">
        let the <span className="font-Crimson-Regular-I">world</span> be your{" "}
        <span className="font-Crimson-Regular-I">runway</span>
      </h2>
      <div className="flex justify-end ">
        <img src="./assets/images/mobile/10.png" className="w-[80%]" alt="" />
      </div>
      <div className="relative">
        <img src="./assets/images/mobile/11.png" className="w-[80%]" alt="" />
        <div className="absolute right-0 bottom-14 bg-white p-3 w-[312px]">
          <h2 className="text-2xl font-Cormorant-light text-center leading-[35px] font-normal">
            GRANDBAL SHOWROOM <span className="block">2PM</span> 11/02/2023
          </h2>
        </div>
      </div>
      <img src="./assets/images/mobile/12.png" className="w-full" alt="" />
      <div className="relative">
        <img src="./assets/images/mobile/13.png" className="w-full" />
        <div className="absolute w-full top-44">
          <h1 className="text-[2.188rem] text-white font-Crimson-Regular-I text-center font-light">
            Chapter <span className="Crimson-Regular">3 is COMING.</span>
          </h1>
        </div>
        <div className="w-[270px] flex flex-col gap-y-4 absolute bottom-10 left-1/2 -translate-x-1/2">
          <div className="w-full font-Montserrat !font-semibold text-base h-14 bg-white text-black flex items-center justify-center">
            SHARE PAGE
          </div>
          <div className="w-full font-Montserrat font-semibold text-base h-14 bg-white text-black flex items-center justify-center">
            OFFICIAL WEBSITE
          </div>
          <div className="w-full font-Montserrat font-semibold text-base h-14 bg-white text-black flex items-center justify-center">
            RESERVE
          </div>
          <div className="w-full font-Montserrat font-semibold text-base h-14 bg-white text-black flex items-center justify-center">
            EMAIL
          </div>
          <div className="w-full font-Montserrat font-semibold text-base h-14 bg-white text-black flex items-center justify-center">
            PHONE
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileHome;
