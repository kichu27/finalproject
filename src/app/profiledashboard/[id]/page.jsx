"use client";
export const dynamic = "force-dynamic";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import styles from "@/app/styles/profiledash.module.css"
import { CldImage } from "next-cloudinary";
import s from "@/app/styles/s.module.css"
import Link from "next/link";
import Image from "next/image"

export default function Profilepage({ params }) {
  const router = useRouter();
  const [responsedata, setResponsedata] = useState(null);
  const [responsedata1, setResponsedata1] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/users/me", { method: "GET" });
        const data = await response.json();
        const { user } = data;

        setResponsedata(user);
      } catch (error) {
        console.error(error);
      }
    };

    const fetchboughtcourses = async () => {
      try {
        const response = await fetch("/api/users/gbc", { method: "GET" });
        const data = await response.json();
        const { dota } = data;
        setResponsedata1(dota);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
    fetchboughtcourses();
  }, []);

  return (
    <div className={styles.maindiv} >
      <div className={styles.subdiv1}>

        <div className={styles.imgdiv}>

          {responsedata && responsedata.profilepic_id ? (<CldImage
            src={responsedata?.profilepic_id}
            height={370}
            width={300}
            alt="Profile_Image"
          />) : (<img
            src="/pp.jpg"
            height={370}
            width={300}
            alt="Profile_Image"
            className={styles.pp}
          />)}
        </div>

        <div className={styles.tableContainer}>
          <table className={styles.table}>
            <tbody>
              <tr>
                <td>ID:</td>
                <td>{responsedata?._id || "N/A"}</td>
              </tr>
              <tr>
                <td>Email:</td>
                <td>{responsedata?.email || "N/A"}</td>
              </tr>
              <tr>
                <td>Number:</td>
                <td>{responsedata?.number || "N/A"}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className={styles.linkdiv}>
          <Link className={styles.link} href="/cloudinary">
            {responsedata?.profilepic_id ? "UPDATE PROFILE PIC" : "ADD PROFILE PIC"}
          </Link>
        </div>
      </div>

      <div className={styles.subdiv2}>

        <div className={styles.heading}>
          <p>BOUGHT COURSES</p>
        </div>



        <div className={styles.subdiv3}>

          {responsedata1.map((c) => {
            return (
              <div className={s.cdiv} key={c._id}>

                <div>
                  <CldImage src={c.imageURL} width={320} height={250} alt="Course Image " />
                </div>
                  
                <div className={s.cn}>  <h4>{c.courseName}</h4></div>


                <p>{c.subDescription}</p>
                <hr />
                <p>--- Istructor ---</p>
                <p> {c.instructor} </p>
                <p>--- Access The Course ---</p>
<Link  href="/BoughtCourse">CLICK HERE  </Link>


              </div>

            );
          })}
        </div>
      </div>
    </div>
  );
}
