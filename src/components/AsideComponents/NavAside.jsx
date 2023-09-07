"use client"
import {  MenuItem, Select } from '@mui/material'
import React, { useState } from 'react'

function NavAside() {

    const [type, setType] = useState(10)
    const [collapse, setCollapse] = useState(false)
    
    const handleChange = (e) => {
        setType(e.target.value)
    }

    const handleCollapse = () => {
        setCollapse(!collapse)
    }

    return (
        <nav className='flex items-center justify-between xl:px-16 mt-32'>

            <Select
                value={type}
                onChange={handleChange}
                className={`select w-[150px] h-[38px] text-white border rounded-md outline-none border-orange-700`}
                id="select"
            >
                <MenuItem value={"10"}>رومانسي</MenuItem>
                <MenuItem value={"20"}>علمي</MenuItem>
                <MenuItem value={"30"}>علم نفس</MenuItem>
                <MenuItem value={"40"}>روايات</MenuItem>
                <MenuItem value={"50"}>تاريخ</MenuItem>
                <MenuItem value={"60"}>ادب</MenuItem>
                <MenuItem value={"70"}>خيال</MenuItem>
            </Select>
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
