import { PiAddressBookBold } from "react-icons/pi";
import Link from 'next/link'

export default function SideButton(){
    return (
       <Link href='/create'>
        <div className="w-[40px] h-[40px] bg-transparent mt-[1px] pt-2 pl-[6px] rounded-full hover:bg-button">
            <PiAddressBookBold color="grey" size={25}/>
        </div>
       </Link>
    )
}