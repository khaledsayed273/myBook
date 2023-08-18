import Image from 'next/image'
import React from 'react'
import AddComment from './AddComment'

function Comments({ data }) {
    return (

        <div className='mt-16'>
            <h1 className="text-3xl text-orange-600 font-bold capitalize mb-7">comments</h1>
            <AddComment />

            {data?.comments?.map((item) => (
                <article key={item.id} className="p-6 text-base my-5 bg-stone-900 rounded-lg ">
                    <footer className="flex justify-between items-center mb-2">
                        <div className="flex items-center">
                            <div className="inline-flex items-center me-3 text-sm text-white font-semibold">
                                <Image
                                    width={6}
                                    height={6}
                                    className="mr-2 w-6 h-6 rounded-full"
                                    src={item.img}
                                    alt={item.name} />
                                <p>{item.name}</p>
                            </div>
                            <div className="text-sm text-gray-600 dark:text-gray-400">
                                <time dateTime="2022-02-08"
                                    title={item.dateTime}>{item.dateTime}
                                </time>
                            </div>
                        </div>

                    </footer>
                    <p className="text-gray-500 dark:text-gray-400">{item.comment}</p>
                    <div className="flex items-center mt-4 space-x-4">
                        <button type="button"
                            className="flex items-center text-sm text-gray-500 hover:underline dark:text-gray-400 font-medium">
                            <svg className="mr-1.5 w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 18">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 5h5M5 8h2m6-3h2m-5 3h6m2-7H2a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h3v5l5-5h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1Z" />
                            </svg>
                            Reply
                        </button>
                    </div>
                </article>
            ))}
        </div>
    )
}

export default Comments
