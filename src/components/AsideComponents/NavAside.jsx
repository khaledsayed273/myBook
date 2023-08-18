"use client"
import { MenuItem, Select } from '@mui/material'
import React, { useState, useEffect } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { useCallback } from 'react'

function NavAside({ baseUrl }) {
    const [type, setType] = useState(" ")

    const [collapse, setCollapse] = useState(false)

    const handleChange = (e) => {
        setType(e.target.value)
    }

    const handleCollapse = () => {
        setCollapse(!collapse)
    }

    const [allTypes, setAllTypes] = useState([])
    const [status, setStatus] = useState(false)

    const getAllBooks = async () => {
        const req = await fetch(`${baseUrl}/api/v1/all-types`).then(res =>
            res.json()
        ).then((res => {
            setStatus(res.status)
            setAllTypes(res.data)

        })).catch(e =>
            e
        );
        return req
    }

    useEffect(() => {
        getAllBooks()
    }, [])

    const router = useRouter()
    const searchParams = useSearchParams()

    const handleSetParams = useCallback((type) => {
        const query = new URLSearchParams(searchParams)
        query.set("category" , type)
        router.push(`?category=${query.get("category")}`)
    }, [])

    return (
        <nav className='flex items-center justify-between xl:px-16 mt-32'>
            {status ? (
                <Select
                    value={type}
                    onChange={handleChange}
                    className={`select w-[150px] h-[38px] text-white border rounded-md outline-none border-orange-700`}
                    id="select"
                >
                    <MenuItem onClick={() => router.push(`/`)} className='capitalize font-semibold' value={" "}>الكل</MenuItem>
                    {allTypes?.map((item => (

                        <MenuItem onClick={() => handleSetParams(item.type)} key={item._id} className='capitalize font-semibold' value={`${item.type}`}>{item.type}</MenuItem>
                    )))}
                </Select>
            ) : (<div></div>)}

            <div className='relative'>
                <button className='text-white' onClick={handleCollapse}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                    </svg>
                </button>
                <div className={`absolute right-3 transition-all duration-500  top-10 text-white ${collapse ? "h-[30px]" : "h-[0]"}`}>
                    <input placeholder='search' className={` rounded-md h-full transition-all duration-500 bg-orange-800 outline-none font-semibold ${collapse && "p-1 px-2"}`} type="text" />
                </div>
            </div>
        </nav>
    )
}

export default NavAside
