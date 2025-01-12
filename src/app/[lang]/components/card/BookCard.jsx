'use client';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export function BookCard({ book, lang }) {
    return (
        <motion.div className="w-[300px]" whileHover={{ y: -5 }} whileTap={{ scale: 0.98 }}>
            <div className="rounded-lg overflow-hidden border border-gray-800 hover:shadow-xl transition-shadow duration-300 group">
                <div className="relative">
                    <Link className='relative block h-[400px] w-full overflow-hidden' href={`/${lang}/books/${book._id}`}>
                        <Image
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            src={book.image}
                            alt={book.title}
                            fill
                            className="object-cover transition-transform duration-300 "
                        />
                        <div className="absolute inset-0  bg-black/65 transition-all group-hover:opacity-0" />
                        <div className="absolute bottom-12 left-4 right-4">
                            <h3 className="text-xl font-semibold text-white mb-2 capitalize">{book.title}</h3>
                        </div>
                    </Link>
                    <Link href={`/${lang}/authors/${book.author_id}`} className="text-white/80 flex items-center capitalize absolute bottom-2.5 left-4 hover:text-white transition-colors">
                        <div className='relative w-8 h-8 overflow-hidden rounded-full border border-gray-800'>
                            <Image
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                style={{objectFit: "cover"}}
                                src={book.author_image} fill alt={book.author_name} />
                        </div>
                        <span className='ms-2'>{book.author_name}</span>
                    </Link>
                </div>
                <div className="flex items-center p-4 justify-between">
                    <div className="flex items-center gap-1 text-yellow-300">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5">
                            <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                        </svg>
                        <span className='text-white ms-1'>{Math.round(+book.rate).toFixed(1)}</span>
                    </div>
                    <div className="flex items-center gap-1 text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        </svg>
                        <span className='ms-1'>{Math.round(+book.views)}</span>
                    </div>
                </div>
            </div>
        </motion.div>

    );
}