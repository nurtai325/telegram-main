'use client'
import { useRouter } from "next/navigation";
import { useStore } from "./lib/store/store";
import Login from "./ui/Login";
import { Axios } from "axios";
import { useState } from "react";

export default function Home() {
  const [login, setLogin] = useState(true);
  const logged = useStore((state) => state.logged);
  if(logged) {
    const route = useRouter();
    route.push('/chat/');
  } else {
    const route = useRouter();
    route.push('/register');
  }
  return (
    <>
      
    </>
  );
};
