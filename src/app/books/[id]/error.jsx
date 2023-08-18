'use client' 
 
import { useEffect } from 'react'
 
export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error)
  }, [error])
 
  return (
    <div className='flex flex-col justify-center items-center h-[90vh]'>
      <h2 className='text-white text-2xl mb-5'>Something went wrong!</h2>
      <button
      className='text-white text-lg bg-blue-500 hover:opacity-70 px-7 py-1.5 rounded-lg'
        onClick={
          () => reset()
        }
      >
        Try again
      </button>
    </div>
  )
}