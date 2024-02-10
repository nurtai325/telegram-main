import NewChatLink from "./newChatLink";
import { useState } from "react";
import { useStore } from "../lib/store/store";

export default function NewChats() {
    const searchChats = useStore((state) => state.searchChats);
    const username = useStore((state) => state.username);
    console.log(username);
    console.log(searchChats);
    return (
        <div className="h-full mt-1">
            <ul className="px-[8px] ">
                {searchChats.map((chat) => <NewChatLink key='' 
                chat={chat.user1 != username ? chat.user1 : chat.user2} />)}
            </ul>
        </div>
    );
};