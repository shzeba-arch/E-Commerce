import React from 'react'
import { Link } from 'react-router-dom'
import { FaHeart } from 'react-icons/fa'

const FeaturedProductInfo = (Props) => {
  return (
    <div className="bg-gray-800 text-white p-4 rounded-lg shadow-md ">

      <img 
        className="bg-gray-300 w-full h-40 object-contain mb-3" 
        src={Props.image} 
        alt="" 
      />

      <p className="font-semibold">{Props.name}</p>
      <p className="text-gray-400">{Props.Rs}</p>

      <div className="flex justify-between items-center mt-3">
        
        <Link>
        <button className="bg-blue-600 px-4 py-1 rounded">
          Add to Cart
        </button>
        </Link>
        <Link>
        <FaHeart className='w-20 hover:text-red-600' size={25} />
        </Link>


      </div>

    </div>
  )
}

export default FeaturedProductInfo