"use client"
import React, { useEffect, useRef, useState } from 'react'
import { Keyboard, Pagination, Navigation, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { useParams } from 'next/navigation';
import { BookCard } from '../card/BookCard';

function SwiperComponent({ translate }) {
    const swiperRef = useRef();
    const params = useParams()
    const { lang } = params
    const [suggestedBooks, setSuggestedBooks] = useState([])
    const [status, setStatus] = useState(null)
    const [loading, setLoading] = useState(true)
    const getSuggestedBooks = async () => {
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_BASEURL}/api/v1/books/suggested-books`, {
                headers: {
                    "api-key": process.env.NEXT_PUBLIC_API_KEY,
                    "lang": lang
                },
            })
            const data = await response.json();
            setSuggestedBooks(data.data);
            setStatus(true);
        } catch (error) {
            return error
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getSuggestedBooks()
    }, [lang])
    
    return (
        <div className='my-10'>
            <div className='flex items-center justify-between'>
                <h3 className='text-white capitalize font-semibold text-xl md:text-2xl lg:text-3xl'>{translate.home.slider.suggest}</h3>
                <div className='flex justify-end'>
                    <button aria-label="prev" className='me-2 bg-blue/70 hover:opacity-60 border border-black/20 dark:bg-cardDark dark:shadow-sm dark:shadow-gray-700 rounded-full' onClick={() => swiperRef.current?.slidePrev()}>
                        <svg className='dark:text-white' width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M22 16L15 23L22 30M15 23H31" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                    <button aria-label="next" className='hover:opacity-60 bg-blue/70 border border-black/20 dark:bg-cardDark dark:shadow-sm dark:shadow-gray-700 rounded-full' onClick={() => swiperRef.current?.slideNext()}>
                        <svg className='dark:text-white' width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14.5 23H31M31 23L24 16M31 23L24 30" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                </div>
            </div>
            <Swiper
                lazy={`${true}`}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                slidesPerView={1}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 10,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                    1400: {
                        slidesPerView: 4,
                        spaceBetween: 30,
                    },
                }}
                onBeforeInit={(swiper) => {
                    swiperRef.current = swiper;
                }}
                spaceBetween={30}
                keyboard={{
                    enabled: true,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Keyboard, Pagination, Navigation, Autoplay]}
                className="mySwiper"
            >
                {loading && (
                    <SwiperSlide className="py-11 errorandLoading">
                        <div className="flex justify-center items-center h-full w-full">
                            <div className="w-14 h-14 bg-transparent animate-spin border-8 border-t-blue border-r-blue border-l-transparent border-b-blue rounded-full"></div>
                        </div>
                    </SwiperSlide>
                )}

                {status && (
                    suggestedBooks && suggestedBooks.length > 0 ? (
                        suggestedBooks.map((item) => (
                            <SwiperSlide className="py-11" key={item._id}>
                                <BookCard book={item} lang={lang} />
                            </SwiperSlide>
                        ))
                    ) : (
                        <SwiperSlide className="py-11 errorandLoading">
                            <h3 className="text-white capitalize text-xl">Sorry, there are no books</h3>
                        </SwiperSlide>
                    )
                )}
            </Swiper>
        </div>
    )
}

export default SwiperComponent
