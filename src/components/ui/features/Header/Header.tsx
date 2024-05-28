"use client"

import Image from "next/image";
import  logo  from '../../../../../public/assets/indentaImage.png'
import Link from "next/link";

const Header = () => {

  return (
    <div>
      <div className=" grid grid-cols-3">
        <div className="flex justify-center items-center">
          <Image src={logo} alt="hotelLogo" width={100} height={100} />
        </div>
        <div className="flex justify-center items-center gap-2">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/services">Services</Link>
        </div>
        <div className="flex justify-center items-center">
          <h1>Login</h1>
        </div>
      </div>
    </div>
  )
}

export default Header;