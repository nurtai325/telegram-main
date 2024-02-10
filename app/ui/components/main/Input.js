"use client";
import React, { use, useState } from "react";
import { IoSend } from "react-icons/io5";
import { useCounterStore } from "../store";
import { useMessages } from "@/app/lib/store/store";
import { useStore } from "@/app/lib/store/store";
import axios from "axios";

function Input() {
  // const [inputValue, setInputValue] = useState("");
  const { message, setText } = useCounterStore();
  const secondUserName = useStore((state) => state.secondUserName);
  const addingMessage = useMessages((state) => state.addingMessage);
  const chats = useStore((state) => state.chats);
  let chat_id = 0;

  chats.map((el, index) => {
    if (el.user1 == secondUserName || el.user2 == secondUserName) {
      chat_id = index;
      console.log("chat_ic" + chat_id)
      return;
    }
  });
  
  const clearInput = () => {
    setText('');
  }

  const handleChange = (elem) => {
    // setInputValue(elem.target.value);
    setText(elem.target.value);
  }


  const sendMessage = async (time) => {
    axios.post('http://localhost:8000/api/send', {"message": message, "time": time, "chat_id": chat_id})
        .then(function (response) {
            const {insert} = response.data;
            console.log(insert);
            
        })
        .catch(function (err) {
            console.log(err)
    })
  }
  

  const sendMess = () => {
    if(message !== "") {
      let date = new Date();
      const data = date.getHours() + ":" + date.getMinutes() + ":";
      addingMessage({text: message, time: data})
      clearInput();
      
      sendMessage(data);
    }
  }

  const sendMessKey = (e) => {
    if(e.key == "Enter" && message !== "") {
      let date = new Date();
      const data = date.getHours() + ":" + date.getMinutes() + ":";
      addingMessage({text: message, time: data})
      clearInput('');

      sendMessage(data);
    }
  }

  return(
    <div className="relative z-10 bottom-23 w-[728px] h-[76px] px-[16px] flex">
      <div className="h-[56px] w-[632px]  bg-[#212121] rounded-[20px] flex select-none">
        <div className="h-[56px] w-[50px] rounded-[20px]"></div>
        <input type="text" className="w-[520px] h-[56px] bg-[#212121] shadow-none transition-none outline-none" 
        value={message}
        onChange={handleChange}
        onKeyDown={sendMessKey}
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