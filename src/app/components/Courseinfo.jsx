import React from 'react'
import { CldImage } from 'next-cloudinary';
import Image from "next/image"
import Link from "next/link"
import s from "@/app/styles/s.module.css"
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

  import { truncate } from 'lodash';
  

function Courseinfo(props) {

  const notify = () => toast("LIKED COURSE !");
    

  async function addtofav(value) {

    const response = await fetch('/api/users/atfav',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ value }),
      });

      notify()

  }

  return (
    <div className={s.cdiv} key={props.c._id}>

      <div>
        <CldImage src={props.c.imageURL} width={320} height={250} alt="Course Image " />
      </div>

      <div className={s.cn}>  <h4>{props.c.courseName}</h4></div>

      <p>DURATION</p>
      <p> {new Date(props.c.startDate).toLocaleDateString()} - {new Date(props.c.endDate).toLocaleDateString()} </p>
      <p>{truncate(props.c.subDescription, { length: 20 })}</p>
      <hr />
      <div className={s.del}>

        <Image src={'/heart.png'} width={20} height={20} alt="Favourite Icon" onClick={() => addtofav(props.c._id)} />

      </div>

      <Link href={`/courses/${props.c._id}`}>
        <button className={s.button}>
          Read More
        </button>
      </Link>
<ToastContainer/>
    </div>
  )
}

export default Courseinfo