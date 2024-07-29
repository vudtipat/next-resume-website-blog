'use client';

import Link from 'next/link';
import { useState } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";

const Navbar = () => {

    const [showMenu,setShowMenu] = useState(false);

    return (
        <div className='flex flex-col relative'>
            <div className="py-[10px] px-0 md:px-[30px] flex items-center justify-between h-[10vh] border-b border-green-900/10">
                <span className='py-[14px] px-4 md:px-[30px] text-[#333] no-underline font-[800] text-2xl'>Vudtipat<span className='text-gray-600/40'>Sai</span></span>        
                <div className='hidden md:flex md:font-extrabold'>                
                    <Link className='py-[14px] px-[30px] no-underline text-[#333] hover:text-[#A91D3A]' href="/">Home</Link>
                    <Link className='py-[14px] px-[30px] no-underline text-[#333] hover:text-[#A91D3A]' href="/about">About Me</Link>
                    <Link className='py-[14px] px-[30px] no-underline text-[#333] hover:text-[#A91D3A]' href="/blog">Blog</Link>
                </div>   
                <div className='px-4 flex items-center justify-center md:hidden'>
                    {showMenu ?                        
                        <GrClose size={30} onClick={() => setShowMenu(!showMenu)}/> :
                        <GiHamburgerMenu size={30} onClick={() => setShowMenu(!showMenu)}/> 
                    }
                </div>         
            </div>
            {
                showMenu ? (
                    <div className='flex flex-col absolute w-[100%] top-[10vh] z-50 bg-white md:hidden shadow-lg'>
                        <Link className='py-[14px] px-4 no-underline text-[#333] font-extrabold border-b border-green-900/10' onClick={() => setShowMenu(!showMenu)} href="/">Home</Link>
                        <Link className='py-[14px] px-4 no-underline text-[#333] font-extrabold border-b border-green-900/10' onClick={() => setShowMenu(!showMenu)} href="/about">About Me</Link>
                        <Link className='py-[14px] px-4 no-underline text-[#333] font-extrabold border-b border-green-900/10' onClick={() => setShowMenu(!showMenu)} href="/blog">Blog</Link>
                    </div>) : 
                    <></>
            }            
        </div>
        
    );
};

export default Navbar;
