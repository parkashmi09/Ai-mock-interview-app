'use client'
import Image from 'next/image'
import React from 'react'
import Logo from '../../../public/logo.svg'
import { UserButton } from '@clerk/nextjs'
import { usePathname } from 'next/navigation'

const Header = () => {
    const path = usePathname();
    console.log(path);
  return (
<div className='flex p-4 items-center justify-between bg-secondary shadow-sm'>
    <Image src={Logo} width={160} height={100} alt='logo'/>
    <ul className='hidden md:flex gap-6'>
        <li className={`hover:text-primary hover:font-bold transition-all cursor-pointer ${path==='/dashboard' && 'text-primary font-bold'}`}>Dashbaord</li>
        <li  className={`hover:text-primary hover:font-bold transition-all cursor-pointer ${path==='' && 'text-primary font-bold'}`}>Questions</li>
        <li  className={`hover:text-primary hover:font-bold transition-all cursor-pointer ${path==='' && 'text-primary font-bold'}`}>Upgrade</li>
        <li  className={`hover:text-primary hover:font-bold transition-all cursor-pointer ${path==='' && 'text-primary font-bold'}`}>How it Works ?</li>
    </ul>
    <UserButton/>
</div>
  )
}

export default Header