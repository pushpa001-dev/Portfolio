import React from 'react'

export const Navbar = () => {
  return (
    <nav className=' w-full  px-10 lg:px-20 py-5 flex flex-row items-center backdrop-blur-[10px] justify-between fixed z-10'>
        <h1 className='text-xl lg:text-3xl font-bold'>Pushpa</h1>
        <div className='flex text-md lg:text-xl flex-row gap-5 lg:gap-10'>
            <h1>About</h1>
            <h1>Contact</h1>
        </div>
    </nav>
  )
}
