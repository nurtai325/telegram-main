'use client'
import { SlMagnifier } from "react-icons/sl";
import { useState } from "react";
import { useEffect } from "react";

export default function Searchbar(props) {
    const [value, setValue] = useState('');
    const [focus, setFocus] = useState(false);
    const [use, setUse] = useState(false);

        useEffect(() => {
          if (!use) {
            setFocus(false);
          } else {
            setFocus(true);
          }
        }, [use]);
      
    const handle = () => {
        
    }
    return (
        <div className={`group w-[334px] h-[42px] mt-[0px] flex bg-black rounded-3xl border ${focus ? 'border-focus' : "border-stone-800"} border-[1px] ${focus ? '' : "hover:border-white"} `} >
            <SlMagnifier className="mt-3 ml-5 group-focus:fill-blue" size={17} color={focus ? '#8774e1' : '#aaaaaa'}/>
            <input className={`border-none ml-4 focus:outline-none bg-transparent w-[248px] h-[38px] text-white`} placeholder="search" value={value} onChange={(e) => setValue(e.target.value)} onFocus={() => setUse(true)} onBlur={() => setUse(false)}/>
        </div>
    );
};

