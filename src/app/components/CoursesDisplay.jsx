
'use client'

import React from 'react'
import Image from "next/image"
import Link from "next/link"
import { CldImage } from 'next-cloudinary';
import s from "@/app/styles/s.module.css"
import Courseinfo from './Courseinfo';

function CoursesDisplay(props) {

      async function addtofav(value)
{

const response = await fetch('/api/users/atfav' , 
{
  method: 'POST',
  headers: {
      'Content-Type': 'application/json',
  },
  body: JSON.stringify({value}),
});





}


  return (
   <div className={s.maindiv} >
   <div className={s.h}> 
   <h1>{props.Heading}</h1> <hr/>
   </div>
       
      {props.State.map((course) =>{

return <Courseinfo key={course._id} c ={course} /> 

})}
                         
</div>
  )
}

export default CoursesDisplay