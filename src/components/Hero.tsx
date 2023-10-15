"use client";
import React from "react";

const Hero = () => {
  return (
    <div className="mt-[20px]">
      {/* -----------------llinks------------ */}
      <div className="flex gap-[15px] text-blue-600">
        <p>conference</p>
        <span>/</span>
        <p>2023</p>
        <span>/</span>
        <p>october 2023 in lisbon</p>
        <span>/</span>
        <p>oceanography and ocean current</p>
      </div>

      {/* -----header----------- */}

      <div className="w-[100%] mt-[30px]">
        <h3 className="text-[25px] text-center font-[500] text-slate-800 ">
          ICOOC 2023: 17. International Conference on Oceanography and Ocean
          Currents
        </h3>
        <p className="text-[23px] text-center ">
          October 30-31, 2023 in Lisbon, Portugal
        </p>
      </div>
      {/* ---------------main banner-------- */}

      <div
        className="cover-image w-[100%] h-[400px] bg-red-900 mt-[20px] grid place-items-center"
        style={{
          backgroundImage: `linear-gradient(to bottom,rgba(0,0,0, .5),
                rgba(0,0,0, .5)), url(${"https://1.bp.blogspot.com/-TdKkD7p1z0Q/Xar7ZOGSeJI/AAAAAAAAa4E/pScoCY_zSx89-ifKl-7OsZ7VBa_APCluQCNcBGAsYHQ/s1600/bori-Bangladesh-Oceanographic-Research-Institute.jpg"})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <h1 className="text-[65px] font-[700] text-white stroke-slate-[500]">
          bori
        </h1>
        {/* <img
          className="w-[100%] h-[100%] object-cover"
          src="https://1.bp.blogspot.com/-TdKkD7p1z0Q/Xar7ZOGSeJI/AAAAAAAAa4E/pScoCY_zSx89-ifKl-7OsZ7VBa_APCluQCNcBGAsYHQ/s1600/bori-Bangladesh-Oceanographic-Research-Institute.jpg"
          alt=""
        /> */}
      </div>
      {/* buttons */}
      <div className="flex items-center justify-end gap-x-[15px] py-[10px]">
        <button className="bg-green-500 px-[20px] py-[10px] rounded text-white capitalize">
          submit papers
        </button>

        <button className="bg-cyan-500 px-[20px] py-[10px] rounded text-white capitalize">
          author registration
        </button>

        <button className="bg-cyan-500 px-[20px] py-[10px] rounded text-white capitalize">
          listener registration
        </button>
      </div>
    </div>
  );
};

export default Hero;
