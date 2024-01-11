import React, { useState } from "react";
import Select from "react-select";

export default function HeroSection() {
  const options = [
    { value: "option1", label: "Option 1", logo: "logo1.png" },
    { value: "option2", label: "Option 2", logo: "logo2.png" },
    { value: "option3", label: "Option 3", logo: "logo3.png" },
    // Add more options as needed
  ];

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdownToggle = (newState) => {
    setIsDropdownOpen(newState.isOpen);
  };

  return (
    <div className="flex flex-col items-center mt-4">
      <div className="hero-section w-[95%] pt-16 xs:w-full">
        <div className="ml-16">
          <img src="Icon.png" alt="" />
        </div>
        <div className=" p-6 flex flex-row  items-center justify-around xs:flex-col xs:p-0">
          <div className="">
            <div>
              <h1 className="font-semibold text-4xl xs:text-3xl">
                Join /varyance and <br /> fast-track your career start
              </h1>
              <p className="text-sm mt-2 font-medium">
                Solve real-world challenges designed by investment banks, law
                firms, <br /> consulting firms and industry leaders across the
                globe.
              </p>
            </div>
            <div>
              <p className="font-semibold text-sm mt-8 p-1">
                Find your university
              </p>
              <div className="flex flex-row items-center">
                <div className="bg-white p-2 py-1 rounded-3xl">
                  <div className="flex flex-row gap-1 items-center">
                    {isDropdownOpen ? (
                      <div className="w-12">
                        <img className="" src="icon5.png" alt="" />
                      </div>
                    ) : (
                      <div className="w-12">
                        <img className="" src="icon2.png" alt="" />
                      </div>
                    )}
                    <Select
                      placeholder="Select"
                      className="w-64 "
                      options={options}
                      isSearchable
                      components={{ DropdownIndicator: null }}
                      onMenuOpen={() => handleDropdownToggle({ isOpen: true })}
                      onMenuClose={() =>
                        handleDropdownToggle({ isOpen: false })
                      }
                    />
                  </div>
                </div>
                <div className="w-44">
                  <img src="icon3.png" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-[45%] xs:w-[70%]  xs:mt-4">
            <div className="flex flex-row gap-2 xs:flex-col xs:justify-center">
              <div className="bg-white p-2 rounded-xl">
                <div className="w-46">
                  <img src="image1.png" alt="" />
                </div>
                <div className="bg-[#f5f8ff] px-2 py-4">
                  <p className="text-xs text-[#98A2B3]">2 Tasks / 2 hours</p>
                  <h3 className="text-sm font-semibold">
                    Introduction to <br /> Strategy Consulting
                  </h3>
                  <p className="text-[#E13551] text-[0.7rem] font-medium">
                    Boston Consulting Group (BCG)
                  </p>
                </div>
                <div className="flex flex-row justify-between items-center mt-2">
                  <p className="text-sm font-medium">
                    <span class="text-[#5FDCB3] mr-1">●</span>FT Active
                  </p>
                  <div>
                    <button className=" bg-[#fecdd6] text-white text-lg font-semibold px-4 py-1 rounded-lg">
                      Start
                    </button>
                  </div>
                </div>
              </div>

              <div className="bg-white p-2 rounded-xl">
                <div className="w-46">
                  <img src="image3.png" alt="" />
                </div>
                <div className="bg-[#f5f8ff] px-2 py-4">
                  <p className="text-xs text-[#98A2B3]">2 Tasks / 2 hours</p>
                  <h3 className="text-sm font-semibold">
                    Project Management <br /> Challenge
                  </h3>
                  <p className="text-[#E13551] text-[0.7rem] font-medium">
                    Google Inc.
                  </p>
                </div>
                <div className="flex flex-row justify-between items-center mt-2">
                  <p className="text-sm font-medium">
                    <span class="text-[#5FDCB3] mr-1">●</span>FT Active
                  </p>
                  <div>
                    <button className=" bg-[#fecdd6] text-white text-lg font-semibold px-4 py-1 rounded-lg">
                      Start
                    </button>
                  </div>
                </div>
              </div>

              <div className="bg-white p-2 rounded-xl">
                <div className="w-46">
                  <img src="image3.png" alt="" />
                </div>
                <div className="bg-[#f5f8ff] px-2 py-4">
                  <p className="text-xs text-[#98A2B3]">2 Tasks / 2 hours</p>
                  <h3 className="text-sm font-semibold">
                    Lufthansa Aviation <br /> Management Challengee
                  </h3>
                  <p className="text-[#E13551] text-[0.7rem] font-medium">
                    Lufthansa AG
                  </p>
                </div>
                <div className="flex flex-row justify-between items-center mt-2">
                  <p className="text-sm font-medium">
                    <span class="text-[#5FDCB3] mr-1">●</span>FT Active
                  </p>
                  <div>
                    <button className=" bg-[#fecdd6] text-white text-lg font-semibold px-4 py-1 rounded-lg">
                      Start
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row gap-2 relative xs:items-center xs:mt-6 xs:justify-center xs:py-4">
              <div className="w-16">
                <img src="logo1.png" alt="" />
              </div>
              <div className="w-16">
                <img src="logo-2.png" alt="" />
              </div>
              <div className="w-16">
                <img src="logo-3.png" alt="" />
              </div>
              <button className="rounded-[50%] bg-white p-6">
                <img src="arrow.png" alt="" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
