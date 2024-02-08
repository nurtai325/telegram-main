import Link from 'next/link'
import Image from 'next/legacy/image'
import { usePathname } from 'next/navigation';

export default function ChatLink(props) {
    const pathname = usePathname();
    return (
        <Link href={`/chat/${props.chat}`} className={`flex flex-row ml-1 w-[390px] h-[72px] rounded-xl ${pathname === `/chat/${props.chat}` ? 'bg-focus' : 'hover:bg-button'} pt-[11px]`}>
            <div className='flex flex-col pl-2 ml-3 w-full'>
                <div className='flex flex-row w-full'>
                    <span className='text-white font-bold text-base mt-1'>{props.chat}</span>
                    <span className='text-xs text-white ml-auto mr-3'>{props.time}</span>
                </div>
                <div className='flex flex-row '>
                    <p className='text-sm mt-[0px] mb-1 text-white'>{props.text}</p>
                    <div className='w-[37px] h-[25px] ml-auto mr-[9px] text-center text-white font-bold text-base bg-zinc-500 rounded-full'>{props.count}</div>
                </div>
            </div>
        </Link>
    )
}