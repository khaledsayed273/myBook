"use client"
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { Keyboard, Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import RatingSwiper from '../RatingSwiper';



function SwiperComponent({ baseUrl }) {

    const [relatedBooks, setRelatedBooks] = useState([])
    const [status, setStatus] = useState(false)
    const [loading, setLoading] = useState(false)

    const getAllBooks = async () => {
        setLoading(true)

        const req = await fetch(`${baseUrl}/api/v1/books/all-books`).then(res =>
            res.json()
        ).then((res => {
            setStatus(res.status)
            setRelatedBooks(res.data)

        })).catch(e =>
            e
        ).finally(() => {
            setLoading(false)

        });
        return req
    }

    useEffect(() => {
        getAllBooks()
    }, [])


    return (
        <Swiper
            slidesPerView={1}
            breakpoints={{
                640: {
                    slidesPerView: 2,
                    spaceBetween: 10,
                },
                768: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                },
                1400: {
                    slidesPerView: 4,
                    spaceBetween: 30,
                },
            }}
            spaceBetween={30}
            keyboard={{
                enabled: true,
            }}
            pagination={{
                clickable: true,
            }}
            navigation={true}
            modules={[Keyboard, Pagination, Navigation]}
            className="mySwiper "
        >
            {loading ? (
                <SwiperSlide className="py-11 errorandLoading">
                    <div className=' flex justify-center items-center h-full w-full '>
                        <div className='w-14 h-14 bg-transparent animate-spin border-8 border-t-yellow-700 border-r-yellow-700 border-l-transparent border-b-yellow-700  rounded-full'>
                        </div>
                    </div>
                </SwiperSlide>

            ) : (
                status ? (
                    relatedBooks?.length > 0 ? (
                        relatedBooks?.map((item) => (
                            <SwiperSlide className="py-11" key={item._id}>
                                <Link className="duration-500 hover:scale-110" href={`books/${item._id}`}>
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
                            </SwiperSlide>
                        ))
                    ) : (
                        <SwiperSlide className="py-11 errorandLoading ">
                            <h3 className='text-white capitalize text-xl'>sorry there is no books</h3>
                        </SwiperSlide>
                    )
                ) : (
                    <SwiperSlide className="py-11 errorandLoading">

                        <h3 className='text-white capitalize text-xl'>someting went wrong</h3>
                    </SwiperSlide>
                )
            )}
            
        </Swiper>
    )
}

export default SwiperComponent
