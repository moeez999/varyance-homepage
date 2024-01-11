import React from "react";

export default function Event() {
  return (
    <div className="flex flex-row gap-3 justify-center">
      <div className="event-bg  rounded-xl shadow-lg">
        <h1 className="text-4xl text-center font-medium p-2 mt-4">
          Attend Events
        </h1>
        <p className="text-center font-medium p-2">
          Solve real-world challenges designed by <br />
          investment banks, law firms.
        </p>
        <p className="flex flex-row items-center justify-center text-[#E13551] font-medium p-2">
          See All Challenges{" "}
          <span className="pl-4 pt-1">
            <img className="w-2" src="arrow.png" alt="" />
          </span>
        </p>
      </div>
      <div className="w-[38%] py-6 px-2 shadow-lg rounded-xl">
        <div className="flex flex-col items-center justify-center">
          <h1 className="flex flex-row text-3xl font-semibold items-end gap-1">
            <img className="w-12" src="icon.png" alt="" />. Chat
          </h1>
          <p className="text-center font-semibold text-xl p-2 mt-2">
            Solve real-world challenges designed by <br /> investment banks,
          </p>
        </div>
        <div className="flex flex-row items-center gap-2 justify-center mt-10">
          <p className="border-[#D9D9D9] border-b-2 w-40"></p>
          <span className="text-sm bg-[#E13551] text-white px-2 py-1 rounded-lg">
            Today
          </span>
          <p className="border-[#D9D9D9] border-b-2 w-40"></p>
        </div>
      </div>
    </div>
  );
}
