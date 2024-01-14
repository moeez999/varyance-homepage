import React, { useEffect, useState } from "react";

import DemoCarousel from "./SliderRes";

import "../components/InsideSlider.css";
import { Carousel } from "react-responsive-carousel";

const Job = () => {
  const [isMoveLeftVisible, setIsMoveLeftVisible] = useState(false);
  const [isLargerScreen, setIsLargerScreen] = useState(window.innerWidth < 425);
  const [mobileView, setMobileView] = useState({ display: "none" });
  const [desktopView, setDesktopView] = useState({ display: "flex" });

  useEffect(() => {
    const handleScroll = () => {
      const moveLeftElement = document.querySelector(".move-left");

      if (moveLeftElement) {
        const rect = moveLeftElement.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;

        if (isVisible) {
          moveLeftElement.style.marginLeft = "0";
        } else {
          moveLeftElement.style.marginLeft = "-10rem";
        }

        setIsMoveLeftVisible(isVisible);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsLargerScreen(window.innerWidth < 769);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (isLargerScreen) {
      setMobileView({ display: "block" });
      setDesktopView({ display: "none" });
    } else {
      setMobileView({ display: "none" });
      setDesktopView({ display: "flex" });
    }
  }, [isLargerScreen]);

  return (
    <div className=" mt-16 ">
      <h1 className="text-4xl xs:text-2xl font-normal px-16 py-2 xs:px-6">
        Unlock the full potential of <br />
        your <span className="font-medium">future network.</span>
      </h1>
      {isLargerScreen ? (
        <div className="overflow-hidden">
          <div
            className={`move-left ${
              isMoveLeftVisible ? "visible" : ""
            } grid grid-cols-1 place-items-center desk:px-8 gap-8 mt-10 ml-[-10rem] xs:px-4 `}
          >
            <div className="rounded-2xl shadow-lg pt-4 h-auto ">
              <h2 className="text-2xl font-bold px-4 py-1">
                Students around the world.
              </h2>
              <p className="text-base mt-2 px-4 py-1 font-medium">
                Solve real-world challenges designed <br /> by investment banks,
                law firms, <br />
                consulting firms.
              </p>
              <img src="p-1.png" alt="" />
            </div>
            <div className="rounded-xl shadow-lg w-full h-[60vh] bg-b py-4">
              <h2 className="text-2xl font-bold px-4 py-1 text-white">
                Download the varyance app.
              </h2>
              <p className="text-base font-medium mt-2 px-4 py-1 text-white">
                Build your network on the go and <br />
                stay connected for updates and <br />
                group chats.
              </p>
            </div>
            <div className="rounded-xl shadow-lg w-full h-full py-4  ">
              <h1 className="text-2xl font-medium px-6 py-1">
                Find your next job.
              </h1>
              <div>
                <Carousel showStatus={false} autoPlay={true}>
                  <div>
                    <DemoCarousel />
                  </div>
                  <div>
                    <DemoCarousel />
                  </div>
                </Carousel>
              </div>
              <div className="px-6 py-8 mt-4 ">
                <p className="text-lg font-medium p-2">
                  Build your network on the go and stay connected for updates
                  and.
                </p>
                <p className="text-[#E13551] font-medium p-2">Download App</p>
              </div>
            </div>
            <div className="rounded-xl shadow-lg w-full  flex flex-col px-4 py-2 gap-2 h-96">
              <div className="bg-c w-full h-full rounded-xl shadow-md">
                <h1 className="text-xl font-medium px-4 py-1">
                  Join /varyance and <br /> fast-track your career start
                </h1>
              </div>
              <div className="bg-[#E13551] w-full h-96 rounded-xl shadow-md ">
                <h1 className="text-xl font-medium px-4 py-3 text-white">
                  Join /varyance and <br /> fast-track your career start
                </h1>
                <p className="text-sm text-white px-4 font-medium">
                  See all jobs
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="overflow-hidden">
          <div
            className={`move-left ${
              isMoveLeftVisible ? "visible" : ""
            } grid grid-cols-4 desk:grid-cols-2 desk:px-8 place-items-center gap-4 mt-10 ml-[-10rem] `}
          >
            <div className="rounded-xl shadow-lg py-4 h-full">
              <h2 className="text-xl font-medium px-4 py-4">
                Students around <br />
                the world.
              </h2>
              <p className="text-base mt-2 px-4 py-1 font-medium">
                Solve real-world challenges designed <br /> by investment banks,
                law firms, <br />
                consulting firms.
              </p>
              <img className="mt-16" src="p-1.png" alt="" />
            </div>
            <div className="rounded-xl shadow-lg w-full h-full bg-b py-4">
              <h2 className="text-xl font-medium px-4 py-1 text-white">
                Download the <br /> varyance app.
              </h2>
              <p className="text-base mt-2 px-4 py-1 text-white">
                Build your network on the go and <br />
                stay connected for updates and <br />
                group chats.
              </p>
            </div>
            <div className="rounded-xl shadow-lg w-full h-full py-4  ">
              <h1 className="text-2xl font-medium px-6 py-1">
                Find your next job.
              </h1>
              <div>
                <Carousel showStatus={false} autoPlay={true}>
                  <div>
                    <DemoCarousel />
                  </div>
                  <div>
                    <DemoCarousel />
                  </div>
                </Carousel>
              </div>
              <div className="px-6 py-4 mt-4">
                <p className="text-lg font-medium p-2">
                  Build your network on the go and <br />
                  stay connected for updates and.
                </p>
                <p className="text-[#E13551] font-medium p-2">Download App</p>
              </div>
            </div>
            <div className="rounded-xl shadow-lg w-full h-full flex flex-col px-4 py-2 gap-2">
              <div className="bg-c w-full h-full rounded-xl shadow-md">
                <h1 className="text-xl font-medium px-4 py-1">
                  Join /varyance and <br /> fast-track your career start
                </h1>
              </div>
              <div className="bg-[#E13551] w-full h-full rounded-xl shadow-md">
                <h1 className="text-xl font-medium px-4 py-1 text-white">
                  Join /varyance and <br /> fast-track your career start
                </h1>
                <p className="text-sm text-white">See all jobs</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default Job;
