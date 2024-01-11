import React from "react";
import Slider from "react-slick";

export default function job() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: true,
  };
  return (
    <div className=" mt-16">
      <h1 className="text-4xl font-normal px-16 py-2">
        Unlock the full potential of <br />
        your <span className="font-medium">future network.</span>
      </h1>
      <div className="grid grid-cols-4 place-items-center gap-4 w-[110%] mt-10">
        <div className="rounded-xl shadow-lg py-4 h-[90%]">
          <h2 className="text-xl font-medium px-4 py-1">
            Students around <br />
            the world.
          </h2>
          <p className="text-base mt-2 px-4 py-1">
            Solve real-world challenges designed <br /> by investment banks, law
            firms, <br />
            consulting firms.
          </p>
          <img src="p-1.png" alt="" />
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
          <div className="flex justify-center items-center">
            {/* <Slider {...settings}> */}
            <div className="bg-[#EEF4FF] w-96 h-[20rem] rounded-lg mt-4 relative">
              <p className="text-xs px-4 py-4">2 days ago</p>
              <p className="text-sm text-[#E13551] font-normal mt-4 px-4 ">
                Boston Consulting Group (BCG) - Germany{" "}
              </p>
              <h1 className="px-4  text-2xl font-medium">
                Client Solutions <br />
                Internship
              </h1>
              <div className="flex w-[95%] justify-end">
                <img src="arrow-right.png" alt="" />
              </div>
              <img
                className="absolute bottom-[-2rem] left-[2rem] shadow-md"
                src="logo1.png"
                alt=""
              />
            </div>
            <div className="bg-[#EEF4FF] w-96 h-[20rem] rounded-lg mt-4 relative">
              <p className="text-xs px-4 py-4">2 days ago</p>
              <p className="text-sm text-[#E13551] font-normal mt-4 px-4 ">
                Boston Consulting Group (BCG) - Germany{" "}
              </p>
              <h1 className="px-4  text-2xl font-medium">
                Client Solutions <br />
                Internship
              </h1>
              <div className="flex w-[95%] justify-end">
                <img src="arrow-right.png" alt="" />
              </div>
              <img
                className="absolute bottom-[-2rem] left-[2rem] shadow-md"
                src="logo1.png"
                alt=""
              />
            </div>
            {/* </Slider> */}
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
  );
}
