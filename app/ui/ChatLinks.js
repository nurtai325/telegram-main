import ChatLink from "./ChatLink"
import { useState } from "react";
import { useStore } from "../lib/store/store";


export default function ChatLinks() {
    const filteredList = useStore((state) => state.filteredList);
    return (
        <div className="h-full mt-1">
            <ul className="px-[8px] ">
                {filteredList.map((props) => <ChatLink key='' {...props}/>)}
            </ul>
        </div>
    );
};