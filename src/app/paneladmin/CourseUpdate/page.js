    "use client"
    import React, { useEffect, useState } from 'react';
import style from "@/app/styles/updatecourses.module.css"


    export default function CourseUpdate() {
    const [category, setCategory] = useState(""); 
    const [cname, setcname] = useState(""); 
    const [msg , setmessage] = useState("")

    const [courselist , setcourselist ] = useState([])

    const [instructor, setInstructor] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [description, setDescription] = useState("");
  const [subDescription, setSubDescription] = useState("");
  const [price, setPrice] = useState(0);


    const handleCategoryChange = (event) => {
        const selectedCategory = event.target.value;
        setCategory(selectedCategory);
    };

    async function getcategorywisename(name){

try {
    const res = await fetch (`/api/admin/getcatcou/?name=${JSON.stringify(name)}` , {
        method : "GET" , 
    })

    const {data} = await res.json()
    setcourselist(data)

} catch (error) {
    console.log(error);
}

        
        }

        const handleCnameChange = (event) => {
            const selectedCategory = event.target.value;
            setcname(selectedCategory);
        };

useEffect(()=>{

getcategorywisename(category)    



} , [category])

 const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const updatedCourse = {
        cname,
        category,
    
        ...(instructor && { instructor }),
        ...(startDate && { startDate }),
        ...(endDate && { endDate }),
        ...(description && { description }),
        ...(subDescription && { subDescription }),
        ...(price && { price })
      };

   
      const response = await fetch(`/api/admin/getcatcou`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(updatedCourse)
      });

      const data = await response.json()

      setmessage(data.message)

      setTimeout(()=>{

        setmessage("")
      } , 3000)

      if (!response.ok) {
        throw new Error('Failed to update course');
      }

 
      console.log('Course updated successfully!');
    } catch (error) {
      console.error('Error updating course:', error);
    }
  };

    return (
        <div className={style.maindiv1} >
        <div className={style.maindiv} >
        <h1>Course Updation</h1>

        <label htmlFor="categories">Choose a Category:</label> <br/>
        <select id="categories" name="categories" value={category} onChange={handleCategoryChange}>
            <option value="">Select a Category</option>
            <option value="DATA SCIENCE">DATA SCIENCE</option>
            <option value="FULL STACK WEB DEVELOPEMENT">FULL STACK WEB DEVELOPEMENT</option>
            <option value="FULL STACK JAVA">FULL STACK JAVA</option>
            <option value="FULL STACK APP DEVELOPEMENT">FULL STACK APP DEVELOPMENT</option>
        </select>
        <br/>
        
     
        <label htmlFor="cname">Choose a Course:</label>
        <br/>
        <select id="cname" name="cname"  value={cname} onChange={handleCnameChange} >
          <option>Select a Course</option>
          {courselist.map((course) => (
            <option key={course._id} value={course.courseName}>{course.courseName}</option>
          ))}
        </select>

     

      <div>
      <br/>

      <form onSubmit={handleFormSubmit}>
      
      <input type="text" name="instructor" placeholder="Instructor" value={instructor} onChange={(e) => setInstructor(e.target.value)} />
          <input type="date" name="startDate" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
          <input type="date" name="endDate" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
          <input type="text" name="description" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
          <input type="text" name="subDescription" placeholder="SubDescription" value={subDescription} onChange={(e) => setSubDescription(e.target.value)} />
          <input type="number" name="price" placeholder="Price" value={price} onChange={(e) => setPrice(Number(e.target.value))} />
          <button type="submit">Update Course</button>
         
        </form>

      
      </div>
      <p>{msg}</p> 
        </div>

        </div>

    );
    }

