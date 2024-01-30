import { CartContext } from "@/context/CartContext";
import { useContext, useState } from "react";
import { GiShoppingCart } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import CartItem from "./CartItem";
import Link from "next/link";

const Cart = () => {
    const [open, setIssOpen] = useState(false)
    const { cartItems } = useContext(CartContext);
    

    const getTotalQuantity =(cartItems) => {
      let totalQuantity = 0;
      for (let i = 0; i < cartItems.length; i++) {
        totalQuantity += cartItems[i].quantity;
      }
      return totalQuantity;
    }

    const totalQuantity = getTotalQuantity(cartItems);


  return (
    <>
    <div className="bg-[#35464C] h-12 flex items-center justify-end">
    <button className="relative" onClick={() => {setIssOpen(true)}}>
    <GiShoppingCart className="text-white text-2xl mr-5" />
    <span className="absolute -top-2 text-sm text-white">{totalQuantity}</span>
    </button>
    </div>

    {open ? 
          <div className="bg-[#7b9999] absolute top-0 right-0 z-10 w-[340px] h-full px-3 pt-2">
          <div className="flex justify-between items-center border-b pb-2">
              <h2 className="text-white text-lg font-semibold">Shopping Cart</h2>
              <button className="text-white text-lg cursor-pointer" onClick={() => {setIssOpen(false)}}><IoClose /></button>
          </div>
          <div className="cart-products mt-3">
              {cartItems.length == 0 ? <div><h3 className="text-white mb-3">Your Cart is Empty</h3><Link href='/products' className="text-white bg-black rounded-lg p-2" onClick={() => {setIssOpen(false)}}>Return To Products</Link></div>:
              cartItems.map((item) => (
                <CartItem key={item.id} id={item.id} quantity={item.quantity} />
               ))
                }
            </div>
        </div>
     : null}

    </>
  )
}

export default Cart