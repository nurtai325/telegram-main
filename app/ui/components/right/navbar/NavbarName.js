"use client";
import React from "react";
import { useCounterStore } from "../../store";


function NavbarName() {

  const openInfo = () => {
    console.log("HI");
  }

  const increment = useCounterStore((state) => state.increment)

  return(
    <div className="flex items-center justify-around w-full select-none cursor-pointer"
    onClick={increment}>
      <div className="person-img w-[40px] h-[40px] rounded-[20px] bg-white"></div>
      <div className="w-full pl-[10px]">
        <div className="h-[22px] font-bold text-[18px] w-full">Almas Zhakanov</div>
        <div className="font-light w-full">last seen 2 hours ago</div>
      </div>
    </div>
  );
}


export default NavbarName;