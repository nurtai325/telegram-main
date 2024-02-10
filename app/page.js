'use client'
import { useRouter } from "next/navigation";
import { useStore } from "./lib/store/store";

export default function Home() {
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
