"use client";
import React from "react";

const Header = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row items-center bg-white shadow-md pb-[20px] md:pb-0 px-[30px]">
        {/* ---------left----------- */}
        <div className="logoo">
          {/* <img src="https://waset.org/static/images/wasetc.png" alt="" /> */}

          <h1 className="text-[50px] italic font-[700] text-blue-400 stroke-slate-[500] capitalize tracking-widest">
            bori
          </h1>
        </div>

        {/* -----right----------- */}

        <div className="flex items-end gap-x-[18px] md:ml-auto">
          <span className="text-[14px] capitalize text-gray-700">
            Conferences
          </span>
          <span className="text-[14px] capitalize text-gray-700 hidden md:block">
            Disciplines
          </span>
          <span className="text-[14px] capitalize text-gray-700">
            Committies
          </span>
          <span className="text-[14px] capitalize text-gray-700 hidden md:block">
            Publications
          </span>
          <span className="text-[14px] capitalize text-gray-700 hidden sm:block">
            support
          </span>
          <span className="text-[14px] capitalize text-gray-700">Login</span>
          <span className="text-[14px] capitalize text-gray-700">Register</span>
        </div>
      </div>
    </>
  );
};

export default Header;
