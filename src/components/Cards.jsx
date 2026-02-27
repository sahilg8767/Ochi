import React from 'react'

const Cards = () => {
  return (
    <div className='w-full h-screen bg-black flex items-center gap-5 px-30'>
      <div className='cardcontainer w-1/2 h-[50vh]'>
          <div className='card rounded-xl w-full h-full bg-[#004D43] flex items-center justify-center relative '>
            <img className='w-32`' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
            <button className='absolute left-10 bottom-10 px-5 py-1 border-2 rounded-full '>&copy; 2019-2025</button>
          </div>
      </div>

      <div className='cardcontainer w-1/2 h-[50vh] flex gap-5'>
          <div className='card rounded-xl w-1/2 h-full bg-[#192826] flex items-center justify-center relative '>
             <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
             <button className='absolute left-5 bottom-10 px-3 py-1 border-2 rounded-full '>Rating 5.0 on Clutch</button>
          </div>
          <div className='card rounded-xl w-1/2 h-full bg-[#192826] flex items-center justify-center relative '>
              <img  className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />
              <button className='absolute left-5 bottom-10 px-3 py-1 border-2 rounded-full '>Buisness Bootcamp Alumni</button>
          </div>
      </div>
    </div>
  )
}

export default Cards
