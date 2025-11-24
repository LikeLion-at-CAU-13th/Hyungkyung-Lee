import { NavLinks } from '@/constant/constant'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { FaLaptopCode } from 'react-icons/fa'
import { HiBars3BottomLeft, HiBars3BottomRight } from 'react-icons/hi2'

type NavProps = {
    openNav: () => void;
};

const Nav = ({openNav}:NavProps) => {
    // use client 해줘야 가능
    const [navBg, setNavBg] = useState(false);

    useEffect(() => {
        const handler=() => {
            if(window.scrollY >= 90) setNavBg(true);
            else setNavBg(false);
        };

        window.addEventListener("scroll", handler);

        return() => window.removeEventListener("scroll", handler);
    })

  return (
    <div 
        className={`transition-all ${navBg ? "bg-orange-400 shadow-md" : "fixed" }
        duration-200 h-[12vh] z-10000 fixed w-full`}
    >
        <div className='flex items-center h-full justify-between w-[90%] mx-auto'>
            <Link href="/">
            { /* Logo */ }
            <div className= "flex items-center space-x-2">
                <div className="flex flex-col items-center justify-center w-10 h-10 bg-white rounded-full">
                    <FaLaptopCode className="w-5 h-5 text-black" />
                </div>
                <h1 className="font-bold text-x1sm:block md:text-2xl">
                    LikeLion
                </h1>
            </div>
            </Link>
            {/* NavLinks */}
            <div className="items-center justify-center hidden space-x-10 lg:flex">
                {NavLinks.map((link)=>{
                    return <Link key={link.id} href={link.url} className="text-base font-medium transition-all duration-200 hover:text-gray-300">
                        <p>{link.label}</p>
                    </Link >
                })}
            </div>
            {/* buttons */}
            <div className= "flex items-center">
                {/* Burger Menu */}
                <HiBars3BottomRight 
                    onClick={openNav} 
                    className="w-8 h-8 cursor-pointer lg:hidden" />
            </div>
        </div>
    </div>
  )
}

export default Nav