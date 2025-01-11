"use client"
import { useParams, useRouter } from 'next/navigation'
import React from 'react'

function NotFoundBook() {
    const params = useParams()
    const {lang} = params
    const router = useRouter()
    return (
        <div className='container mx-auto h-[90vh] flex flex-col justify-center items-center'>
            <h1 className='text-blue  text-3xl md:text-4xl mb-7 capitalize font-semibold'>Something Went Wrong</h1>
            <button onClick={() => router.push(`/${lang}`)} className='text-white bg-blue-500 capitalize px-5 py-1.5 rounded-xl hover:opacity-80'>home page</button>
        </div>
    )
}

export default NotFoundBook
