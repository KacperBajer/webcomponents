'use client'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const links = [
  {
    name: 'Home',
    href: '/'
  },
  {
    name: 'Contact',
    href: '/contact'
  },
  {
    name: 'About',
    href: '/about'
  }
]

const Header = () => {

  const path = usePathname()

  return (
    <div className='w-full bg-white shadow-md'>
      <div className='w-full mx-auto max-w-screen-xl px-4 py-2 flex justify-between items-center'>
        <Image
          alt=''
          src={'/logo.webp'}
          width={100}
          height={100}
          className='h-12 w-fit'
        />
        <div className='flex'>
          {links.map((item, index) => (
            <Link className={`px-2 py-1.5 hover:text-blue-600 font-normal hover:cursor-pointer transition-all duration-300 ease-in-out ${path === item.href ? 'text-blue-600' : 'text-gray-600'}`} key={index} href={item.href}>
              {item.name}
            </Link>
          ))}
        </div>
        <button className='bg-blue-600 text-sm px-4 py-1.5 rounded-md hover:cursor-pointer duration-300 transition-all ease-in-out hover:bg-blue-700 text-white'>
          button
        </button>
      </div>
    </div>
  )
}

export default Header