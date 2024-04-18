
'use client';


import React, { useState } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';
import { CldUploadButton } from 'next-cloudinary';
import style from "@/app/styles/courseManagement.module.css"
export default function CourseManagement() {

  const [public_id, setPublicId] = useState("");

  const [formData, setFormData] = useState({
    courseName: '',
    instructor: '',
    startDate: '',
    endDate: '',
    description: '',
    imageURL:"" , 
    subDescription: '',
    price:'' ,
    category: '',
     
  });

  const handleSuccess = async (res) => {
    try {
      const { event, info } = res;
    
      console.log(info.secure_url);
      setPublicId(info.secure_url);

      setFormData(prevState => ({
        ...prevState,
        imageURL: info.secure_url
      }));

      console.log(formData);
      console.log('course picture updated successfully');
    
    } catch (error) {
      console.error('Error updating course picture:', error);
    }
  };
  

  const [message, setMessage] = useState('');



  const [categoryOptions, setCategoryOptions] = useState([
    'DATA SCIENCE',
    'FULL STACK JAVA',
    'FULL STACK WEB DEVELOPEMENT',
    'FULL STACK APP DEVELOPEMENT',
  ]);


  const handleInputChange = (event) => {
    const { name, value } = event.target;

    if (name === 'category') {
      setCategoryOptionsVisible(true);
    }

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCategorySelect = (selectedCategory) => {
    setFormData({
      ...formData,
      category: selectedCategory,
    });

    setCategoryOptionsVisible(false);
  };

  const [categoryOptionsVisible, setCategoryOptionsVisible] = useState(false);

  const handleFormSubmit = async (event) => {

    
    console.log("the form ",formData);
    event.preventDefault();

    try {
      const response = await fetch('/api/admin/CR', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const responseData = await response.json();

      const { status, message, success } = responseData;

      setMessage(message);

      // Reset the form after successful submission
      if (success) {
        setFormData({
          courseName: '',
          instructor: '',
          startDate: '',
          endDate: '',
          description: '',
          subDescription: '',
          price:'' ,
          category: '',
           
        });
      }
    } catch (error) {
      console.error('Error during fetch:', error);
    }
  };

  return (
    
    <div className={style.md}>

<Head>
        <title>Course Management - Skillsail</title>
        <meta
          name="description"
          content="Register new courses on Skillsail. Manage course details and categories for online learning."
        />
      </Head>

<Image src = "/c1.jpg" height={300} width={300} alt='course register'/>


      <h1>Course Registration</h1>
      <form onSubmit={handleFormSubmit} className={style.form}>
        <label htmlFor="courseName" >
          Course Name:
        </label>
        <input
          type="text"
          id="courseName"
          name="courseName"
          value={formData.courseName}
          onChange={handleInputChange}
          required
   
        />

        <label htmlFor="instructor" >
          Instructor:
        </label>
        <input
          type="text"
          id="instructor"
          name="instructor"
          value={formData.instructor}
          onChange={handleInputChange}
          required
        
        />

        <label htmlFor="startDate" >
          Start Date:
        </label>
        <input
          type="date"
          id="startDate"
          name="startDate"
          value={formData.startDate}
          onChange={handleInputChange}
          required
          
        />

        <label htmlFor="endDate">
          End Date:
        </label>
        <input
          type="date"
          id="endDate"
          name="endDate"
          value={formData.endDate}
          onChange={handleInputChange}
          required
    
        />

        <label htmlFor="description" >
          Description:
        </label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleInputChange}
          required
       
        />

        <label htmlFor="subDescription" >
          Sub-Description:
        </label>
        <input
          type="text"
          id="subDescription"
          name="subDescription"
          value={formData.subDescription}
          onChange={handleInputChange}
        
        />

        
<label htmlFor="price" >
          Price:
        </label>
        <input
          type="number"
          id="price"
          name="price"
          value={formData.price}
          onChange={handleInputChange}
    
        
        />

        <label htmlFor="category">
          Category:
        </label>
        <input
          type="text"
          id="category"
          name="category"
          value={formData.category}
          onChange={handleInputChange}
          onFocus={() => setCategoryOptionsVisible(true)}
         
        />



        {categoryOptionsVisible && (
          <ul>
            {categoryOptions.map((option) => (
              <li key={option} onClick={() => handleCategorySelect(option)}>
                {option}
              </li>
            ))}
          </ul>
        )}


<button className={style.but} > <CldUploadButton
      uploadPreset="kartikp"
      cloudName={process.env.CLOUDINARY_NAME}
      onSuccess={handleSuccess}
    /> </button>
 
        

        {message && <div >{message}</div>}
        <button  className={style.but} type="submit" >
          Register Course
        </button>
      </form>


     <button  className={style.but}>  <Link href="/paneladmin/coursem/viewcourses">VIEW COURSES</Link></button>
    </div>
  );
}
