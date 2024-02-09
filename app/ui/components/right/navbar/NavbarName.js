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
      <div className="w-full pl-[10px]">
        <div className="h-[22px] font-bold text-[18px] w-full">Almas Zhakanov</div>
      </div>
    </div>
  );
}


export default NavbarName;