"use client";
import React from "react";

const Header = () => {
    return (
        <>
            <div className="flex  justify-between items-center">
                {/* ---------left----------- */}
                <div>
                    <img
                        src="https://waset.org/static/images/wasetc.png"
                        alt=""
                    />
                </div >

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


                <div className="md:hidden flex flex-col gap-[5px] border border-slate-600 p-[10px] ">
                    <div className="w-[25px] h-[2px] bg-slate-800"></div>
                    <div className="w-[25px] h-[2px] bg-slate-800"></div>
                    <div className="w-[25px] h-[2px] bg-slate-800"></div>
                </div>
            </div>

  <div> 
                <div className="  h-[1px] bg-slate-200 mt-[15px]"></div>
            </div>
        </>
    );
};

export default Header;
