import React from 'react'
import Header2 from '../components/Header2'
import Maps from '../components/Maps'
import Footer from '../components/Footer'

const Map = () => {
  return (
    <div className='h-[100%]'>
        <Header2/>
       
        <div className='max-w-[1300px] mt-[40px] md:mb-[60px] mb-[220px] px-2 mx-auto'>
        <Maps/>
        </div>
        <Footer/>
    </div>
  )
}

export default Map