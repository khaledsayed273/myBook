"use client"
import Link from 'next/link'
import React, { useState } from 'react'

function Header() {

    const ul = [
        {
            id: 1,
            name: "Home",
            path: "/"
        },
        {
            id: 2,
            name: "Departments",
            path: "/departments"
        },
        {
            id: 3,
            name: "Authors",
            path: "/authors"
        },
        {
            id: 4,
            name: "Series",
            path: "/series"
        },
    ]

    const [open, setOpen] = useState(false)

    return (
        <nav className='bg-gradient-to-r from-zinc-800 to-black py-5 z-50 sticky top-0 border-b-orange-700 border-b-2'>
            <div className="container mx-auto flex justify-between items-center flex-wrap px-3">

                <Link className='flex items-center' href="/">
                    <span className='font-bold text-3xl text-orange-300'>Logo</span>
                </Link>

                <div className={`bg-gradient-to-r md:bg-none md:w-auto justify-center absolute md:static left-0 w-full -z-10 md:z-0 transition-all duration-500  ${open ? "flex mt-12 md:mt-0 top-7" : "flex -top-60 md:opacity-100"}`}>
                    <ul className='block md:flex'>
                        {ul.map((item) => (
                            <li className='md:mx-5 my-8 text-center md:my-0 text-lg text-orange-500 hover:text-orange-700 transition-all font-semibold ' key={item.id}>
                                <Link  href={item.path}>
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <button aria-label="toggle" onClick={() => setOpen(!open)} className='text-neutral-100 md:hidden '>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 ">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </button>

            </div>
        </nav>
    )
}

export default Header
