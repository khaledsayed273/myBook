import Image from 'next/image'
import React from 'react'
import img1 from "../../public/images/books/download (1).jpg"
import img2 from "../../public/images/books/download.jpg"
import Link from 'next/link'
import SwiperComponent from './AsideComponents/SwiperComponent';
import RatingSwiper from './RatingSwiper'
import NavAside from './AsideComponents/NavAside'

const data = [
    {
        id: 1,
        title: "love Book",
        link: "sdasd",
        image: img1,
        rate: 1
    },
    {
        id: 2,
        title: "love Book",
        link: "sdasd",
        image: img2,
        rate: 4
    },
    {
        id: 3,
        title: "love Book",
        link: "sdasd",
        image: img1,
        rate: 3
    },
    {
        id: 4,
        title: "love Book",
        link: "sdasd",
        image: img2,
        rate: 1
    },
    {
        id: 5,
        title: "love Book",
        link: "sdasd",
        image: img1,
        rate: 2
    },
    {
        id: 6,
        title: "love Book",
        link: "sdasd",
        image: img2,
        rate: 5
    },
    {
        id: 7,
        title: "love Book",
        link: "sdasd",
        image: img1,
        rate: 3
    },
    {
        id: 8,
        title: "love Book",
        link: "sdasd",
        image: img2,
        rate: 2
    },
    {
        id: 9,
        title: "love Book",
        link: "sdasd",
        image: img1,
        rate: 3
    },
    {
        id: 10,
        title: "love Book",
        link: "sdasd",
        image: img2,
        rate: 4
    },

]

// linear-gradient(135deg, #001f3f, #1a0033)
function Aside() {
    return (
        <aside className='from-stone-600 to-slate-900 p-1'>
            <div className="container mx-auto px-5 md:px-4 mt-10">
                <h1 className='text-center mb-16 text-orange-700 text-2xl md:text-3xl font-bold relative after:content-[""] after:w-11 after:h-1 after:bg-red-900 after:absolute after:-bottom-5 after:left-1/2  after:right-1/2 after:-translate-x-1/2 '>
                    Suggestions for you
                </h1>
                <SwiperComponent data={data} />
                <NavAside/>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10  mt-20">
                    {data.length > 0 ? (
                        data.map((item) => (
                            <div key={item.id} className="flex justify-center my-5">
                                <Link className='flex justify-center duration-500 hover:scale-110' href={`books/${item.link}`}>
                                    <div className='bg-orange-900 flex flex-col items-center w-[220px] overflow-hidden rounded-2xl'>
                                        <div className='relative w-full h-[248px] '>
                                            <Image loading='lazy' sizes='(max-width: 992px) 100vw' fill src={item.image} alt="image" />
                                        </div>
                                        <p className='p-2 text-gray-50 capitalize'>{item.title}</p>
                                        <RatingSwiper rate={item.rate} />
                                    </div>
                                </Link>
                            </div>
                        ))
                    ) : "loading"}
                </div>
            </div>
        </aside>
    )
}

export default Aside
