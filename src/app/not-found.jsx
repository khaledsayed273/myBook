"use client"
import { useRouter } from 'next/navigation'
import React from 'react'

function NotFoundBook() {
    const router = useRouter()
    return (
        <div className='container mx-auto h-[90vh] flex flex-col justify-center items-center'>
            <h1 className='text-orange-700  text-3xl md:text-4xl mb-7 capitalize font-semibold'>this page is not found</h1>
            <button onClick={() => router.push("/")} className='text-white bg-blue-500 capitalize px-5 py-1.5 rounded-xl hover:opacity-80'>home page</button>
        </div>
    )
}

export default NotFoundBook
