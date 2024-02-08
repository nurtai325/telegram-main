"use client";
import React from "react";
import Main from "./main/Main";
import "./global.css"
import InfoMain from "./right/navbar/InfoMain";
import { useCounterStore } from "./store";
import { DiVim } from "react-icons/di";

function Right() {
  const opened = useCounterStore((state) => state.opened);
    return(
      <div className="w-full h-full relative  bg-[#a3a3a3] flex">
        {opened === 0 ? 
        <div id="main" className="w-full h-full relative overflow-hidden bg-[#a3a3a3] ">
          <Main/>
        </div> 
        :
        <div className="w-full h-full relative overflow-hidden bg-[#a3a3a3] flex flex-row">
          <div id="main" className="w-[70%] h-full relative overflow-hidden bg-[#a3a3a3] ">
            <Main/>
          </div>
          <div className="w-[30%] h-full relative overflow-hidden bg-[#fff] ">
            <InfoMain />
          </div>
        </div>
      }
      </div>
    );
}

export default Right;