import Link from 'next/link'
import Image from 'next/legacy/image'
import { usePathname } from 'next/navigation';

export default function NewChat(props) {
    const handle = () => {

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