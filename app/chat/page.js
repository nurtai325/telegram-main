'use client'
import Side from "../ui/Side";
import Main from "../ui/Main";
import { useStore } from "../lib/store/store";
import { useRouter } from "next/navigation";

export default function Home() {
  const logged = useStore((state) => state.logged);
  if(!logged) {
    const route = useRouter();
    route.push('/');
  }
  return (
    <div className="flex flex-row">
        <Side />
        <Main />
    </div>
  );
};
