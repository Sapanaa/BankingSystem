'use client'
import { usePathname } from 'next/navigation'
import React from 'react'
import Link from 'next/link'
import { sidebarLinks } from '@/constants'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import PlaidLink from './PlaidLink'
import Footer from './Footer'
const Sidebar = ({user}: SiderbarProps) => {
  const pathname = usePathname()
  return (
    <section className='sticky left-0 top-0 flex h-screen w-fit flex-col  justify-between border-r border-gray-200 bg-white pt-8 text-white max-md:hidden sm:p-4 xl:p-6 2xl:w-[355px]'>
    <nav className='flex flex-col'>
      <Link href="/" className='mb-12 cursor-pointer items-center gap-2'>
      <h1 className='text-2xl font-bold'>Velora</h1>
      </Link>
      {sidebarLinks.map((link) => {
        const isActive = pathname === link.route || pathname.startsWith(`${link.route}/`)

       return (
         <Link
          href={link.route}
          key={link.label}
          className={cn('flex items-center gap-2 rounded-md p-4', {  'bg-[linear-gradient(135deg,_#3b82f6,_#60a5fa)]' : isActive })}
        >
          <Image 
          src={link.imgURL}
          alt={link.label}
          width={24}
          height={24}
          className={cn({
                    'brightness-[3] invert-0': isActive
                  })}
          />
        <p className={cn("text-16 font-semibold text-gray-900 max-xl:hidden", { "!text-white": isActive })}>{link.label}</p>
        </Link>
       )
      })}

    <PlaidLink user={user} />
      </nav>

      <Footer user={user} />
    </section>
  )
}

export default Sidebar
