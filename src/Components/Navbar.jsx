import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaSearch , FaHeart , FaShoppingCart, FaUser } from 'react-icons/fa'
import NavLogo from '../assets/navLogo.png'

const Navbar = () => {
    const [menu, setMenu] = useState('menu')
  return (
    <div className='flex justify-between py-5 px-10 text-white bg-blue-950 fixed w-screen'>
      <div className='flex gap-2'>
        <img src={NavLogo} className='w-10' alt="" />
        <h3 className='font-black text-2xl'>ShopEase</h3>
      </div>

      <div>
        <ul className='flex gap-5 text-xl'>
          <li onClick={() => {
            setMenu('Home')
          }}>
            <Link>Home{menu === "Home" ? <hr className='border-none h-0.5 w-12 bg-red-200 mx-auto mt-1 rounded'  /> : <></>}</Link>
          </li>
          <li onClick={() => {
            setMenu('Man')
          }}>
            <Link>Man{menu === "Man" ? <hr className='border-none h-0.5 w-8 bg-red-200 mx-auto mt-1 rounded' /> : <></>}</Link>
          </li>
          <li onClick={() => {
            setMenu('Women')
          }}>
            <Link>Women{menu === "Women" ? <hr className='border-none h-0.5 w-15 bg-red-200 mx-auto mt-1 rounded'  /> : <></>}</Link>
          </li>
          <li>
            <Link onClick={() => {
                setMenu('Kids')
            }}>Kids{menu === "Kids" ? <hr className='border-none h-0.5 w-8 bg-red-200 mx-auto mt-1 rounded'  /> : <></>}</Link>
          </li>
          <li>
            <Link onClick={() => {
                setMenu('Electronic')
            }}>Electronic{menu === "Electronic" ? <hr className='border-none h-0.5 w-20 bg-red-200 mx-auto mt-1 rounded'  /> : <></>}</Link>
          </li>
        </ul>
      </div>

      <div className='flex gap-4'>
        <div className='flex gap-3 rounded bg-white text-blue-950 border-2 outline-none px-2 py-1'>
          <FaSearch className='mt-1.5 cursor-pointer' />
          <input type="text" className="text-black outline-none" placeholder="Search Products..." />
        </div>
        <div className='flex gap-5 mt-2'>
            <FaHeart size={20} className='mt-1 cursor-pointer' />
        <FaShoppingCart size={20} className='mt-1 cursor-pointer' />
        <div className='rounded-full px-1 py-1 border-white border-2 cursor-pointer'>
            <FaUser size={17} />
        </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar