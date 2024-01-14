import React, { Component } from "react";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

class DemoCarousel extends Component {
  render() {
    return (
      <Carousel showStatus={false} autoPlay={true} showThumbs={false}>
        <div className="bg-[#EEF4FF] w-96 h-[20rem] rounded-lg mt-4 relative ml-[0.5rem] xs:w-[18.5rem] xs:h-64">
          <p className="text-xs px-4 py-4">2 days ago</p>
          <p className="text-sm text-[#E13551] mt-4 px-4 font-medium xs:px-2">
            Boston Consulting Group (BCG) - Germany{" "}
          </p>
          <h1 className="px-4 pt-2 xs:px-2 text-2xl font-medium">
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
        <div className="bg-[#EEF4FF] w-96 h-[20rem] rounded-lg mt-4 relative ml-[0.5rem] xs:w-[18.5rem] xs:h-64 ">
          <p className="text-xs px-4 py-4">2 days ago</p>
          <p className="text-sm text-[#E13551] mt-4 px-4 font-medium xs:px-2">
            Boston Consulting Group (BCG) - Germany{" "}
          </p>
          <h1 className="px-4 pt-2 xs:px-2 text-2xl font-medium">
            Client Solutions <br />
            Internship
          </h1>
          <div className="flex w-[95%] justify-end">
            <img src="arrow-right.png" alt="" />
          </div>
          <img
            className="absolute bottom-[-2rem] z-10 left-[2rem] shadow-md"
            src="logo1.png"
            alt=""
          />
        </div>
        <div className="bg-[#EEF4FF] w-96 h-[20rem] rounded-lg mt-4 relative ml-[0.5rem] xs:w-[18.5rem] xs:h-64">
          <p className="text-xs px-4 py-4">2 days ago</p>
          <p className="text-sm text-[#E13551] mt-4 px-4 font-medium xs:px-2">
            Boston Consulting Group (BCG) - Germany{" "}
          </p>
          <h1 className="px-4 pt-2 xs:px-2 text-2xl font-medium">
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
      </Carousel>
    );
  }
}

// ReactDOM.render(<DemoCarousel />, document.querySelector(".demo-carousel"));

export default DemoCarousel;
