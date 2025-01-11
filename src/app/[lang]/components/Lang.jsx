"use client"
import { useParams, usePathname, useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import ReactCountryFlag from "react-country-flag"

function Lang() {
    const params = useParams()
    const lang = params.lang
    const router = useRouter()
    const [isOpen, setIsOpen] = useState(false);
    const path = usePathname()
    const pathArr = path.split("/");
    const handleChange = (item) => {
        const newLang = item.code;
        if (pathArr.length > 2) {
            const remainingPath = pathArr.slice(2).join("/");
            router.push(`/${newLang}/${remainingPath}`);
        } else {
            router.push(`/${newLang}`);
        }
        setIsOpen(false);
    };
    const language = [
        { code: "ar", label: "Arabic", countryCode: "SA" },
        { code: "de", label: "German", countryCode: "DE" },
        { code: "en", label: "English", countryCode: "US" },
        { code: "es", label: "Spanish", countryCode: "ES" },
        { code: "fr", label: "French", countryCode: "FR" },
        { code: "it", label: "Italian", countryCode: "IT" },
        { code: "ja", label: "Japanese", countryCode: "JP" },
        { code: "pt", label: "Portuguese", countryCode: "PT" },
        { code: "ru", label: "Russian", countryCode: "RU" },
        { code: "zh-CN", label: "Chinese", countryCode: "CN" },
    ];

    const [cheackFlag, setCheackFlag] = useState(null)

    useEffect(() => {
        if (lang) {
            if (lang === "ar") {
                setCheackFlag("SA")
            } else if (lang === "en") {
                setCheackFlag("US")
            }
            else if (lang === "ja") {
                setCheackFlag("JP")
            }
            else if (lang === "zh-CN") {
                setCheackFlag("CN")
            } else {
                setCheackFlag(lang)
            }
        }

    }, [])

    return (
        <div className="relative me-2 lg:me-0 select-none">
            {cheackFlag !== null ? (
                <ReactCountryFlag
                    className='cursor-pointer'
                    onClick={() => setIsOpen(!isOpen)}
                    countryCode={lang.countryCode || cheackFlag}
                    svg
                    style={{
                        width: '1.5em',
                        height: '1.5em',
                    }}
                />
            ) : (
                <div className="w-6 h-6 rounded-full bg-gray-300 animate-pulse"></div>
            )}

            {isOpen && (
                <div className="absolute mt-2 end-0 w-[170px] bg-zinc-950 text-white border border-zinc-700 rounded-md shadow-lg z-10">
                    {language
                        .filter(item => item.code !== lang.code)
                        .map((item) => (
                            <div
                                key={item.code}
                                className="cursor-pointer px-4 py-2 capitalize font-semibold hover:bg-zinc-900"
                                onClick={() => handleChange(item)}
                            >
                                <ReactCountryFlag
                                    countryCode={item.countryCode}
                                    svg
                                    className="w-6 h-6 rounded-full mr-2"
                                />
                                <span className="ms-2 text-sm">{item.label}</span>
                            </div>
                        ))}
                </div>
            )}
        </div>
    )
}

export default Lang
