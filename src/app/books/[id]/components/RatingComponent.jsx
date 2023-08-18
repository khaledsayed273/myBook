"use client"
import { Rating } from '@mui/material';
import React, { useState } from 'react'

function RatingComponent() {

  const [value, setValue] = useState(2);

  console.log(value);

  return (
    <div className='my-3'>
      <h1 className='text-center text-orange-800 font-bold mb-3'>Reviews : 5789584</h1>
      <Rating
        sx={{ fontSize: "30px" }}
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />


    </div>
  )
}

export default RatingComponent
