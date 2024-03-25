import React, { Suspense } from 'react';
import Courseinfo from './Courseinfo';
import s from "@/app/styles/s.module.css";
import CourseLoad from './CourseLoad';


function CoursesDisplay(props) {
  return (
    <div className={s.maindiv}>
      <div className={s.h}>
      <h1>{props.Heading}</h1> <hr />
      </div>

     <Suspense fallback={<CourseLoad /> }>  
      
     {props.State.map((course) => (

      <Courseinfo key={course._id} c={course} />

       ))}
      
    </Suspense> 



    </div>
  );
}

export default CoursesDisplay;
