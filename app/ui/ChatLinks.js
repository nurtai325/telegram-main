import ChatLink from "./ChatLink"
import { useState } from "react";
import { useStore } from "../lib/store/store";

export default function ChatLinks() {
    const chats = useStore((state) => state.chats);
    const loading = useStore((state) => state.loading);
    const username = useStore((state) => state.username);

    return (
        <div className="h-full mt-1">
            <ul className="px-[8px] ">
                {loading ? <p className="text-white ml-3">Loading</p> : 
                chats.map((props) => <ChatLink key='' 
                chat={props.user1 != username ? props.user1 : props.user2} />)}
            </ul>
        </div>
    );
};