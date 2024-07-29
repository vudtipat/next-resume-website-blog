"use client";
import React from 'react'
import { motion } from 'framer-motion';

type Props = {
    cardTitle?: string;
    children?: React.ReactNode
}

const LabeledContainer = ({cardTitle, children}: Props) => {
  return (
    <motion.div 
        className="flex p-5 rounded-md relative"
        initial="hidden"
        whileInView="visible"
        variants={{hidden: { opacity: 0, y: 20 },visible: { opacity: 1, y: 0, transition: { duration: 1.5 } }}}
    >
      <div className="bg-white p-5 rounded-md relative shadow-custom w-[100%]">
        <span className="bg-[#A91D3A] text-white absolute top-[-10px] left-[-10px] py-[5px] px-[10px] rounded-[3px] text-base font-bold">{cardTitle}</span>
        {children}
      </div>
    </motion.div>
  )
}

export default LabeledContainer