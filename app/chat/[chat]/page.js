'use client'
import Side from "../../ui/Side";
import Main from "../../ui/Main";
import { useStore } from "../../lib/store/store";
import { useRouter } from "next/navigation";
import { useParams } from "next/navigation";
import { useEffect } from "react";
import axios from "axios";

export default function Home() {
  const {chat} = useParams();
  const logged = useStore((state) => state.logged);
  const setMessages = useStore((state) => state.setMessages);
  if(!logged) {
    const route = useRouter();
    route.push('/login');
  }
  console.log(chat);

  return (
    <div className="flex flex-row">
        <Side />
        <Main />
    </div>
  );
};
