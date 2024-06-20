"use client"
import { Rating } from '@mui/material';
import React from 'react'

function RatingSwiper({ rate, size }) {

    return (
        <Rating
        
            readOnly
            sx={{ fontSize: size ? size : "20px", marginBottom: "7px" }}
            name="read-only"
            value={rate}

        />
    )
}

export default RatingSwiper
