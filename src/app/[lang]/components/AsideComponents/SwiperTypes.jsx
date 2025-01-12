"use client"
import React, { useRef } from 'react'
import { Keyboard, Pagination, Navigation, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';

function SwiperTypes({ categories, translate }) {
    const swiperRef = useRef();

    return (
        <div className='my-10'>
            <div className='flex items-center justify-between'>
                <h3 className='text-white capitalize font-semibold text-xl md:text-2xl lg:text-3xl'>{translate.navBar.categories}</h3>
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
                {!categories && (
                    <SwiperSlide className="py-11 errorandLoading">
                        <div className="flex justify-center items-center h-full w-full">
                            <div className="w-14 h-14 bg-transparent animate-spin border-8 border-t-blue border-r-blue border-l-transparent border-b-blue rounded-full"></div>
                        </div>
                    </SwiperSlide>
                )}

                {categories?.status && (
                    categories && categories.data.length > 0 ? (
                        categories.data.map((item) => (
                            <SwiperSlide className="py-11" key={item._id}>
                                <motion.div className="w-[300px]" whileHover={{ y: -5 }} whileTap={{ scale: 0.98 }}>
                                    <Link className='group ' href={`/all`}>
                                        <div className='w-full overflow-hidden rounded-lg h-[250px] relative'>
                                            <Image
                                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                                src={item.image}
                                                fill
                                                alt={`${item.type}`}
                                            />
                                            <div className='absolute p-2 flex justify-end flex-col text-white top-0 bottom-0 left-0 right-0 bg-black/60 transition-all group-hover:bg-black/0'>
                                                <h3 className='capitalize text-lg font-semibold'>{item.type}</h3>
                                                <h4 className='capitalize text-sm font-semibold mt-2'>{item.bookCount} {translate.home.books}</h4>
                                            </div>
                                        </div>
                                    </Link>
                                </motion.div>
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

export default SwiperTypes
