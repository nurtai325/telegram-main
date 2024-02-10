'use client'
import NewHeader from "../ui/NewHeader";
import Main from "../ui/Main";
import { useStore } from "../lib/store/store";
import { useRouter } from "next/navigation";
import NewChats from "../ui/NewChats";

export default function Side(props) {
    const logged = useStore((state) => state.logged)
    if(!logged) {
        const route = useRouter();
        route.push('/login');
      }
    return (
        <div className="flex flex-row"><div className="w-[420px] h-full border-t-black">
            <NewHeader/>
            <NewChats/>
            <div className="absolute hidden top-36 left-44 w-96 h-96 bg-secondary shadow-2xl z-40">

            </div>
        </div>
        <Main/></div>
    );
};