"use client"
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Lang from '../Lang'
import { useParams } from 'next/navigation'
import CartComponent from './components/CartComponent'

function Navbar({ translate }) {
    const params = useParams()
    const { lang } = params
    const [open, setOpen] = useState(false)
    const [search, setSearch] = useState("")
    const [collapse, setCollapse] = useState(false)

    const ul = [
        {
            id: 1,
            name: translate.navBar.home,
            path: `/${lang}`
        },
        {
            id: 2,
            name: translate.navBar.categories,
            path: "/categories"
        },
        {
            id: 3,
            name: translate.navBar.authors,
            path: "/authors"
        },
        {
            id: 4,
            name: translate.navBar.reviews,
            path: "/reviews"
        },
        {
            id: 5,
            name: translate.navBar.trending,
            path: "/trending"
        },
    ]

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024) {
                document.documentElement.style.overflowY = "auto";
            }
            else if (!open) {
                document.documentElement.style.overflowY = "auto";
            }
            else if (window.innerWidth <= 1024 && open) {
                document.documentElement.style.overflowY = "hidden";
            }
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [open]);


    const handleSearch = (value) => {
        setSearch(value);
    }
    const handleCollapse = () => {
        setCollapse(!collapse)
    }

    return (
        <nav className='bg-[#0a0a0a] py-5 z-50 sticky top-0 border-b-blue border-b-2'>
            <div className="container mx-auto flex justify-between items-center flex-wrap px-2 xl:px-0">
                <div className='flex items-center'>
                    <Link className='flex items-center me-4' href={`/${lang}`}>
                        <span className='font-bold text-2xl text-blue text-nowrap'>Book Verse</span>
                    </Link>
                    <div className={`lg:bg-none bg-[#0a0a0a] justify-center absolute lg:static start-0 w-full -z-10 lg:z-0 transition-all duration-500  top-[76px] bottom-0 h-[93vh] lg:h-full  ${open ? "flex  lg:mt-0 " : "flex start-full lg:opacity-100"}`}>
                        <ul className='flex justify-center flex-col lg:flex-row'>
                            {ul.map((item) => (
                                <li className='lg:mx-4 my-8  text-center lg:my-0 text-white hover:text-white/50 transition-all font-semibold ' key={item.id}>
                                    <Link className='capitalize' href={item.path}>
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className='flex items-center'>
                    <div className='sm:hidden flex items-center me-2'>
                        <button className='text-white' onClick={handleCollapse}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                            </svg>
                        </button>
                        <div className={`absolute end-5 top-20  transition-all duration-500  text-white ${!collapse && "hidden"} `}>
                            <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-4">
                                <svg className="flex-shrink-0 size-4 text-gray-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></svg>
                            </div>
                            <input value={search} onChange={(e) => handleSearch(e.target.value)} type="text" id="icon" name="icon" className="py-1.5 outline-none border-2 px-4 ps-11 block w-full border-blue/40 rounded-lg text-sm focus:border-blue focus:ring-blue disabled:opacity-50 disabled:pointer-events-none dark:text-white bg-dark" placeholder={translate.navBar.search} />
                        </div>
                    </div>
                    <div className="relative hidden sm:block w-56 me-2 bg-dark">
                        <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-4">
                            <svg className="flex-shrink-0 size-4 text-gray-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></svg>
                        </div>
                        <input value={search} onChange={(e) => handleSearch(e.target.value)} type="text" id="icon" name="icon" className="py-1.5 outline-none border-2 px-4 ps-11 block w-full border-blue/40 rounded-lg text-sm focus:border-blue focus:ring-blue disabled:opacity-50 disabled:pointer-events-none dark:text-white bg-dark" placeholder={translate.navBar.search} />
                    </div>
                    <CartComponent />
                    <Lang />
                    <button aria-label="toggle" onClick={() => setOpen(!open)} className='ms-2 text-neutral-100 lg:hidden '>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 ">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    </button>
                </div>

            </div>
        </nav>
    )
}

export default Navbar
