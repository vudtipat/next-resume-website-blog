// src/components/Layout.tsx
import Navbar from './components/Navbar';
import Footer from './components//Footer';
import './globals.css';

type Props = {
  children?: React.ReactNode,
}

const Layout = ({children}: Props) => {
    return (
      <html>
        <head>
            <link href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@300;400;700&display=swap" rel="stylesheet" />
        </head>
        <body className='flex fixed flex-col w-[100vw] min-h-[100vh]'>
            <Navbar />
            <main>{children}</main>
            <Footer />
        </body>
      </html>        
    );
};

export default Layout;
