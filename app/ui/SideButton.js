import { TfiMenu } from "react-icons/tfi";

export default function SideButton(){
    return (
       <>
        <div className="w-[40px] h-[40px] bg-transparent mt-[1px] pt-2.5 pl-[10px] rounded-full hover:bg-button">
            <TfiMenu color="grey" size={20}/>
        </div>
       </>
    )
}