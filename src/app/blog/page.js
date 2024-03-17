'use client'
import { Helmet } from "react-helmet";
import { useState, useEffect, Suspense } from "react";
import styles from "@/app/styles/common.module.css";
import { CldImage } from 'next-cloudinary';
import { Head } from "next/head";
import BlogLoading from "../components/BlogLoading";
export default function Page() {
  const [dataresponse, setdataresponse] = useState([]);

  useEffect(() => {
    async function getblogdata() {
      try {
        const response = await fetch('/api/admin/createblog', {
          method: "GET",
        });
        const res = await response.json();

        setdataresponse(res.data);
      } catch (error) {
        console.error('Error fetching blog data:', error);
      }
    }

    getblogdata();
  }, []);

  const renderBlogs = () => (
    dataresponse.map((item) => (
      <div className={styles.md} key={item.id}>
        <div className={styles.o1}>{new Date(item.createdAt).toLocaleDateString()}</div>
        <div className={styles.md3}>
          <CldImage src={item.imgurl || ''} height={300} width={500} alt="Profile_Image" />
        </div>
        <div className={styles.md00}>
          <div className={styles.md1}>
            <p>TITLE</p>{item.title}
          </div>
          <div className={styles.md2}>
            <p>CONTENT</p>{item.content}
          </div>
        </div>
      </div>
    ))
  );

  return (
    <div className={styles.blogdiv}>
      <Helmet>
        <title>Skillsail Blogs</title>
        <meta name="description" content="Explore the latest blogs from Skillsail." />
      </Helmet>

      <h2 className={styles.madimioneregular}>SKILLSAIL BLOGS</h2>

      <Suspense fallback={<BlogLoading />}>
        {dataresponse.length === 0 ? <BlogLoading /> : renderBlogs()}
      </Suspense>
    </div>
  );
}
