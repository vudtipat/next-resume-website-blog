import Link from 'next/link';

const Navbar = () => {
    return (
        <nav className="py-[10px] px-[30px] flex items-center justify-between h-[15%] border-b border-green-900/10">
            <span className='py-[14px] px-[30px] text-[#333] no-underline font-[800] text-2xl'>VudtipatSai</span>        
            <div className='flex font-extrabold'>                
                <Link className='py-[14px] px-[30px] no-underline text-[#333]' href="/">Home</Link>
                <Link className='py-[14px] px-[30px] no-underline text-[#333]' href="/about">About Me</Link>
                <Link className='py-[14px] px-[30px] no-underline text-[#333]' href="/contact">Blog</Link>
            </div>            
        </nav>
    );
};

export default Navbar;
