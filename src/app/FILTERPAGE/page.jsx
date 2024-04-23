"use client"
import React, { useState, useEffect } from "react";
import Head from 'next/head';
import styles from "@/app/styles/filter.module.css";
import Courseinfo from "../components/Courseinfo";

export default function FILTERPAGE() {
  const [categories, setCategories] = useState({
    "DATA SCIENCE": false,
    "FULL STACK WEB DEVELOPEMENT": false,
    "FULL STACK JAVA": false,
    "FULL STACK APP DEVELOPEMENT": false
  });

  const [teachers, setTeachers] = useState({
    "KARTIK PATEKAR": false,
    "VAIBHAV": false,
    "SAKSHI": false,
    "AYAN": false
  });

  const [priceRange, setPriceRange] = useState(0);
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetchCourses();
  }, [categories, teachers, priceRange]);

  const fetchCourses = async () => {
    try {
      const selectedCategories = Object.entries(categories)
        .filter(([key, value]) => value)
        .map(([key]) => key);

      const selectedTeachers = Object.entries(teachers)
        .filter(([key, value]) => value)
        .map(([key]) => key);

      const response = await fetch(`/api/users/filtercourses?categories=${JSON.stringify(selectedCategories)}&teachers=${JSON.stringify(selectedTeachers)}&priceRange=${priceRange}`, {
        method: "GET"
      });

      if (!response.ok) {
        throw new Error("Failed to fetch courses");
      }

      const {resdata} = await response.json();
      setCourses(resdata);
     
    } catch (error) {
      console.error("Error fetching courses:", error);
    }
  };

  const handleCategoryChange = (category) => {
    setCategories({
      ...categories,
      [category]: !categories[category]
    });
  };

  const handleTeacherChange = (teacher) => {
    setTeachers({
      ...teachers,
      [teacher]: !teachers[teacher]
    });
  };

  const handlePriceRangeChange = (event) => {
    setPriceRange(event.target.value);
  };

  return (
    <div className={styles.div5}>
      <Head>
        <title>SkillSail - Embark on a Learning Odyssey</title>
        <meta
          name="description"
          content="Navigate your personal journey to success with SkillSail's compassionate guidance and expert courses."
        />
      </Head>

   
      
      <div className={styles.App}>
        <div className={styles.div1}>
          <h2>Categories:</h2>
          {Object.keys(categories).map((category) => (
            <label key={category} className={styles.checkboxLabel}>
              <input
                type="checkbox"
                checked={categories[category]}
                onChange={() => handleCategoryChange(category)}
              />
              {category}
            </label>
          ))}
          <br />
          <h2>Teachers:</h2>
          {Object.keys(teachers).map((teacher) => (
            <label key={teacher} className={styles.checkboxLabel}>
              <input
                type="checkbox"
                checked={teachers[teacher]}
                onChange={() => handleTeacherChange(teacher)}
              />
              {teacher}
            </label>
          ))}
          <br />
          <h2>Price Range:</h2>
          <input
            type="range"
            min="0"
            max="5000"
            value={priceRange}
            onChange={handlePriceRangeChange}
            className={styles.priceRangeInput}
          />
          <p className={styles.priceRangeValue}>Current Price Range: ${priceRange}</p>
        </div>
     
        
          <div className={styles.div3}>
            { courses && courses.map(course => (
              <div key={course._id}>
                <Courseinfo c={course} />
              </div>
            ))}
          </div>
        
      </div>

   
    </div>
  );
}
