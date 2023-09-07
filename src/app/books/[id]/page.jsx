import React from 'react'
import img from "../../../../public/images/books/download.jpg"
import Image from 'next/image';
import RatingComponent from './components/RatingComponent';

function page({ params }) {
  console.log(params.id);


  const data = {
    img: img,
    title: "love store",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, qui excepturi at maxime iusto iste est sunt temporibus laudantium, quas minima aperiam, incidunt ex aut dolorem autem placeat reprehenderit libero. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, qui excepturi at maxime iusto iste est sunt temporibus laudantium, quas minima aperiam, incidunt ex aut dolorem autem placeat reprehenderit libero. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, qui excepturi at maxime iusto iste est sunt temporibus laudantium, quas minima aperiam, incidunt ex aut dolorem autem placeat reprehenderit libero. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, qui excepturi at maxime iusto iste est sunt temporibus laudantium, quas minima aperiam, incidunt ex aut dolorem autem placeat reprehenderit libero.",

  }

  return (
    <div className='container mx-auto'>
      <h1 className='text-center text-4xl font-bold my-10 text-orange-700'>{params.id}</h1>
      <div className='grid grid-cols-1 md:grid-cols-3 px-3'>
        <div className='flex my-4 justify-center flex-col items-center'>
          <div className='relative h-[300px] w-[250px] lg:h-[350px] lg:w-[300px]'>
            <Image src={data.img} fill className='rounded-3xl' alt='image'/>
          </div>
          <RatingComponent/>
        </div>
        <div className='flex flex-col justify-between col-span-2 my-4 ms-4'>
          <div className='text-slate-100'>
            {data.description}
          </div>
          <div className='flex flex-wrap mt-5'>
            <button className='me-2 rounded-md w-[120px] text-slate-50 font-bold bg-lime-600 px-3 py-2 hover:opacity-70'>Read</button>
            <button className='mx-2 rounded-md w-[120px] text-slate-50 font-bold bg-cyan-500 px-3 py-2 hover:opacity-70'>Download</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page
