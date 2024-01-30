'use client'
import Image from "next/image"
import Link from "next/link"

  const ProductCard = ({imageURL, name, productName,link}) => {


    return (
      <Link href={`/products/${link}`} className="border p-5 flex flex-col items-center" >
      <div className="w-56 h-56">
        <Image src={imageURL} alt={name} width={200} height={200} className="object-contain w-full h-full"/>
      </div>
      <h3 className="mt-10">{productName}</h3>
    </Link>

  )
  }

export default ProductCard