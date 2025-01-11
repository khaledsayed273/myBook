import React from 'react'
import Image from 'next/image';
import { getDictionary } from '../../dictionaries';
import NotFoundBook from './components/not-Found';
import Link from 'next/link';

const baseUrl = process.env.NEXT_PUBLIC_BASEURL

export async function generateMetadata({ params }) {
  const { id, lang } = await params
  const currentLang = lang || 'en'
  const locales = process.env.languages.split(',');
  const alternateLanguages = locales.reduce((acc, locale) => {
    acc[locale] = `/${locale}/books/${id}`;
    return acc;
  }, {});

  const req = await fetch(`${baseUrl}/api/v1/books/book/${id}`, {
    headers: {
      "api-key": process.env.NEXT_PUBLIC_API_KEY,
      "lang": lang
    }
  }).then(res =>
    res.json()
  ).catch(e =>
    e
  )
  return {
    title: req?.data?.title,
    description: req?.data?.description,
    keywords: req?.data?.keywords,
    authors: [{ name: req.data.author_name }],
    openGraph: {
      images: [{ url: req?.data?.image }],
    },
    metadataBase: new URL(process.env.website_domain),
    alternates: {
      canonical: `/${currentLang}`,
      languages: alternateLanguages,
    },
  }
}

const getBookDetails = async (id, lang) => {

  const req = await fetch(`${baseUrl}/api/v1/books/book/${id}`, {
    headers: {
      "api-key": process.env.NEXT_PUBLIC_API_KEY,
      "lang": lang
    }
  }).then(res =>
    res.json()
  ).catch(e =>
    e
  )
  return req
}

async function bookOne({ params }) {
  const { id, lang } = await params
  const data = await getBookDetails(id, lang)
  const book = await data?.data
  const translate = await getDictionary(lang)
  const date = new Date(book.createdAt);
  const day = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(date);
  const month = new Intl.DateTimeFormat('en', { month: 'short' }).format(date);
  const year = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(date);
  const createdAt = `${day}  ${month} ${year}`;

  return (
    data?.status ? (
      <aside className='px-2 md:px-5'>
        <div className='container mx-auto'>
          <div className='grid text-white max-[1024px]:justify-items-center  lg:grid-cols-3 2xl:grid-cols-4 my-10 md:my-16 gap-5 md:gap-10'>
            <div className='bg-card max-[377px]:w-[320px] max-[1024px]:w-[350px] p-5 rounded-lg h-[550px]'>
              <div className='relative h-[350px] w-full overflow-hidden rounded-lg lg:w-full mb-7'>
                <Image src={book?.image} fill alt='image' />
              </div>
              <button className='bg-blue mb-4 w-full py-2 capitalize font-semibold text-sm md:text-base  rounded-md hover:opacity-70'>{translate.book_details.read}</button>
              <button className='bg-zinc-700  w-full py-2 capitalize font-semibold text-sm md:text-base  rounded-md hover:opacity-70'>{translate.book_details.add_to_wishlist}</button>
            </div>
            <div className='w-full lg:col-span-2 2xl:col-span-3'>
              <div className='bg-card p-2 py-4 sm:p-4 md:p-5 rounded-md'>
                <div className='flex justify-between items-center'>
                  <div>
                    <h1 className=' capitalize text-xl sm:text-2xl md:text-3xl font-semibold'>{book.title}</h1>
                    <div className="flex items-center gap-1 mt-3 text-white text-sm">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                      </svg>
                      <span className='mx-1'>Views</span>
                      <span>{Math.round(+book.views)}</span>
                    </div>
                  </div>
                  <div className="flex items-center py-4 justify-between">
                    <div className="flex items-center gap-1 text-yellow-300 ">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5">
                        <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                      </svg>
                      <span className='text-white ms-1'>{Math.round(+book.rate).toFixed(1)}</span>
                    </div>
                  </div>
                </div>
                <div className='flex flex-col sm:flex-row my-10  text-xs justify-between capitalize'>
                  <h2 className='me-3'>
                    <span className='block mb-2 text-gray-400'>{translate.book_details.pages}</span>
                    <span>{book.pages}</span>
                  </h2>
                  <h3 className='my-7 sm:my-0'>
                    <span className='block mb-2 text-gray-400'>{translate.book_details.author}</span>
                    <span>{book.author_name}</span>
                  </h3>
                  <h3 className='mb-7 sm:mb-0'>
                    <span className='block mb-2 text-gray-400'>{translate.book_details.type}</span>
                    <span>{book.type}</span>
                  </h3>
                  <h3>
                    <span className='block mb-2 text-gray-400'>{translate.book_details.published_date}</span>
                    <span>{createdAt}</span>
                  </h3>
                </div>
                <div>
                  <span className='capitalize font-semibold text-xl md:text-2xl'>{translate.book_details.about}</span>
                  <p className='my-3 text-xs leading-7'>{book.description}</p>
                </div>
              </div>
              <div className='bg-card my-7 p-2 py-4 sm:p-4 md:p-5 rounded-md'>
                <h3 className='capitalize  md:text-lg font-semibold'>{translate.book_details.about_the_author}</h3>
                <div className='flex items-center mt-5'>
                  <Link className='flex items-center' href={`/${lang}/authors/${book.author_id}`} >
                    <div className='w-20 h-20 flex-none overflow-hidden rounded-full relative me-3'>
                      <Image src={book.author_image} objectFit='cover' fill alt={book.author_name} />
                    </div>
                    <h3 className='capitalize font-semibold text-xl md:text-2xl'>{book.author_name}</h3>
                  </Link>
                </div>
                <div className='my-5'>
                  <p className='my-3 text-xs md:text-sm leading-7'>{book.author_about}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </aside>
    ) : (
      <NotFoundBook />
    )
  )
}

export default bookOne
