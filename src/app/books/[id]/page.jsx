import React from 'react'
import img from "../../../../public/images/books/download.jpg"
import Image from 'next/image';
// import RatingComponent from './components/RatingComponent';
import RatingSwiper from '@/components/RatingSwiper';
import Comments from './components/Comments';
import NotFoundBook from './components/not-Found';

export async function generateMetadata({ params }) {
  const { id } = await params

  const req = await fetch(`${baseUrl}/api/v1/books/book/${id}`).then(res =>
    res.json()
  ).catch(e =>
    e
  )

  return {
    title: req?.data?.title,
    description: req?.data?.description
  }
}

const baseUrl = process.env.domain
const getBookDetails = async (id) => {
  const req = await fetch(`${baseUrl}/api/v1/books/book/${id}`, { cache: 'no-store' }).then(res =>
    res.json()
  ).catch(e =>
    e
  )
  return req
}

async function bookOne({ params }) {
  const { id } = await params
  const resbook = await getBookDetails(id)
  const book = await resbook.data
  const data = {
    img: img,
    title: "love store",
    description: `The Great Gatsby, third novel by F. Scott Fitzgerald, published in 1925 by Charles Scribner’s Sons. Set in Jazz Age New York, the novel tells the tragic story of Jay Gatsby, a self-made millionaire, and his pursuit of Daisy Buchanan, a wealthy young woman whom he loved in his youth. Unsuccessful upon publication, the book is now considered a classic of American fiction and has often been called the Great American Novel.`,
    rate: 2,
    views: "564651",
    language: "english",
    downloads: "14587",
    type: "romantic",
    size: "24",
    pages: "250",
    author: {
      name: "ahmed tawfik",
      about: `وُلِدَ أحمد خالد توفيق-أو العرّاب كما يطلق عليه-في 10 يونيو 1962 بمدينة طنطا وتخرج من كلية طب طنطا عام 1985 وحضّر الدكتوراه عام 1997.
      انضم عام 1992 للمؤسسة العربية الحديثة وبدأ بكتابة أول سلاسله-ما وراء الطبيعة-في شهر يناير من العام التالي.
      نجحت السلسة الرعب نجاحًا كبيرًا رغم عدم انتشار هذا النوع من الأدب في الوطن العربي، وبدأ في كتابة سلاسل أخرى للمؤسسة نفسها مثل سلسلة سافاري، وسلسلة فانتازيا، وسلسلة روايات عالمية للجيب، غير بعض الأعداد الخاصة وبعض الروايات مثل يوتوبيا، والسنجة لدور نشر أخرى.
      يشتهر أحمد خالد توفيق كذلك بكتابة مقالاتٍ سياسية واجتماعية دورية في العديد من الصحف والمجلات العربية مثل اليوم الجديد، والتحرير الإخباري، وإضاءات، وبص وطل؛ كما أنه يحب الترجمة ومن أشهر أعماله الرواية العالمية “Fight Club” واتي ترجمها باسم “نادي القتال” عن دار ميريت للنشر، وأعادت دار ليلى نشرها بعدها بعام.
      يعتبر أحمد خالد توفيق أديب الشباب الأول في الوطن العربي والذي حبّب الكثير في القراءة برواياته المشوقة وأسلوبه المتميز والساخر وشخصياته الفريدة-مثل رفعت إسماعيل-ولقربه من الشباب فكريًا وتواصله الدائم معهم، كما أن رواياته دائمًا ما تتناول الشعب المصري وما قد يحدث للبلاد في المستقبل.
      ولاسم أحمد معانٍ ودلالات كثيرة، يمكنك التعرف عليها من خلال: معنى اسم أحمد.
      `
    },
    comments: [
      {
        id: 1,
        name: "Michael Gough",
        img: img,
        dateTime: "Feb. 8, 2022",
        comment: `Very straight-to-point article. Really worth time reading. Thank you! But tools are just the
        instruments for the UX designers. The knowledge of the design tools are as important as the
        creation of the design strategy.`
      },
      {
        id: 2,
        name: "Michael Gough",
        img: img,
        dateTime: "mar. 14, 2021",
        comment: `Very straight-to-point article. Really worth time reading. Thank you! But tools are just the
        instruments for the UX designers. The knowledge of the design tools are as important as the
        creation of the design strategy.`
      },
      {
        id: 3,
        name: "Michael Gough",
        img: img,
        dateTime: "Feb. 7, 2023",
        comment: `Very straight-to-point article. Really worth time reading. Thank you! But tools are just the
        instruments for the UX designers. The knowledge of the design tools are as important as the
        creation of the design strategy.`
      },
    ]

  }

  return (
    resbook?.status ? (
      <div className='container mx-auto'>
        <h1 className='text-center text-4xl font-bold my-10 text-orange-700 capitalize'>{book.title}</h1>
        <div className='px-3'>
          <div className='flex my-4 flex-col items-center'>
            <div className='relative h-[300px] w-[250px] lg:h-[350px] lg:w-[300px] mb-3'>
              <Image src={book.image} fill className='rounded-3xl' alt='image' />
            </div>
            <RatingSwiper rate={book.rate} size={"27px"} />
          </div>
          <div className='flex flex-col justify-between  my-4  md:px-9'>
            <div className='text-slate-100'>
              <h2 className="text-3xl mb-5  text-orange-600 font-bold " >About</h2>
              <p className='leading-8'>{book.description}</p>
            </div>
            <div className='flex flex-col mt-5 capitalize'>
              <div className='flex items-center my-3'>
                <h3 className='text-xl font-bold text-orange-600'>author :</h3>
                <h3 className='ms-2  text-lg text-white'>{book.author.name}</h3>
              </div>
              <div className='flex items-center my-3'>
                <h3 className='text-xl font-bold text-orange-600'>views :</h3>
                <h3 className='ms-2  text-lg text-white'>{book.views}</h3>
              </div>
              <div className='flex items-center my-3'>
                <h3 className='text-xl font-bold text-orange-600'>language :</h3>
                <h3 className='ms-2  text-lg text-white'>{book.language}</h3>
              </div>
              <div className='flex items-center my-3'>
                <h3 className='text-xl font-bold text-orange-600'>downloads :</h3>
                <h3 className='ms-2  text-lg text-white'>{book.downloads}</h3>
              </div>
              <div className='flex items-center my-3'>
                <h3 className='text-xl font-bold text-orange-600'>type :</h3>
                <h3 className='ms-2  text-lg text-white'>{book.type}</h3>
              </div>
              <div className='flex items-center my-3'>
                <h3 className='text-xl font-bold text-orange-600'>size :</h3>
                <h3 className='ms-2  text-lg text-white'>{book.size} mb</h3>
              </div>
              <div className='flex items-center my-3'>
                <h3 className='text-xl font-bold text-orange-600'>pages :</h3>
                <h3 className='ms-2  text-lg text-white'>{book.pages}</h3>
              </div>
            </div>
            <div className='flex flex-wrap mt-5'>
              <button className='me-2 rounded-md w-[120px] text-slate-50 font-bold bg-lime-600 px-3 py-2 hover:opacity-70'>Read</button>
              <button className='mx-2 rounded-md w-[120px] text-slate-50 font-bold bg-cyan-500 px-3 py-2 hover:opacity-70'>Download</button>
            </div>
            <div className='mt-16'>
              <h1 className="text-3xl text-orange-600 font-bold capitalize">about author</h1>
              <p className='text-white md:text-lg mt-5 leading-10'>{book.author.about}</p>
            </div>
            <Comments data={data} />
          </div>
        </div>
      </div>
    ) : (
      <NotFoundBook resbook={resbook} />
    )

  )
}

export default bookOne
