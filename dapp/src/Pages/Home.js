import React from 'react'
import bro from "../assets/bro.png"


const Home = () => {
  return (
  <div className='h-screen bg-green-300'>
    <div className='grid grid-cols-2'>
      <div className='items-center pt-32 pl-48'>
        <div className='font-bold text-6xl '>Build Your</div>
        <div className='font-bold text-6xl'>Business with us</div>
        <div className='pt-3 pb-10 font-normal'>Experience a revolution in online shopping with our decentralized e-commerce platform, where buyers and sellers connect directly, free from intermediaries, ensuring transparency, security, and empowerment for all.</div>
        <button className='border-2 border-red-400 text-xl font-bold  px-3 py-2 bg-red-400 rounded-lg hover:bg-white hover:border-white hover:text-red-600'>Shop Now !</button>
      </div>
      <div className='pl-20 pt-20'>
         <img src={bro} width={500} alt='img'></img> 
      </div>
      </div>
  </div>
  )
}

export default Home