'use client'
import { useStore } from "../lib/store/store";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function NewChat(props) {
    const username = useStore((state) => state.username);
    const route = useRouter();
    const handle = async () => {
        try {
            const response = await axios.post('http://localhost:8000/api/create', {'username': username, 'user_name': props.chat});
            const { insert } = response.data;
            if (insert) {
                console.log('yes');
                route.push(`/chat/${props.chat}`);
            } else {
                alert('Failed to create a chat. Try again');
            }
        } catch (err) {
            console.log(err);
        }
    }
    return (
        <>
        <button onClick={handle} className={`flex flex-row ml-1 w-[390px] h-[52px] rounded-xl hover:bg-button pt-[11px]`}>
            <div className='flex flex-col pl-2 ml-3 w-full'>
                <div className='flex flex-row w-full'>
                    <span className='text-white font-bold text-2xl mt-0'>{props.chat}</span>
                </div>
            </div>
        </button>
        </>
    );
};