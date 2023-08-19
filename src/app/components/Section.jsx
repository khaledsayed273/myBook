"use client"
import React, { useEffect, useState } from 'react'
import img1 from "../../../public/images/4 Times You Should Never Ever Drink Coffee.png"
import img2 from "../../../public/images/pexels-dayan-rodio-4132936.jpg"
import img3 from '../../../public/images/A Cover is Not the Book.png'
import img4 from '../../../public/images/patrick-tomasso-QMDap1TAu0g-unsplash.jpg'
import Image from 'next/image'

function Section() {

    const [currentIndex , setCurrentIndex] = useState(0)

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

console.log(currentIndex);

const backgroundImageStyle = {
    backgroundImage: `url(${images[currentIndex].url})`,
  };



    return (
        <div className='max-w-[1500px] mx-auto h-[400px] md:h-[600px] relative '> 

            <Image className='transition-all duration-700' src={images[currentIndex].url} fill sizes='100vw' alt='Images'/>

        </div>
    )
}

export default Section
