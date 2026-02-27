import { motion } from 'framer-motion';
import React from 'react'
import { MdOutlineArrowOutward } from "react-icons/md";


const LandingPage = () => {
  
  return (
    <div data-scroll data-scroll-speed="-.3" className='w-full h-screen bg-black pt-1'>
      <div className="textstructure mt-48 px-20 ">
        <div className="masker font-['Test_Founders_Grotesk_X-Condensed']">
            <h1 className='uppercase  leading-[6vw] tracking-tighter font-medium text-[7.5vw] '>
                We Create </h1>
        </div>
        <div className="masker flex items-center">
          <motion.div 
          initial={{width:0}} 
          animate={{width:"8vw"}} 
          transition={{ease: [0.76, 0, 0.24, 1], duration:1}} 
          className='mr-[1vw] w-[8vw] h-[5vw] rounded-xl overflow-hidden'>
            <img src="https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg" alt="" />
          </motion.div>
            <h1 className='uppercase leading-[6vw] tracking-tighter font-medium text-[7.5vw] font-["Test_Founders_Grotesk_X-Condensed"]'>
                Eye-Opening</h1>
        </div>
        <div className="masker ">
            <h1 className='uppercase leading-[6vw] tracking-tighter font-medium text-[7.5vw] font-["Test_Founders_Grotesk_X-Condensed"]'>
                Presentation </h1>
        </div>

      </div>
       <div className='border-t-2 border-zinc-800 mt-18 flex justify-between items-center py-4 px-18'>
         {["Presentation and storytelling agency", "For innovation teams and global brands"].map((item, index)=>(
            <p className='text-md font-light tracking-tight leading-none'>{item}</p>
         ))}

         <div className='start flex items-center gap-4'>
            <div className='border-2 rounded-full px-5 py-2 border-zinc-500 font-light text-'>START THE PROJECT</div>
            <div className='w-10 h-10 flex items-center justify-center border rounded-full'>
                <MdOutlineArrowOutward size={26}/>
            </div>
         </div>
       </div>
    </div>
  )
}

export default LandingPage
