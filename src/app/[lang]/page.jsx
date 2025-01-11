import NavAside from "@/app/[lang]/components/AsideComponents/NavAside";
import SwiperComponent from "@/app/[lang]/components/AsideComponents/SwiperComponent";
import { BookCard } from "./components/card/BookCard";
import Image from "next/image";
import cover from "../../../public/images/cover.png"
import TextInCover from "./components/TextInCover";
import { getDictionary } from "./dictionaries";
import Link from "next/link";
import SwiperTypes from "./components/AsideComponents/SwiperTypes";
import SwiperAuthors from "./components/AsideComponents/SwiperAuthors";

const baseUrl = process.env.NEXT_PUBLIC_BASEURL

const getAllBooks = async (category, lang) => {
  const req = await fetch(`${baseUrl}/api/v1/books/all-books?${category && `type=${category}`}&limit=16&page=1`, {
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

const getCategories = async (lang) => {
  const req = await fetch(`${baseUrl}/api/v1/all-types`, {
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

export default async function Home({ searchParams, params }) {
  const { category } = await searchParams
  const { lang } = await params
  const allBooks = await getAllBooks(category, lang)
  const categories = await getCategories(lang)

  const translate = await getDictionary(lang)


  return (
    <>
      <aside className='from-stone-600 px-2 md:px-4 to-slate-900'>
        <div className="container mx-auto mt-10">
          <div className="w-full h-[340px] sm:h-[400px] md:h-[440px] lg:h-[550px] overflow-hidden rounded-xl border border-blue/60 relative">
            <Image
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              placeholder="blur"
              fill
              objectFit="cover"
              alt="cover Image"
              src={cover}
            />
            <div className="absolute top-0 left-0 bottom-0 right-0 bg-black/70 text-white">
              <TextInCover>
                <h1 className="text-lg md:text-3xl capitalize lg:text-5xl font-semibold mb-5">{translate.home.header.title}</h1>
                <h2 className="text-sm md:text-base first-letter:capitalize">{translate.home.header.descruption}</h2>
                <div className="mt-7">
                  <Link href={`/${lang}/author/create`} className="capitalize bg-blue text-black font-semibold py-2.5 px-4 rounded-lg hover:opacity-70" >{translate.home.header.publish_your_own_book}</Link>
                </div>
              </TextInCover>
            </div>
          </div>
          <SwiperComponent translate={translate} />
          <SwiperAuthors translate={translate} />
          <SwiperTypes categories={categories} translate={translate} />


          <NavAside baseUrl={baseUrl} />
          {allBooks.status && allBooks?.data.length > 0 && (
            <div className="grid justify-items-center mt-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {allBooks?.data.map((book) => (
                <BookCard key={book._id} book={book} lang={lang} />
              ))}
            </div>
          )}
        </div>
      </aside>
    </>
  )
}
