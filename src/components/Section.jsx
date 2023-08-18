"use client"
import React, { useEffect, useState } from 'react'
import img1 from "../../public/images/4 Times You Should Never Ever Drink Coffee.png"
import img2 from "../../public/images/pexels-dayan-rodio-4132936.jpg"
import img3 from '../../public/images/A Cover is Not the Book.png'
import img4 from '../../public/images/patrick-tomasso-QMDap1TAu0g-unsplash.jpg'
import Image from 'next/image'

function Section() {

    const [currentIndex, setCurrentIndex] = useState(0)

    const images = [
        {
            url: img1
        },
        {
            url: img2
        },
        {
            url: img3
        },
        {
            url: img4
        },
    ]

    useEffect(() => {
        const id = setInterval(() => {
            if (currentIndex <= 0) {
                setCurrentIndex(images.length - 1);
            } else {
                setCurrentIndex(currentIndex - 1);
            }
        }, 4000);
        return () => clearInterval(id)
    }, [currentIndex, images.length]);


    return (
        <section className='w-full '>
            <div className='max-w-[1500px] mx-auto h-[400px] md:h-[600px] relative select-none overflow-hidden rounded-b-3xl'>
                <Image priority className='transition-all duration-700' src={images[currentIndex].url} fill sizes='100vw' alt='Images' />
                <div className='text-gray-50 absolute w-full h-full px-10 xl:text-3xl md:text-2xl sm:text-xl text-lg z-0 flex text-center justify-center items-center flex-col bg-black/80 group'>
                    <div className='mb-3'>استمتع بعالم القراءة</div>
                    <div className='relative '>
                    
                    انغمس في عوالم مختلفة من خلال موقعنا الشيّق لقراءة الكتب
                        <span className='group-hover:w-full w-0 absolute bg-gradient-to-r from-amber-800 to-orange-600 transition-all duration-1000 -bottom-2  h-1 left-0'>
                        </span>
                    </div>
                    
                </div>
            </div>
        </section>
    )
}

export default Section
