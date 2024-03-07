import Link from "next/link"
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"

export default function FooterDemo() {
  return (

    <div className="mx-auto">

<footer className="bg-gray-200">
      <div className="container flex flex-wrap items-center justify-center px-4 py-8 mx-auto  lg:justify-between">
        <div className="mx-4 flex flex-wrap justify-center">
          <ul className="flex items-center space-x-4">
            <li><Link href={"/"}>Home</Link></li>
            <li><Link href={"/Blog"}>Blog</Link></li>
            <li><Link href={"/Aus"}>Aus</Link></li>
            <li><Link href={"/UK"}>UK</Link></li>
            <li><Link href={"/Free"}>Free</Link></li>
            <li><Link href={"/Deposit"}>Deposit</Link></li>
            <li><Link href={"/"}>Contact</Link></li>
          </ul>
        </div>
        <div className="flex justify-center space-x-4 mt-4 lg:mt-0">
          <Link href={""}>
            <Facebook />
          </Link>
          <Link href={""}>
            <Twitter />
          </Link>
          <Link href={""}>
            <Instagram />
          </Link>
          <Link href={""}>
            <Linkedin />
          </Link>
        </div>
      </div>
      <div className="pb-2">
        <p className="text-center">
          @2024 All rights reserved by CasinoBonus.
        </p>
      </div>
    </footer>


    </div>
   
  )
}