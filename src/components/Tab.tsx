"use client";

import { Dispatch, SetStateAction } from "react";

// import { ITab } from '@src/types/roots';

interface IProps {
  tabs: { title: string }[];
  activeIndex: number;
  setActiveIndex: Dispatch<SetStateAction<number>>;
}

const Tab = ({ activeIndex, setActiveIndex, tabs }: IProps) => {
  return (
    <div className="w-full gap-x-[20px] flex items-center justify-center bg-gray-100 py-[10px] px-[18px]  rounded-[10px] ">
      {tabs.map((tab, i) => (
        <span
          key={i}
          className={`text-black text-[14px] tracking-[0.5px] cursor-pointer whitespace-nowrap
          ${
            i == activeIndex &&
            "!bg-[#24334A] !text-white !rounded-[10px] !px-[10px] !py-[2px] grid place-items-center"
          }
          `}
          onClick={() => setActiveIndex(i)}
        >
          {tab.title}
        </span>
      ))}
    </div>
  );
};

export default Tab;
