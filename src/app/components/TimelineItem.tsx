"use client";
import React from "react";
import { motion } from 'framer-motion';

type Props = {
  timelineData: TimelineData,
}

const TimelineItem = ({ timelineData }: Props) => {

  return (
    <motion.div 
      className="flex p-5 rounded-md relative"
      initial="hidden"
      whileInView="visible"
      variants={{hidden: { opacity: 0, y: 20 },visible: { opacity: 1, y: 0, transition: { duration:1.5 } }}}
    >
      <div className="bg-white p-5 rounded-md relative shadow-custom w-[100%]">
        <span className="bg-[#A91D3A] text-white py-[5px] px-[10px] rounded-[3px] text-sm font-bold">{timelineData.period}</span>
        <h3 className="font-extrabold text-xl mt-2">{timelineData.company_name}</h3>
        <h4 className="font-bold text-lg">{timelineData.role}</h4>
        <p>{timelineData.description}</p>
        {timelineData.jobResponsibility?.map((data, idx) => <li key={idx}>{data}</li>)}
        <span className="w-5 h-5 bg-[#A91D3A] rounded-[50%] absolute left-[-10px] top-5"/>
      </div>
    </motion.div>
  );
};

export default TimelineItem;
