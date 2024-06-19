import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import SwiperComponent from './AsideComponents/SwiperComponent';
import RatingSwiper from './RatingSwiper'
import NavAside from './AsideComponents/NavAside'

const baseUrl = process.env.domain

const getAllBooks = async () => {

    const req = await fetch(`${baseUrl}/api/books/all-books`).then(res =>
        res.json()
    ).catch(e =>
        e
    )
    return req
}

// linear-gradient(135deg, #001f3f, #1a0033)
async function Aside() {
    const allBooks = await getAllBooks()
    return (
        <aside className='from-stone-600 to-slate-900 p-1'>
            <div className="container mx-auto px-5 md:px-4 mt-10">
                <h1 className='text-center mb-16 text-orange-700 text-2xl md:text-3xl font-bold relative after:content-[""] after:w-11 after:h-1 after:bg-red-900 after:absolute after:-bottom-5 after:left-1/2  after:right-1/2 after:-translate-x-1/2 '>
                    Suggestions for you
                </h1>
                <SwiperComponent baseUrl={baseUrl} data={allBooks?.data} />
                <NavAside baseUrl={baseUrl} />
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10  mt-20">
                    {allBooks.status && (
                        allBooks?.data?.length > 0 ? (
                            allBooks?.data?.map((item) => (
                                <div key={item._id} className="flex justify-center my-5">
                                    <Link className="duration-500 hover:scale-110" href={`books/${item.link}`}>
                                        <div className='relative w-[220px] overflow-hidden rounded-2xl group'>
                                            <div className='relative w-full h-[290px] '>
                                                <Image loading='lazy' sizes='(max-width: 992px) 100vw' fill src={item.image} alt="image" />
                                            </div>
                                            <div className='absolute z-10 -bottom-7 group-hover:bottom-0 flex flex-col items-center transition-all duration-500 left-0 right-0 bg-orange-900'>
                                                <p className='p-2 text-gray-50 capitalize'>{item.title}</p>
                                                <RatingSwiper rate={item.rate} />
                                            </div>
                                            <div className="absolute top-0 bottom-0 w-full transition-all duration-500 group-hover:bg-black/60  -z-5">
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            ))
                        ) : (<h3>there is no data</h3>)
                    )}
                    {/* {data.length > 0 ? (
                        data.map((item) => (
                            <div key={item.id} className="flex justify-center my-5">
                                <Link className="duration-500 hover:scale-110" href={`books/${item.link}`}>
                                    <div className='relative w-[220px] overflow-hidden rounded-2xl group'>
                                        <div className='relative w-full h-[290px] '>
                                            <Image loading='lazy' sizes='(max-width: 992px) 100vw' fill src={item.image} alt="image" />
                                        </div>
                                        <div className='absolute z-10 -bottom-7 group-hover:bottom-0 flex flex-col items-center transition-all duration-500 left-0 right-0 bg-orange-900'>
                                            <p className='p-2 text-gray-50 capitalize'>{item.title}</p>
                                            <RatingSwiper rate={item.rate} />
                                        </div>
                                        <div className="absolute top-0 bottom-0 w-full transition-all duration-500 group-hover:bg-black/60  -z-5">
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        ))
                    ) : "loading"} */}
                </div>
            </div>
        </aside>
    )
}

export default Aside
