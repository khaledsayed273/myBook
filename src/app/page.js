import Link from "next/link";
import Section from "../components/Section";
import Image from "next/image";
import RatingSwiper from "@/components/RatingSwiper";
import NavAside from "@/components/AsideComponents/NavAside";
import SwiperComponent from "@/components/AsideComponents/SwiperComponent";

const baseUrl = process.env.domain

const getAllBooks = async (category) => {
  const req = await fetch(`${baseUrl}/api/v1/books/all-books?${category && `type=${category}`}&limit=16&page=1`, { cache: 'no-store' }).then(res =>
    res.json()
  ).catch(e =>
    e
  )
  return req
}

export default async function Home({ searchParams }) {
  const { category } = await searchParams
  const allBooks = await getAllBooks(category)
  return (
    <>
      <Section />
      <aside className='from-stone-600 to-slate-900 p-1'>
        <div className="container mx-auto px-5 md:px-4 mt-10">
          <h1 className='text-center mb-16 text-orange-700 text-2xl md:text-3xl font-bold relative after:content-[""] after:w-11 after:h-1 after:bg-red-900 after:absolute after:-bottom-5 after:left-1/2  after:right-1/2 after:-translate-x-1/2 '>
            Suggestions for you
          </h1>
          <SwiperComponent baseUrl={baseUrl} data={allBooks?.data} />
          <NavAside baseUrl={baseUrl} />
          {allBooks.status && (
            allBooks?.data?.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10  mt-20">
                {
                  allBooks?.data?.map((item) => (
                    <div key={item._id} className="flex justify-center my-5">
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
                    </div>
                  ))
                }
              </div>
            ) : (
              <h3 className='text-center my-24 text-xl capitalize font-semibold text-orange-400'>there is no books</h3>)
          )}
        </div>
      </aside>
    </>
  )
}
