import React from 'react'
import Daily from '../assets/dailydose.png'

const Home = () => {
  return (
    <div name="home" className="h-screen w-full ">
    <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
    <div className='grid md:grid-cols-2 max-w-[1240px] m-auto'>
          <div className='flex flex-col justify-center p-4'>
              <h1 className='text-2xl md:text-5xl font-bold '>KapeCartel Co.</h1>
              <p className='text-xl mt-4 md:text-xl font-medium '>Your Daily Dose of Caffeine</p>
          </div>
          <img className='w-[500px] p-4 mx-auto my-4 rounded-2xl' src={Daily} alt='/' />
      </div>
    </div>
</div>
  )
}

export default Home