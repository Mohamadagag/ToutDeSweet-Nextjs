'use client'

import { CiMail } from "react-icons/ci";
import { CiPhone } from "react-icons/ci";
import { RiTiktokFill } from "react-icons/ri";
import { RiInstagramLine } from "react-icons/ri";
import { RiFacebookFill } from "react-icons/ri";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Cart from "./Cart";

const Navbar = () => {
  const pathname = usePathname()


  return (
    <nav className="relative">
      <div className="fixed top-0 left-0 right-0 z-10 bg-white">
      <div className="hidden sm:block">
       <div className="flex justify-between p-2">
        <div className="flex">
          <div className="flex items-center text-slate-500">
            <CiMail className="inline-block text-l mr-1 text-[#5a8080]" />
            <span className="text-sm text-[#5a8080]">info@toutdesweet.ae</span>
          </div>
          <div className="flex items-center text-slate-500 ml-4">
            <CiPhone className="inline-block mr-1 text-l text-[#5a8080] " />
            <span className="text-sm text-[#5a8080]">+971 501077848</span>
          </div>
        </div>

        <div className="flex mr-3">
          <div className="mr-3">
            <a href="#">
            <RiFacebookFill className="text-l text-[#5a8080]" />
            </a>
          </div>
          <div className="mr-3">
            <a href="#">
            <RiInstagramLine className="text-l text-[#5a8080]" />
            </a>
          </div>
          <div>
            <a href="#">
            <RiTiktokFill className="text-l text-[#5a8080]" />
            </a>
          </div>
        </div>
      </div>

      </div>

     <Cart />

      <div className="flex items-center flex-col py-5">
       <Link href="/" >
        <Image
          src={"/images/Logo.png"}
          width={300}
          height={300}
          alt="Toutdesweet Logo"
          priority
        />
       </Link>
        <div className="mt-5">
            <Link href='/' className={`link ${pathname === '/' ? 'mr-5 text-[#5a8080] no-underline ' : ' no-underline mr-5 text-black '}`} >
            HOME
          </Link>
          <Link href="/products" className={`link ${pathname === '/products' ? 'mr-5 text-[#5a8080] no-underline ' : ' no-underline mr-5 text-black '}`}>
            PRODUCTS
          </Link>
          <Link href="/findus" className={`link ${pathname === '/findus' ? 'mr-5 text-[#5a8080] no-underline ' : ' no-underline mr-5 text-black '}`}>
            FIND US
          </Link>
        </div>
      </div>
      </div>
    </nav>
  )
}

export default Navbar