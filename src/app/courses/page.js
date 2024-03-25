'use client'

import { Suspense, useEffect, useState } from 'react';
import Welcomeuser from '../components/Welcomeuser';
import s from "@/app/styles/s.module.css"
import CoursesDisplay from '../components/CoursesDisplay';
import CourseLoad from '../components/CourseLoad';


export default function CoursePage() {

  const [name, setname] = useState("");
  const [array, setarray] = useState([]);
  const [stateD1, setStateD1] = useState([]);
  const [stateD2, setStateD2] = useState([]);
  const [stateD3, setStateD3] = useState([]);
  const [stateD4, setStateD4] = useState([]);

  async function checkuser() {

    try {
      const response = await fetch('/api/users/me', {
        method: 'GET',
      });

      const { user } = await response.json()

      if (user) {
        const Name = user.username;
        setname(Name)
      }
      else {
        alert(" no userdata ! ")
      }


    }
    catch (error) {
      console.log("the error from userhome", error);
    }
  }

  async function popularcourses() {
    try {
      const response = await fetch('/api/users/pc', {
        method: 'GET',
      });

      const rd = await response.json();
      const { courses } = rd;
      setarray(courses);
    } catch (error) {
      console.log(error);
    }
  }


  async function getcoursesdata() {

    try {
      const response = await fetch('/api/users/allcourses', {
        method: 'GET',
      });

      const data = await response.json();
      const { d1, d2, d3, d4 } = data;
      console.log("the d3 data is", d3);
      setStateD1(d1)
      setStateD2(d2)
      setStateD3(d3)
      setStateD4(d4)

    } catch (error) {
      console.log(error);
    }





  }

  useEffect(() => {
    checkuser();
    getcoursesdata();
    popularcourses();


  }, []);





  return (
    <div className={s.mdiv}>

      <div className={s.head}>
        <Welcomeuser username={name} className={s.div} />
      </div>


  

        <CoursesDisplay Heading="POPULAR COURSES" State={array} />
        <CoursesDisplay Heading="APP DEVELOPEMENT" State={stateD3} />
        <CoursesDisplay Heading="DATA SCIENCE PYTHON" State={stateD1} />
        <CoursesDisplay Heading="FULL STACK JAVA" State={stateD2} />
        <CoursesDisplay Heading="FULL STACK WEB DEVELOPEMENT" State={stateD4} />
  
   
       

    </div>
  );
}

