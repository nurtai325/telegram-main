import { IoIosAddCircleOutline } from "react-icons/io";
import Link from 'next/link'

export default function SideButton(){
    return (
       <Link href='/create'>
        <div className="w-[40px] h-[40px] bg-transparent mt-[1px] pt-2 pl-[7.5px] rounded-full hover:bg-button">
            <IoIosAddCircleOutline color="grey" size={25}/>
        </div>
       </Link>
    )
}