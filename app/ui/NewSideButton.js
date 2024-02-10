import { GoArrowLeft } from "react-icons/go";
import Link from 'next/link'

export default function NewSideButton(){
    return (
       <Link href='/chat'>
        <div className="w-[40px] h-[40px] bg-transparent mt-[1px] pt-2 pl-[6px] rounded-full hover:bg-button">
            <GoArrowLeft color="grey" size={25}/>
        </div>
       </Link>
    )
}