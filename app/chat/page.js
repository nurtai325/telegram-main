'use client'
import Side from "../ui/Side";
import Main from "../ui/Main";
import { useStore } from "../lib/store/store";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import axios from "axios";

export default function Home() {
  const logged = useStore((state) => state.logged);
  if(!logged) {
    const route = useRouter();
    route.push('/');
  }
  const username = useStore((state) => state.username);
  const setChats = useStore((state) => state.setChats);
  const setLoading = useStore((state) => state.setLoading);
  const setMessages = useStore((state) => state.setMessages);
  useEffect(() => {
    
    axios.post('http://localhost:8000/api/chats', {'username': username})
    .then(function (response) {
        const {chats} = response.data;
        console.log(chats);
        setChats(chats);
        setLoading(false);
    })
    .catch(function (err) {
        console.log(err)
    })

    axios.post('http://localhost:8000/api/messages', {'chat_id': 1})
    .then(function (response) {
        const {messages} = response.data;
        console.log(messages);
        setMessages(messages);
    })
    .catch(function (err) {
        console.log(err)
    })
  }, []);
  

  return (
    <div className="flex flex-row">
        <Side />
        <Main />
    </div>
  );
};
