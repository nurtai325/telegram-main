'use client'
import Side from "../ui/Side";
import Main from "../ui/Main";
import { useStore } from "../lib/store/store";
import Login from "../login/page";

export default function Home() {
  const logged = useStore((state) => state.logged);
    
  return (
    <>
      {logged ? <div className="flex">
        <Side />
        <Main />
      </div> : <Login/>}
    </>
  );
};
