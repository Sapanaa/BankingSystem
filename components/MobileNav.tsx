'use client'
import React from 'react'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Menu } from 'lucide-react'
import { sidebarLinks } from '@/constants'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import { cn } from '@/lib/utils'

const MobileNav = ({user}: MobileNavProps) => {
    const pathname = usePathname()
  return (
    <section className='w-full max-w-[264px]'>
        <Sheet>
  <SheetTrigger>
    <Menu />
  </SheetTrigger>
  <SheetContent>
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
        <p className={cn("text-16 font-semibold text-black-2", { "!text-white": isActive })}>{link.label}</p>
        </Link>
       )
      })}
  </SheetContent>
</Sheet>
      
    </section>
  )
}

export default MobileNav
