"use client";
import React from "react";

const Header = () => {
  return (
    <>
      <div className="flex items-center bg-blue-500">
        {/* ---------left----------- */}
        <div className="logoo">
          {/* <img src="https://waset.org/static/images/wasetc.png" alt="" /> */}

          <h1 className="text-[70px] italic font-[700] text-white stroke-slate-[500] capitalize tracking-widest">
            bori
          </h1>
        </div>

        {/* -----right----------- */}

        <div className="md:flex flex-col items-end gap-[15px] hidden ">
          {/* -----top---- */}
          <div>
            <input
              className="border border-slate-300 p-[10px] outline-none"
              type="search"
              placeholder="Search Conferences"
              name="search"
            />
            <span>search</span>
          </div>
          {/* -------down------- */}
          <div className="flex flex-wrap gap-[20px]">
            <span>Conferences</span>
            <span>Disciplines</span>
            <span>Committies</span>
            <span>Publications</span>
            <span>support</span>
            <span>Login</span>
            <span>Register</span>
          </div>
        </div>
      </div>

      <div>
        <div className="  h-[1px] bg-slate-200 mt-[15px]"></div>
      </div>
    </>
  );
};

export default Header;
