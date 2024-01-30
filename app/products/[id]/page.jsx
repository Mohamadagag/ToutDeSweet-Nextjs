'use client'

import Breadcrumb from '@/components/Breadcrumb'
import allproducts from '@/data/allproducts'
import Image from 'next/image'
import { CartContext } from '@/context/CartContext'
import { useContext } from 'react'
  
const pageDescription = ({params}) => {
  const product = allproducts.filter((product) => product.id === params.id)[0]
  
  const { IncreseCartQuantity, DecreseCartQuantity, getItemQuantity } = useContext(CartContext)
  const quantity = getItemQuantity(product.id);



  return (
    <>
      <Breadcrumb productName={product.name} pageTitle='products' />
      <div className='my-5 px-5 md:flex md:justify-center xl:mb-10'>
      <div className='xl:w-96 xl:h-96'>
        <Image src={product.image[0]} width={300} height={300} alt={product.name} className='object-cover w-full h-full' />
      </div>
      <div>
      <div className='md:pl-6 xl:pl-10'>
        <h1 className='font-bold text-xl mt-3 md:mt-0'>{product.name}</h1>
        <p className='mt-3 xl:text-lg'>AED {product.price}.00</p>
        <p className='mt-3'>{product.description}</p>
      </div>
      <div className='mt-5 md:pl-6 xl:pl-10'>
        <span className='mr-4'>Quantity</span>
      <div className='border rounded-lg inline-block  p-2'>
      <button className='hover:text-[#7b9999]' onClick={() => DecreseCartQuantity(product.id)}>-</button>
      <span className='mx-5'>{quantity}</span>
      <button className='hover:text-[#7b9999]' onClick={() =>IncreseCartQuantity(product.id)}>+</button>
        </div>
      </div>
      </div>
      </div>
    </>
    )
}

export default pageDescription