import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaSearch , FaHeart , FaShoppingCart, FaUser } from 'react-icons/fa'
import NavLogo from '../assets/navLogo.png'
import navOpen from '../assets/nav_open_img.png';
import navClose from '../assets/nav_close_img.png'


const Navbar = () => {
    const [menu, setMenu] = useState('menu');
    const [isOpen, setIsOpen] = useState(false)
  return (
    <div className='flex justify-between py-4.5 rounded-b-xl px-10 text-white bg-blue-950 fixed w-screen'>
      <div className='flex gap-2'>
        <img src={NavLogo} className='w-10' alt="" />
        <h3 className='font-black text-2xl'>ShopEase</h3>
      </div>

      {/* desktop */}

      <div className='sm:hidden lg:block md:hidden'>
        <ul className='flex gap-5 text-xl'>
          <li onClick={() => {
            setMenu('Home')
          }}>
            <Link to='/home'>Home{menu === "Home" ? <hr className='border-none h-0.5 w-12 bg-red-200 mx-auto mt-1 rounded'  /> : <></>}</Link>
          </li>
          <li onClick={() => {
            setMenu('Man')
          }}>
            <Link to='/man'>Man{menu === "Man" ? <hr className='border-none h-0.5 w-8 bg-red-200 mx-auto mt-1 rounded' /> : <></>}</Link>
          </li>
          <li onClick={() => {
            setMenu('Women')
          }}>
            <Link to='/women'>Women{menu === "Women" ? <hr className='border-none h-0.5 w-15 bg-red-200 mx-auto mt-1 rounded'  /> : <></>}</Link>
          </li>
          <li>
            <Link to='/kids' onClick={() => {
                setMenu('Kids')
            }}>Kids{menu === "Kids" ? <hr className='border-none h-0.5 w-8 bg-red-200 mx-auto mt-1 rounded'  /> : <></>}</Link>
          </li>
          <li>
            <Link to='/electronic' onClick={() => {
                setMenu('Electronic')
            }}>Electronic{menu === "Electronic" ? <hr className='border-none h-0.5 w-20 bg-red-200 mx-auto mt-1 rounded'  /> : <></>}</Link>
          </li>
        </ul>
      </div>

      {/* mobile */}
      <div className='lg:hidden sm:block md:block '>
        <img src={isOpen ? navClose : navOpen} className='w-7 h-7 cursor-pointer mt-1.5 rounded-2xl border-red-400 border-2 p-1 bg-white' alt="" onClick={() => {
          setIsOpen(!isOpen)
        }} />
      </div>

      {
        isOpen && (
        <div className='bg-white absolute top-17 pl-10 border-gray-300 border-2 left-0 w-full shadow-md md:hidden'>
          <ul className='flex justify-center text-xl items-center gap-4 py-4 text-md text-blue-950'>

          <li onClick={() => {
            setMenu('Home')
          }}>
            <Link to='/home' onClick={() => {
              setIsOpen(false)
            }}>Home{menu === "Home" ? <hr className='border-none h-0.5 w-12 bg-red-400 mx-auto mt-1 rounded'  /> : <></>}</Link>
          </li>

          <li onClick={() => {
            setMenu('Man')
          }}>
            <Link to='/man' onClick={() => {
              setIsOpen(false)
            }}>Man{menu === "Man" ? <hr className='border-none h-0.5 w-8 bg-red-400 mx-auto mt-1 rounded' /> : <></>}</Link>
          </li>

          <li onClick={() => {
            setMenu('Women')
          }}>
            <Link to='/women' onClick={() => {
              setIsOpen(false)
            }}>Women{menu === "Women" ? <hr className='border-none h-0.5 w-15 bg-red-400 mx-auto mt-1 rounded'  /> : <></>}</Link>
          </li>

          <li onClick={() => {
                setMenu('Kids')
            }}>
            <Link to='/kids' onClick={() => {
              setIsOpen(false)
            }}>Kids{menu === "Kids" ? <hr className='border-none h-0.5 w-8 bg-red-400 mx-auto mt-1 rounded'  /> : <></>}</Link>
          </li>

          <li onClick={() => {
                setMenu('Electronic')
            }}>
            <Link to='/electronic' onClick={() => {
              setIsOpen(false)
            }}>Electronic{menu === "Electronic" ? <hr className='border-none h-0.5 w-20 bg-red-400 mx-auto mt-1 rounded'  /> : <></>}</Link>
          </li>

        </ul>
      </div>
        )
      }

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