import React from 'react'

const About = () => {
  return (
    <div className='w-full p-18 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black' >
      <h1 className='font-["Nueue_Montreal"] text-[4vw] leading-[4vw] tracking-tight'>
        Ochi is a strategic partner for fast-growing tech 
        business that need to raise funds, sell products, 
        explain complex ideas, and hire great people.
      </h1>

      <div className='w-full border-t-[0.10vw] border-[#a1b562] mt-20 pt-8 flex gap-5'>
        
        <div className='w-1/2 '>
           <h1 className='text-6xl'>
            Our approach:
           </h1>
           <button className='px-6 py-4.5 mt-8 uppercase bg-zinc-900 rounded-full text-white flex items-center gap-10'>
            Read More
            <div className='w-2 h-2 bg-white rounded-full '></div>
           </button>
        </div>

        <div className='w-1/2 h-[65vh] rounded-3xl bg-[#b0c859] overflow-hidden '>
        <img src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-1326x939.jpg" alt="" />
        </div>

      </div>

    </div>
  )
}

export default About
