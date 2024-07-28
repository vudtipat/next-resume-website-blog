'use client'
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex px-3 flex-col h-[100%] justify-center items-center">
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
    </div>
  );
}
