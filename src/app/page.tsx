'use client'
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <motion.div 
      className="flex px-3 flex-col h-[100%] justify-center items-center"
      initial="hidden"
      whileInView="visible"
      variants={{hidden: { opacity: 0, y: 20 },visible: { opacity: 1, y: 0, transition: { duration: 2 } }}}
    >
      <TypeAnimation
        sequence={[          
          "",
          1000,
          "สวัสดี, I'm Vudtipat Saishana 👋🏻",
          1000,
          "Wellcome to my website (˶ˆᗜˆ˵) ...",
          1000
        ]}
        speed={50}
        style={{wordBreak:'break-word'}}
        className="text-xl text-center font-thin break-words lg:text-3xl lg:font-light"
      />
      <div className="flex gap-x-6 flex-row justify-between mt-[100px]">
        <Link target="_blank" href={'https://github.com/vudtipat/'}>
          <FaGithub size={36}/>
        </Link>
        <Link target="_blank" href={'https://www.linkedin.com/in/vudtipat-saichana-b65312132/'}>
          <FaLinkedin size={36}/>
        </Link>
      </div>
    </motion.div>
  );
}
