import React from 'react'
import Header2 from '../components/Header2'
import Maps from '../components/Maps'

const Map = () => {
  return (
    <div>
        <Header2/>
       
        <div className='max-w-[1300px] mt-[100px] px-2 mx-auto'>
        <Maps/>
        </div>
    </div>
  )
}

export default Map