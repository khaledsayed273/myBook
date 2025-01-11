'use client'
 
export default function Error({ error, reset }) {
  return (
    <div className="flex flex-col justify-center items-center h-[50vh]">
      <h2 className="text-red-600 font-semibold text-2xl">Something went wrong!</h2>
      <button className="mt-5 bg-orange px-5 py-1.5 rounded-xl text-white hover:opacity-80" onClick={() => reset()}>Try again</button>
    </div>
  )
}