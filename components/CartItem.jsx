'use client'
import { CartContext } from "@/context/CartContext"
import allproducts from "@/data/allproducts"
import Image from "next/image"
import { useContext } from "react"

const CartItem = ({id, quantity}) => {
    const { IncreseCartQuantity, DecreseCartQuantity } = useContext(CartContext)

    const singleProduct = allproducts.filter((product) => product.id == id)[0]

  return (
    <div className="flex justify-between mt-4 border-b-2 pb-2">
        <div>
            <Image src={singleProduct.image[0]} width={100} height={100} className="object-cover" alt={singleProduct.name} />
        </div>
            <div className="flex flex-col items-center">
                <div className="text-white flex">
                    <h2>{singleProduct.name}</h2>
                    <span className="ml-5">{quantity}</span>
                </div>
                <div className="mt-5 border rounded-lg inline-block px-2">
                <button className='hover:text-[#7b9999]' onClick={() => DecreseCartQuantity(id)}>-</button>
      <span className='mx-5'>{quantity}</span>
      <button className='hover:text-[#7b9999]' onClick={() =>IncreseCartQuantity(id)}>+</button>
                </div>
            </div>
    </div>
  )
}

export default CartItem