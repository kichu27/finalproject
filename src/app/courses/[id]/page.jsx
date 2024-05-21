  'use client'

  import { useEffect, useState } from "react";
  import Image from "next/image";
  import cd from "@/app/styles/cd.module.css";
  import Link from "next/link"
  import Head from "next/head";
  import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  import { motion } from "framer-motion";
  import { useInView } from "react-intersection-observer";
  

  





  export default function CoursePage({ params }) {

    
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  
    const notify = () => toast("SUCCESSFULL ADDED TO CART !");
    
    const { id } = params;
  
    const [course, setCourse] = useState(null);
   

    
    async function getCourseInfo(id) {
      try {
        const response = await fetch(`/api/users/getcourseinfo?id=${id}`, {
          method: "GET",
        });

        const  {data}  = await response.json();

        if(data)
        {
        setCourse(data);
     
        }
  else{
    alert("no data")
  }
        
        
      } catch (error) {
        console.error(error);
      }
    }

    useEffect(() => {
      getCourseInfo(id);
    }, [id]);


    async function addtocart(value)
    {
    
      try {
        
    const response = await fetch('/api/users/atcart' , 
    {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({value}),
    });

    notify()
    
      } catch (error) {
        console.error(error)
      }

    }

    function calculateDuration(startDate, endDate) {
      const start = new Date(startDate);
      const end = new Date(endDate);
      const diffTime = Math.abs(end - start);
      const diffWeeks = Math.ceil(diffTime / (1000 * 60 * 60 * 24 * 7));
      return diffWeeks;
    }
    return (
      <motion.div
        className={cd.div1}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.5 }}
        ref={ref}
      >
    
        <div className={cd.div2}>
          <Link href="/courses">
            <Image className={cd.i} src={"/hh.png"} width={30} height={30} alt='Go back' />
          </Link>
        </div>
    
        {course && (
          <div className={cd.div3} key={course?._id}>
    
            <motion.div
              className={cd.div4}
              initial={{ x: -100, opacity: 0 }}
              animate={inView ? { x: 0, opacity: 1 } : {}}
              transition={{ duration: 0.5 }}
            >
    
              <div className={cd.div40}>
                <h1>{course.courseName}</h1>
                <p>{course.subDescription}</p>
              </div>
    
              <div className={cd.div41}>
                <Image className={cd.img} src={"/cd.png"} width={430} height={430} alt='Go back' />
              </div>
            </motion.div>
    
            <motion.div
              className={cd.div5}
              initial={{ x: 100, opacity: 0 }}
              animate={inView ? { x: 0, opacity: 1 } : {}}
              transition={{ duration: 0.5 }}
            >
    
              <div className={cd.div41}>
                <Image className={cd.img} src={"/cd4.png"} width={430} height={430} alt='Go back' />
              </div>
              <div className={cd.div40}>
                <h1>DESCRIPTION</h1>
                <p>{course.description}</p>
              </div>
    
            </motion.div>
    
            <motion.div
              className={cd.div4}
              initial={{ x: -100, opacity: 0 }}
              animate={inView ? { x: 0, opacity: 1 } : {}}
              transition={{ duration: 0.5 }}
            >
    
              <div className={cd.div40}>
                <h1>COURSE DURATION</h1>
                <div className={cd.div42}>
                  <p>
                    <span className={cd.startDate}>{new Date(course.startDate).toLocaleDateString()}</span>
                    <span className={cd.dateSeparator}> to </span>
                    <span className={cd.endDate}>{new Date(course.endDate).toLocaleDateString()}</span>
                  </p>
                  <p className={cd.durationDetails}>This course spans over a period of {calculateDuration(course.startDate, course.endDate)} weeks, covering a comprehensive curriculum.</p>
                </div>
              </div>
    
              <div className={cd.div41}>
                <Image className={cd.img} src={"/cd3.png"} width={330} height={330} alt='Go back' />
              </div>
    
            </motion.div>
    
            <motion.div
              className={cd.div4}
              initial={{ x: 100, opacity: 0 }}
              animate={inView ? { x: 0, opacity: 1 } : {}}
              transition={{ duration: 0.5 }}
            >
    
              <div className={cd.div41}>
                <Image className={cd.img} src={"/cd5.png"} width={330} height={330} alt='Go back' />
              </div>
              <div className={cd.div40}>
                <h1>INSTRUCTOR</h1>
                <strong><p>{course.instructor}</p></strong>
                <p>Degrees: Bachelors Degree in Computer Science, Masters Degree in Software Engineering</p>
                <p>Experience: Over 10 years of industry experience in web development, specializing in full-stack development, RESTful APIs, and database management. Previously worked at leading tech companies such as ABC Tech and XYZ Solutions.</p>
              </div>
    
            </motion.div>
    
    
            <motion.div
              className={cd.div4}
              initial={{ x: -100, opacity: 0 }}
              animate={inView ? { x: 0, opacity: 1 } : {}}
              transition={{ duration: 0.5 }}
            >
    
              <div className={cd.div40}>
                <h1>COURSE PRICE</h1>
                <strong><p>Rs.{course.price}</p></strong>
                <p>Discounts: Early bird discount available for registrations before {new Date(course.startDate).toLocaleDateString()}.</p>
                <p>Payment Options: Flexible payment plans and installment options are available. Contact us for more information.</p>
              </div>
    
              <div className={cd.div41}>
                <Image className={cd.img} src={"/cd6.png"} width={330} height={330} alt='Go back' />
              </div>
    
            </motion.div>
    
            <div className={cd.div6}>
    
              <motion.div
                className={cd.div60}
                initial={{ x: -100, opacity: 0 }}
                animate={inView ? { x: 0, opacity: 1 } : {}}
                transition={{ duration: 0.5 }}
              >
    
                <Image className={cd.img} src={"/cd7.png"} width={130} height={130} alt='Go back' />
                <h3>COURSE SYLLABUS</h3>
                <ul>
                  <li>Introduction to Web Development</li>
                  <li>HTML & CSS Basics</li>
                  <li>JavaScript Fundamentals</li>
                  <li>Advanced JavaScript</li>
                  <li>React and Redux</li>
                  <li>Node.js and Express</li>
                  <li>Database Integration</li>
                </ul>
              </motion.div>
    
              <motion.div
                className={cd.div60}
                initial={{ x: 0, opacity: 0 }}
                animate={inView ? { x: 0, opacity: 1 } : {}}
                transition={{ duration: 0.5 }}
              >
    
                <Image className={cd.img} src={"/cd8.png"} width={130} height={130} alt='Go back' />
                <h3>LEARNING OUTCOMES</h3>
                <ul>
                  <li>Build modern web applications</li>
                  <li>Understand the fundamentals of JavaScript</li>
                  <li>Create and manage databases</li>
                  <li>Develop backend services</li>
                </ul>
              </motion.div>
    
              <motion.div
                className={cd.div60}
                initial={{ x: 100, opacity: 0 }}
                animate={inView ? { x: 0, opacity: 1 } : {}}
                transition={{ duration: 0.5 }}
              >
    
                <Image className={cd.img} src={"/c9.png"} width={130} height={130} alt='Go back' />
                <h3>PREREQUISITES</h3>
                <ul>
                  <li>Basic understanding of HTML, CSS, and JavaScript.</li>
                  <li>Familiarity with basic programming concepts.</li></ul> </motion.div>
      </div>

      <div className={cd.div7}>
        <Image src={"/buy.png"} width={100} height={100} alt="Course Logo" onClick={() => {
          addtocart(course._id);
        }} />
      </div>

      <ToastContainer />
    </div>
  )}
</motion.div>
);
    
  }
