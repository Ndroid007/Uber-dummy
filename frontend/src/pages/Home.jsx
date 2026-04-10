import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <div className='bg-cover bg-center bg-[url(uber-bg.jpg)] h-screen pt-8 flex justify-between flex-col w-full bg-[#8191b2]'>
        <img className='w-16 ml-8' src="uber-logo.png" alt="logo" />
        <div className='bg-white pb-7 py-4 px-4'>
          <h2 className='text-2xl font-bold'>Get Started with Uber</h2>
          <Link to='/user-login' className='flex justify-center bg-black w-full text-white font-bold py-4 rounded mt-4'>Continue</Link>
        </div>
      </div>
    </div>
  )
}

export default Home
