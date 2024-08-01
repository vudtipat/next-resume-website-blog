'use client';

import Navbar from './components/Navbar';
import Footer from './components//Footer';
import './globals.css';
import { ThemeProvider } from 'next-themes';
import { useEffect, useState } from 'react';

type Props = {
  children?: React.ReactNode,
}

const Layout = ({children}: Props) => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
      setMounted(true);
    }, []);
    return (
      <html>
        <head>
            <link href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@300;400;700&display=swap" rel="stylesheet" />
        </head>
        <body className='flex fixed flex-col w-[100vw] h-[100vh]'>
            <ThemeProvider attribute="class">
              {
                mounted &&
                <div>
                  <Navbar />
                  <div className='w-[100vw] h-[80vh] overflow-y-scroll'>{children}</div>
                  <Footer />
                </div>  
              }
                          
            </ThemeProvider>
            
        </body>
      </html>        
    );
};

export default Layout;
