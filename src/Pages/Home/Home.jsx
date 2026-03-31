import React from 'react'
import HomeRight from './HomeRight'
import HomeLeft from './HomeLeft'

const Home = () => {
  return (
    <div className='mb-10 flex justify-between lg:pl-30 md:pl-20 sm:pl-10 bg-amber-50 h-auto'>
      <HomeRight />
      <HomeLeft />
    </div>
  )
}

export default Home