import React from 'react'
import Link from 'next/link'
import { Plus } from 'lucide-react'
import BankCard from './BankCard'

const RightSidebar = ({user, transactions, banks}: RightSidebarProps) => {
  return (
    <aside className='no-scrollbar hidden h-screen max-h-screen flex-col border-l border-gray-200 xl:flex w-[355px] xl:overflow-y-scroll !important'>
        <section className='flex flex-col pb-8'>
            <div className="h-[120px] w-full bg-gradient-mesh bg-cover bg-no-repeat" />
        <div className="relative flex px-6 max-xl:justify-center">
          <div className="flex-center absolute -top-8 size-24 rounded-full bg-gray-100 border-8 border-white p-2 shadow-profile">
            <span className="text-5xl font-bold text-blue-500"> {user?.firstName[0]}</span>
          </div>

          <div className="flex flex-col pt-24">
            <h1 className='text-24 font-semibold text-gray-900'>
              {user?.firstName}
            </h1>
            <p className="text-16 font-normal text-gray-600">
              {user?.email}
            </p>
          </div>


            </div>

        </section>

          <section className="banks">
        <div className="flex w-full justify-between">
          <h2 className="font-semibold ">My Banks</h2>
          <Link href="/" className="flex gap-2">
            <Plus />
            <h2 className="text-14 font-semibold text-gray-600">
              Add Bank
            </h2>
          </Link>
        </div>

         {banks?.length > 0 && (
          <div className="relative flex flex-1 flex-col items-center justify-center gap-5">
            <div className='relative z-10'>
              <BankCard 
                key={banks[0].$id}
                account={banks[0]}
                userName={`${user.firstName} ${user.lastName}`}
                showBalance={false}
              />
            </div>
             {banks[1] && (
              <div className="absolute right-0 top-8 z-0 w-[90%]">
                <BankCard 
                  key={banks[1].$id}
                  account={banks[1]}
                  userName={`${user.firstName} ${user.lastName}`}
                  showBalance={false}
                />
              </div>
            )} 
          </div>
        )} 

        <div className="mt-10 flex flex-1 flex-col gap-6">
          <h2 className="header-2">Top categories</h2>

          {/* <div className='space-y-5'>
            {categories.map((category, index) => (
              <Category key={category.name} category={category} />
            ))}
          </div> */}
        </div>
      </section>
      
    </aside>
  )
}

export default RightSidebar
