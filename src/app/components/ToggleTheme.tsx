import { useTheme } from "next-themes";
import React from "react";
import { IoSunny, IoMoon } from "react-icons/io5";

export default function ToggleTheme() {
  const { setTheme, theme } = useTheme();

  return (
    <>
        <button className="hidden md:block md:px-[30px]" onClick={() => setTheme(theme == "light" ? "dark" : "light")}>
        {
            theme == "light" ? <IoMoon size={30}/> : <IoSunny size={33}/> 
        }       
        </button>
        <button className="md:hidden flex" onClick={() => setTheme(theme == "light" ? "dark" : "light")}>
        {
            theme == "light" ? 
            <p className='w-[100%] flex justify-start py-[14px] px-4 text-[#333] dark:text-white dark:bg-[#121212] font-extrabold border-b dark:border-gray-500/30 border-green-900/10'>DarkMode</p> : 
            <p className='w-[100%] flex justify-start py-[14px] px-4 text-[#333] dark:text-white dark:bg-[#121212] font-extrabold border-b dark:border-gray-500/30 border-green-900/10'>LightMode</p>
        }       
        </button>
    </>
  );
}
