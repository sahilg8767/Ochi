import { motion, useAnimation } from 'framer-motion'
import React, { useState } from 'react'
import {Power4} from "gsap/all"

const Feature = () => {
  
  const cards = [useAnimation(), useAnimation(), useAnimation(), useAnimation()]

  const handleHover=(index)=>{
    cards[index].start({y:"0"})
  }

  const handleHoverEnd=(index)=>{
    cards[index].start({y:"100%"})
  }
  
  return (
    <div data-scroll data-scroll-section className='w-full py-18 bg-black'>
        <div className='w-full px-18  border-b border-solid border-zinc-700 pb-18'>
            <h1 className='text-7xl font-["Nueue_Montreal"] tracking-tight  '>Featured projects</h1>
        </div>

        <div className='px-18'>
            <div className="cards w-full flex flex-wrap gap-x-10 gap-y-20 mt-8">

                <motion.div 
                   onHoverStart={()=>handleHover(0)} 
                   onHoverEnd={()=>handleHoverEnd(0)}
                   className="cardcontainer  w-[48%] h-[70vh] relative "
                >
                    <div className='card w-full h-full rounded-xl overflow-hidden '>
                    <h1 className='absolute flex overflow-hidden text-[#CDEA68] left-full -translate-x-1/2 top-1/2 -translate-y-1/2  z-[9] text-8xl leading-none tracking-tight font-semibold'>
                      {"SALIENCE LAB".split('').map((item,index)=>( 
                        <motion.span
                       initial={{y:"100%"}}
                       animate={cards[0]}
                       transition={{ease:[0.22, 1, 0.36, 1], delay:index*0.05}}
                        className='inline-block '>{item}
                        </motion.span>
                     ))}
                    </h1>
                    <div className='card w-full h-full rounded-xl overflow-hidden'>
                      <img className='w-full h-full bg-cover' src="https://ochi.design/wp-content/uploads/2025/02/Salience_Website_cover-1326x1101.png" alt="" />
                    </div>
                      
                   </div>
                </motion.div>

                <motion.div
                   onHoverStart={()=>handleHover(1)} 
                   onHoverEnd={()=>handleHoverEnd(1)} 
                   className="cardcontainer rounded-xl w-[48%] h-[70vh] relative ">
                   <div className='card w-full h-full rounded-xl overflow-hidden  '>
                    <h1 className='absolute flex overflow-hidden text-[#CDEA68] right-full translate-x-1/2 top-1/2 -translate-y-1/2  z-[9] text-8xl leading-none tracking-tight font-semibold'>
                      {"MEDALLIA EXPERIENCE".split('').map((item,index)=>( 
                       <motion.span
                       initial={{y:"100%"}}
                       animate={cards[1]}
                       transition={{ease:[0.22, 1, 0.36, 1], delay:index*0.05}}
                        className='inline-block '>{item}
                        </motion.span>
                     ))}
                    </h1>
                    <div className='card w-full h-full rounded-xl overflow-hidden'>
                    <img className='h-full w-full bg-cover' src="https://ochi.design/wp-content/uploads/2025/08/Med_Website_0.png" alt="" />
                    </div>
                   </div>
                </motion.div>

                <motion.div
                 onHoverStart={()=>handleHover(2)} 
                onHoverEnd={()=>handleHoverEnd(2)}
                 className="cardcontainer  w-[48%] h-[70vh] relative ">
                    <div className='card w-full h-full rounded-xl overflow-hidden '>
                    <h1 className='absolute flex overflow-hidden text-[#CDEA68] left-full -translate-x-1/2 top-1/2 -translate-y-1/2  z-[9] text-8xl leading-none tracking-tight font-semibold'>
                      {"AH2 & Matt Horn".split('').map((item,index)=>( 
                       <motion.span
                       initial={{y:"100%"}}
                       animate={cards[2]}
                       transition={{ease:[0.22, 1, 0.36, 1], delay:index*0.05}}
                        className='inline-block '>{item}
                        </motion.span>
                     ))}
                    </h1>
                    <div className='card w-full h-full rounded-xl overflow-hidden'>
                      <img className='w-full h-full bg-cover' src="https://ochi.design/wp-content/uploads/2024/08/Frame-481692-1-1326x1101.png" alt="" />
                      </div>
                   </div>
                </motion.div>

                
                <motion.div
                 onHoverStart={()=>handleHover(3)} 
                onHoverEnd={()=>handleHoverEnd(3)}
                className="cardcontainer w-[48%] h-[70vh] relative ">
                    <div className='card w-full h-full rounded-xl overflow-hidden '>
                    <h1 className='absolute flex overflow-hidden text-[#CDEA68] right-full translate-x-1/2 top-1/2 -translate-y-1/2  z-[9] text-8xl leading-none tracking-tight font-semibold'>
                      {"VISE".split('').map((item,index)=>( 
                        <motion.span
                       initial={{y:"100%"}}
                       animate={cards[3]}
                       transition={{ease:[0.22, 1, 0.36, 1], delay:index*0.05}}
                        className='inline-block '>{item}
                        </motion.span>
                     ))}
                    </h1>
                    <div className='card w-full h-full rounded-xl overflow-hidden'>
                      <img className='w-full h-full bg-cover' src="https://ochi.design/wp-content/uploads/2025/02/Vise_Front-1-1326x1101.png" alt="" />
                      </div>
                   </div>
                </motion.div>
            </div>
        </div>

      
    </div>
  )
}

export default Feature
