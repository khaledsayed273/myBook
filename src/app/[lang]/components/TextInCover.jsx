"use client"
import { motion, useMotionValue } from "framer-motion"
import React, { useEffect } from "react"

function TextInCover({ children }) {
    const x = useMotionValue(0)
    useEffect(() => {
        const timeout = setTimeout(() => x.set(0), 1000)
        return () => clearTimeout(timeout)
    }, [])

    return (
        <motion.div transition={{ duration: 0.4, ease: "backOut" }} initial={{ x: -1000 }} animate={{ x: 0 }} style={{ x }} className="flex justify-center h-full flex-col p-5">
            {children}
        </motion.div>
    )
}

export default TextInCover
