import React from 'react'
import FeaturedProductInfo from './FeaturedProductInfo'

const FeaturedProducts = () => {
    const item = [
        {
            image : '../../../public/assets/Wireless Healphones.png',
            name : 'Wireless Healphones',
            rs : '$99',
            button : 'Add To Cart',
            imagewishlist : ''
        },
        {
            image : '../../../public/assets/SmartWatchs.png',
            name : 'SmartWatch',
            rs : '$99',
            button : 'Add To Cart',
            imagewishlist : ''
        },
        {
            image : '../../../public/assets/DenimJacket.png',
            name : 'Denim Jacket',
            rs : '$99',
            button : 'Add To Cart',
            imagewishlist : ''
        },
        {
            image : '../../../public/assets/Rowing Shoes.png',
            name : 'Rowing Shoes',
            rs : '$99',
            button : 'Add To Cart',
            imagewishlist : ''
        },
    ]
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-20'>
        {item.map((elem, idx) => {
            return( <div key={idx}>
                <FeaturedProductInfo image={elem.image}  name={elem.name} Rs={elem.rs} button={elem.button} imagewishlist={elem.imagewishlist} />
            </div>)
        })}
    </div>
  )
}

export default FeaturedProducts