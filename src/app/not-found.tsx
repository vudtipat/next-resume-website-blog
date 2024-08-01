"use client";

import { motion } from 'framer-motion'; 

export default function NotFound() {
  return (
    <motion.div 
        className="flex flex-col h-[100%] md:flex-row items-center justify-center md:space-x-6"
        initial="hidden"
        animate="visible"
        variants={{hidden: { opacity: 0, y: 20 },visible: { opacity: 1, y: 0, transition: { duration:1} }}}
    >
      <div className="space-x-2 pb-8 pt-6 md:space-y-5">
        <h1 className="text-6xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 md:border-r-2 md:px-6 md:text-8xl md:leading-14">
          404
        </h1>
      </div>
      <div className="max-w-md flex flex-col items-center text-center">
        <p className="mb-4 text-xl font-bold leading-normal md:text-2xl">
          Sorry we couldn't find this page.
        </p>
        <p className="mb-8">But dont worry, you can find plenty of other things on our homepage.</p>
      </div>
    </motion.div>
  )
}
