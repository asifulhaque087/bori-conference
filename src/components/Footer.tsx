"use client";
import React from "react";

const Footer = () => {
  return (
    <div>
      {/* ----------top----- */}
      <div className="md:flex-row md:gap-[80px] md:w-[100%] flex flex-col gap-[30px] w-[100%]  bg-slate-100 p-[30px]">
        <div className="flex flex-col gap-[5px]">
          <h4 className="text-[15px] text-slate-700 font-[600]">About</h4>
          <p className="capitalize text-[13px] text-slate-600">about us</p>
          <p className="capitalize text-[13px] text-slate-600">Legal</p>
          <p className="capitalize text-[13px] text-slate-600">
            Waset celibrate its 16th
          </p>
          <p className="capitalize text-[13px] text-slate-600">
            foundation anniversary
          </p>
        </div>

        <div className="flex flex-col gap-[5px]">
          <h4 className="text-[15px] text-slate-700 font-[600]">Account</h4>
          <p className="capitalize text-[13px] text-slate-600">login</p>
          <p className="capitalize text-[13px] text-slate-600">
            create account
          </p>
        </div>

        <div className="flex flex-col gap-[5px]">
          <h4 className="text-[15px] text-slate-700 font-[600]">explone</h4>
          <p className="capitalize text-[13px] text-slate-600">committes</p>
          <p className="capitalize text-[13px] text-slate-600">Disciplines</p>
          <p className="capitalize text-[13px] text-slate-600">
            Waset celibrate its 16th
          </p>
          <p className="capitalize text-[13px] text-slate-600">Publications</p>
        </div>

        <div className="flex flex-col gap-[5px]">
          <h4 className="text-[15px] text-slate-700 font-[600]">research</h4>
          <p className="capitalize text-[13px] text-slate-600">abstracts</p>
          <p className="capitalize text-[13px] text-slate-600">periodicles</p>
          <p className="capitalize text-[13px] text-slate-600">archivs</p>
        </div>

        <div className="flex flex-col gap-[5px]">
          <h4 className="text-[15px] text-slate-700 font-[600]">
            open science
          </h4>
          <p className="capitalize text-[13px] text-slate-600">
            open science philosophy
          </p>
          <p className="capitalize text-[13px] text-slate-600">
            open science award
          </p>
          <p className="capitalize text-[13px] text-slate-600">
            open innovation
          </p>
          <p className="capitalize text-[13px] text-slate-600">
            postdoctor followship award
          </p>
          <p className="capitalize text-[13px] text-slate-600">
            scolarly research reveiw
          </p>
        </div>

        <div className="flex flex-col gap-[5px]">
          <h4 className="text-[15px] text-slate-700 font-[600]">support</h4>
          <p className="capitalize text-[13px] text-slate-600">support</p>
          <p className="capitalize text-[13px] text-slate-600">contact us</p>
          <p className="capitalize text-[13px] text-slate-600">
            open innovation
          </p>
          <p className="capitalize text-[13px] text-slate-600">
            postdoctor followship award
          </p>
          <p className="capitalize text-[13px] text-slate-600">
            scolarly research reveiw
          </p>
        </div>
      </div>
      {/* ---------down----- */}
      <div>
        <div className="md:w-[100%]  w-[100%] h-[1px] bg-slate-200 mt-[10px]"></div>
      </div>

      <div className="md:w-[100%] w-[100%] flex flex-col gap-[10px] items-conter text-center ">
        <p className="text-[13px] text-slate-600 capitalize">
          creative common attribution 40 internaitonal license
        </p>
        <p className="text-[13px] text-slate-500 capitalize">
          @2023 world Academy of science engeeriing and technology
        </p>
      </div>
    </div>
  );
};

export default Footer;
