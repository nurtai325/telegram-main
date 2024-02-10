'use client'
import Side from "../../ui/Side";
import Main from "../../ui/Main";
import { useStore } from "../../lib/store/store";
import { useRouter } from "next/navigation";
import { useParams } from "next/navigation";
import { useEffect } from "react";
import axios from "axios";



export default function Home() {
  const logged = useStore((state) => state.logged);
  const { chat } = useParams();
  const setSecondUserName = useStore((state) => state.setSecondUserName);
  setSecondUserName(chat);


  const setMessages = useStore((state) => state.setMessages);
  if(!logged) {
    const route = useRouter();
    route.push('/login');
  }
  console.log(useParams());
  useEffect(() => {
    axios.post('http://localhost:8000/api/messages', {'chat': 'Root'})
      .then(function (response) {
          const {messages} = response.data;
          console.log(messages);
          setMessages(messages);
      })
      .catch(function (err) {
          console.log(err)
      })
  }, [])

  return (
    <div className="flex flex-row">
        <Side />
        <Main />
    </div>
  );
};
