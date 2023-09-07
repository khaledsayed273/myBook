"use client"
import { Rating } from '@mui/material';
import React from 'react'

function RatingSwiper({ rate }) {

    return (
        <Rating
            readOnly
            sx={{ fontSize: "20px", marginBottom: "7px" }}
            name="read-only"
            value={rate}

        />
    )
}

export default RatingSwiper
