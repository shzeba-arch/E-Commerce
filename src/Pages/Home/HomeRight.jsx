import React from 'react'
import { Link } from 'react-router-dom'

const HomeRight = () => {
  return (
    <div className='pt-40'>
      {/* leading-tight */}
      <h1 className='sm:text-4xl font-bold md:text-5xl lg:text-7xl'>Discover The <br /> Latest Trends</h1>
      <p className='sm:text-xl md:text-2xl mt-3 md:mt-5'>Shop The Best Deals On our Latest Collections</p>
      <Link to='/shopNow'>
      <button className='bg-blue-950 hover:bg-blue-900 sm:mt-4 transition text-white px-3 py-1 rounded mt-1 cursor-pointer sm:w-64 md:mt-4'>Shop Now</button>
      </Link>
    </div>
  )
}

export default HomeRight