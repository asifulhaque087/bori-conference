"use client";

import { BsFillCalendarCheckFill, BsFillMapFill } from "react-icons/bs";

const Hero = () => {
  return (
    <div className="mt-[20px]">
      {/* -----------------llinks------------ */}
      {/* <div className="flex gap-[15px] text-blue-600">
        <p>conference</p>
        <span>/</span>
        <p>2023</p>
        <span>/</span>
        <p>october 2023 in lisbon</p>
        <span>/</span>
        <p>oceanography and ocean current</p>
      </div> */}

      {/* -----header----------- */}

      {/* <div className="w-[100%] mt-[30px]">
      </div> */}
      {/* ---------------main banner-------- */}

      <div
        className="cover-images w-[100%] h-[200px] md:h-[500px] mt-[20px] grid place-items-center rounded"
        style={{
          backgroundImage: `linear-gradient(to bottom,rgba(0,0,0, .6),
                rgba(0,0,0, .6)), url(${"https://1.bp.blogspot.com/-TdKkD7p1z0Q/Xar7ZOGSeJI/AAAAAAAAa4E/pScoCY_zSx89-ifKl-7OsZ7VBa_APCluQCNcBGAsYHQ/s1600/bori-Bangladesh-Oceanographic-Research-Institute.jpg"})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        {/* <h1 className="text-[70px] italic font-[700] text-white stroke-slate-[500] capitalize tracking-widest">
          bori
        </h1> */}

        <div>
          <h3 className="text-[30px] md:text-[60px] font-[700] text-white text-center">
            Bori events
          </h3>

          <div className="flex items-center gap-x-[10px] mt-[10px] text-white text-[14px] md:text-[20px] font-[600] capitalize">
            <span className="text-white text-[20px]">
              <BsFillCalendarCheckFill size={25} />
            </span>
            <span className="">30 Oct, 2023</span>
            <span className="text-white text-[20px] font-[600] px-[5px]">
              |
            </span>

            <span className="">
              <BsFillMapFill size={25} />
            </span>
            <span className="">cox bazar</span>
          </div>
        </div>

        {/* <img
          className="w-[100%] h-[100%] object-cover"
          src="https://1.bp.blogspot.com/-TdKkD7p1z0Q/Xar7ZOGSeJI/AAAAAAAAa4E/pScoCY_zSx89-ifKl-7OsZ7VBa_APCluQCNcBGAsYHQ/s1600/bori-Bangladesh-Oceanographic-Research-Institute.jpg"
          alt=""
        /> */}
      </div>
      {/* buttons */}
      <div className="flex items-center justify-end gap-x-[15px] py-[10px]">
        <button className="bg-green-500 px-[16px] py-[8px] rounded text-[14px] text-white capitalize">
          submit papers
        </button>

        <button className="bg-blue-400 px-[16px] py-[8px] rounded text-[14px] text-white capitalize">
          author registration
        </button>

        <button className="bg-cyan-500 px-[16px] py-[8px] rounded text-[14px] text-white capitalize">
          listener registration
        </button>
      </div>
    </div>
  );
};

export default Hero;
