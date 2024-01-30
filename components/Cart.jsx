import { CartContext } from "@/context/CartContext";
import { useContext, useState } from "react";
import { GiShoppingCart } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

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
    {/* cart */}
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
              <buton className="text-white text-lg cursor-pointer" onClick={() => {setIssOpen(false)}}><IoClose /></buton>
          </div>
        </div>
     : null}

    </>
  )
}

export default Cart