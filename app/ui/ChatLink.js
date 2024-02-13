'use client'
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/navigation';

export default function ChatLink(props) {
    const pathname = usePathname();
    const router = useRouter();
    function handle() {
        router.push(`/chat/${props.chat}`)
    }
    return (
        <>
        <button onClick={handle} className={`flex flex-row ml-1 w-[390px] h-[52px] rounded-xl ${pathname === `/chat/${props.chat}` ? 'bg-focus' : 'hover:bg-button'} pt-[11px]`}>
            <div className='flex flex-col pl-2 ml-3 w-full'>
                <div className='flex flex-row w-full'>
                    <span className='text-white font-bold text-2xl mt-0'>{props.chat}</span>
                </div>
            </div>
        </button>
        </>
    );
};