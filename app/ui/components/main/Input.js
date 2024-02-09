"use client";
import React, { use, useState } from "react";
import { IoSend } from "react-icons/io5";
import { useCounterStore } from "../store";

function Input() {
  const [inputValue, setInputValue] = useState("");
  const { message, setText } = useCounterStore();

  const handleChange = (elem) => {
    setInputValue(elem.target.value);
    setText(elem.target.value);
  }

  const sendMess = () => {
    console.log(message);
  }

  return(
    <div className="relative z-10 bottom-23 w-[728px] h-[76px] px-[16px] flex">
      <div className="h-[56px] w-[632px]  bg-[#212121] rounded-[20px] flex select-none">
        <div className="h-[56px] w-[50px] rounded-[20px]"></div>
        <input type="text" className="w-[520px] h-[56px] bg-[#212121] shadow-none transition-none outline-none" 
        value={message}
        onChange={handleChange}
        placeholder="Message"/> 
        <div></div>

      </div>
      <button className="w-[56px] h-[56px]  rounded-[56px] bg-[#212121] absolute right-0 flex items-center justify-center ml-[10px]"
        onClick={sendMess}
      >
        <IoSend className="w-[24px] h-[24px] "/>
      </button>
    </div>
  );
}


export default Input;