import React, { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    const image = document.getElementById("zoom-image1");

    window.addEventListener("scroll", () => {
      const scrollHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = window.scrollY;
      const scrollPercentage = (scrolled / scrollHeight) * 100;

      // Apply zoom effect based on scroll position
      const scaleFactor = 1 + scrollPercentage * 0.2; // Adjust the zoom speed
      image.style.transform = `scale(${scaleFactor})`;
      console.log(image, scrollHeight);
    });
  }, []);

  return (
    <div className="max-w-[1512px] mx-auto bg-white hidden sm:block">
      <div className="relative overflow-hidden">
        <img
          src="./assets/images/1.png"
          className="w-full h-screen duration-200 ease-linear"
          alt=""
          id="zoom-image1"
        />
        <div className="absolute top-1/2 w-full -translate-y-1/2">
          <h1 className="text-[3.438rem] lg:text-[3.75rem] text-white font-Cormorant-light text-center font-light">
            WINTER SHOW <span className="block">2023</span>
          </h1>
        </div>
        <svg
          className="absolute left-1/2 -translate-x-1/2 bottom-[73px]"
          width="70"
          height="70"
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
        <div className="grid grid-cols-2 h-screen sticky top-0">
          <img src="./assets/images/2.png" className="w-full h-screen" alt="" />
        </div>
        <div className="grid grid-cols-2 h-screen sticky top-0">
          <div></div>
          <div className="flex justify-center items-center">
            <h1 className="text-[2.813rem] lg:text-[3.75rem] font-Crimson-Regular-I text-center">
              MONOCHROME{" "}
              <span className="block font-Crimson-Regular">AFFAIR</span>
            </h1>
          </div>
        </div>

        <div className="grid grid-cols-2 h-screen sticky top-0">
          <div></div>
          <img src="./assets/images/3.png" className="w-full h-screen" />
        </div>
        <div className="grid grid-cols-2 h-screen sticky top-0">
          <div className="flex justify-center flex-col items-center">
            <h1 className="lg:text-[5rem] text-[2.813rem] font-Crimson-Regular text-center">
              STYLE
            </h1>
            <p className="font-Noto w-[270px] font-light leading-relaxed text-justify text-lg lg:text-xl">
              Step into the world of Luceria & Co. and immerse yourself in the
              allure of masterful craftsmanship and timeless beauty.{" "}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 h-screen sticky top-0">
          <img src="./assets/images/4.png" className="w-full h-screen" />
          <div></div>
        </div>
        <div className="grid grid-cols-2 h-screen sticky top-0">
          <div></div>
          <div className="flex justify-center items-center">
            <h1 className="text-3xl lg:text-[3.125rem] font-Crimson-Regular text-center px-12">
              “<span className=" font-Crimson-Regular-I">Elegance</span> is not
              standing out, but being{" "}
              <span className=" font-Crimson-Regular-I">remembered.</span>” -
              <span className="text-2xl lg:text-[2.5rem] block">
                {" "}
                Giorgio Armani
              </span>
            </h1>
          </div>
        </div>

        <img src="./assets/images/5.png" className="w-full h-screen relative" />
      </div>

      <div className="relative">
        <div className="grid grid-cols-2 h-screen sticky top-0">
          <div></div>
          <img src="./assets/images/6.png" className="w-full h-screen" />
        </div>
        <div className="grid grid-cols-2 h-screen sticky top-0">
          <div className="flex justify-center flex-col items-center">
            <h1 className="text-[3.75rem] lg:text-[5rem] font-Crimson-Regular text-center">
              EMOTION
            </h1>
            <p className="font-Noto w-[270px] font-light lg:leading-relaxed text-justify text-lg lg:text-xl leading-[35px]">
              Every thread tells a story, every stitch is a note in the melody
              of the designer's narrative. From the grandeur of haute couture to
              the avant-garde allure of experimental creations, fashion becomes
              a living embodiment of the artist's soul, a mirror reflecting the
              ever-evolving society it adorns.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 h-screen sticky top-0">
          <img src="./assets/images/7.png" className="w-full h-screen" />
          <div></div>
        </div>
        <div className="grid grid-cols-2 h-screen sticky top-0">
          <div></div>
          <div className="flex justify-center items-center px-8 md:px-16">
            <h1 className="text-3xl lg:text-[3.125rem] font-Crimson-Regular px-1 text-center">
              “<span className=" font-Crimson-Regular-I">Fashion</span>
              is a form of{" "}
              <span className=" font-Crimson-Regular-I">escapism</span> not an
              imprisonment.” -{" "}
              <span className="text-2xl lg:text-[2.5rem] block">
                Alexander Mcqueen
              </span>
            </h1>
          </div>
        </div>

        <div className="grid grid-cols-2 h-screen sticky top-0">
          <div></div>
          <img src="./assets/images/8.png" className="w-full h-screen" />
        </div>
        <div className="grid grid-cols-2 h-screen sticky top-0">
          <div className="flex justify-center flex-col items-center">
            <p className="font-Noto w-[270px] font-light leading-relaxed text-justify text-lg lg:text-xl">
              Embrace every moment with the self-assured grace that defines you,
              and watch as your style radiates a brilliance matched only by your
              confidence.
            </p>
          </div>
          <div></div>
        </div>

        <img src="./assets/images/9.png" className="w-full h-screen relative" />
      </div>

      <div className="grid grid-cols-2 h-screen sticky top-0">
        <img src="./assets/images/10.png" className="w-full h-screen" />
      </div>
      <div className="grid grid-cols-2 h-screen sticky top-0">
        <div></div>
        <div className="flex justify-center items-center">
          <h2 className="text-[3.75rem] lg:text-[5rem] font-Crimson-Regular text-center w-[250px] lg:w-[300px] leading-[60px]">
            let the <span className="font-Crimson-Regular-I">world</span> be{" "}
            your <span className="font-Crimson-Regular-I">runway</span>
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-2 h-screen sticky top-0">
        <div></div>
        <img src="./assets/images/11.png" className="w-full h-screen" />
      </div>
      <div className="grid grid-cols-2 h-screen sticky top-0">
        <div className="flex justify-center items-center">
          <h2 className="text-[3.75rem] font-Cormorant-light text-center leading-[60px] font-light">
            Runway 20 <span className="block">11/02/2023</span>
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-2 h-screen sticky top-0">
        <img src="./assets/images/12.png" className="w-full h-screen" />
      </div>
      <div className="grid grid-cols-2 h-screen sticky top-0">
        <div></div>
        <div className="flex justify-center items-center">
          <div className="w-[15rem] lg:w-[18.75rem] flex flex-col gap-y-4">
            <div className="w-full font-Montserrat !font-semibold text-xl h-14 border border-black flex items-center justify-center">
              SHARE PAGE
            </div>
            <div className="w-full font-Montserrat font-semibold text-xl h-14 border border-black flex items-center justify-center">
              OFFICIAL WEBSITE
            </div>
            <div className="w-full font-Montserrat font-semibold text-xl h-14 border border-black flex items-center justify-center">
              RESERVE
            </div>
            <div className="w-full font-Montserrat font-semibold text-xl h-14 border border-black flex items-center justify-center">
              EMAIL
            </div>
            <div className="w-full font-Montserrat font-semibold text-xl h-14 border border-black flex items-center justify-center">
              PHONE
            </div>
          </div>
        </div>
      </div>
      <div className="relative">
        <img src="./assets/images/13.png" className="w-full h-screen" />
        <div className="absolute w-full top-1/2 -translate-y-1/2">
          <h1 className="text-[3.75rem] lg:text-[4rem] text-white font-Crimson-Regular-I text-center font-light">
            Chapter <span className="Crimson-Regular">3 is COMING.</span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Home;
