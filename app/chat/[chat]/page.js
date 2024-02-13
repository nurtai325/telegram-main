'use client'
import Side from "../../ui/Side";
import Main from "../../ui/Main";
import { useMessages, useStore } from "../../lib/store/store";
import { useRouter } from "next/navigation";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "axios";



export default function Home() {
  const logged = useStore((state) => state.logged);
  const username = useStore((state) => state.username);
  const { chat } = useParams();
  const setSecondUserName = useStore((state) => state.setSecondUserName);
  setSecondUserName(chat);
  const setChats = useStore((state) => state.setChats);
  const setMessages = useMessages((state) => state.setMessages);
  const secondUserName = useStore((state) => state.secondUserName);
  const chats = useStore((state) => state.chats);
  const setChatsStatic = useStore((state) => state.setChatsStatic);
  const setLoading = useStore((state) => state.setLoading);
  const chatsStatic = useStore((state) => state.chatsStatic);
  const route = useRouter();
  if(!logged) {
    
    route.push('/login');
  }
  let here;
  useEffect(() => {
    const start = async () => {
      try{
        const response = await axios.post('http://51.20.185.25:8000/api/chats', {'username': username});
        const {chats} = response.data;
        setChats(chats);
        setChatsStatic(chats);
      }
      catch (err) {
        throw err;
      }
      

      chatsStatic.forEach((el) => {
        if (el.user1 == secondUserName || el.user2 == secondUserName) {
          here = el.chat_id;
          console.log(here);
          return;
        }
      });
      if(here != undefined) {
        axios.post('http://51.20.185.25:8000/api/messages', {'chat': `${here}`})
        .then(function (response) {
            const {messages} = response.data;
            console.log(messages);
            setMessages(messages);
        })
        .catch(function (err) {
            console.log(err)
        })
      }
    } 
    start();
    
  }, [route])

  return (
    <div className="flex flex-row">
        <Side />
        <Main chat={here} />
    </div>
  );
};
