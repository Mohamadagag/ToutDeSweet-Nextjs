import React from 'react'
import image1 from '../public/products/Almond Croissant.png'
import image2 from '../public/products/Chocolate Eclair.png'
import image3 from '../public/products/Choux Paris Brest.png'
import image4 from '../public/products/Croissant Nature.png'
import image5 from '../public/products/Yuzu Tarte.png'
import image6 from '../public/products/Yuzu Hazelnut.png'
import image7 from '../public/products/Vanilla Raspberry and Rose.png'
import Image from 'next/image'

const ProductsHomepage = () => {
  return (
    <div className="carousel carousel-center rounded-box">
    <div className="carousel-item">
      <Image src={image1} width={200} className='w-80 object-cover' alt="Almond Croissant" />
    </div> 
    <div className="carousel-item">
    <Image src={image2} width={200} className='w-80 object-cover' alt="Chocolate Eclair" />
    </div> 
    <div className="carousel-item">
    <Image src={image3} width={200} className='w-80 object-cover' alt="Choux Paris Brest" />
    </div> 
    <div className="carousel-item">
    <Image src={image4} width={200} className='w-80 object-cover' alt="Croissant Nature" />
    </div> 
    <div className="carousel-item">
    <Image src={image5} width={200} className='w-80 object-cover' alt="Yuzu Tarte" />
    </div> 
    <div className="carousel-item">
       <Image src={image6} width={200} className='w-80 object-cover' alt="Yuzu Hazelnut" />
    </div> 
    <div className="carousel-item">
       <Image src={image7} width={200} className='w-80 object-cover' alt="Vanilla Raspberry and Rose" />
    </div>
  </div>
  )
}

export default ProductsHomepage