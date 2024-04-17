import React, { useState, useEffect } from "react";
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import "./styles.css";

export default function Filterpage() {
  const [categories, setCategories] = useState({
    dataScience: false,
    fullStackWebDev: false,
    javaDev: false,
    mobileAppDev: false
  });
  const [teachers, setTeachers] = useState({
    kartik: false,
    sakshi: false,
    prajakta: false,
    sharyu: false
  });
  const [priceRange, setPriceRange] = useState(0);
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetchCourses();
  }, [categories, teachers, priceRange]);

  const fetchCourses = async () => {
    try {
      // Filter out categories and teachers with false values
      const selectedCategories = Object.entries(categories).filter(([key, value]) => value).map(([key]) => key);
      const selectedTeachers = Object.entries(teachers).filter(([key, value]) => value).map(([key]) => key);

      const response = await fetch(`/api/filtercourses?categories=${JSON.stringify(selectedCategories)}&teachers=${JSON.stringify(selectedTeachers)}&priceRange=${priceRange}`);
      if (!response.ok) {
        throw new Error("Failed to fetch courses");
      }
      const data = await response.json();
      setCourses(data);
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
    <div>
      <Head>
        <title>SkillSail - Embark on a Learning Odyssey</title>
        <meta
          name="description"
          content="Navigate your personal journey to success with SkillSail's compassionate guidance and expert courses."
        />
      </Head>

      <Header />
      
      <div className="App">
        <div className="div1">
          <h2>Categories:</h2>
          <label>
            <input
              type="checkbox"
              checked={categories.dataScience}
              onChange={() => handleCategoryChange("dataScience")}
            />
            Data Science
          </label>
          <br />
          <label>
            <input
              type="checkbox"
              checked={categories.fullStackWebDev}
              onChange={() => handleCategoryChange("fullStackWebDev")}
            />
            Full Stack Web Dev
          </label>
          <br />
          <label>
            <input
              type="checkbox"
              checked={categories.javaDev}
              onChange={() => handleCategoryChange("javaDev")}
            />
            Java Dev
          </label>
          <br />
          <label>
            <input
              type="checkbox"
              checked={categories.mobileAppDev}
              onChange={() => handleCategoryChange("mobileAppDev")}
            />
            Mobile App Dev
          </label>
          <br />
          <h2>Teachers:</h2>
          <label>
            <input
              type="checkbox"
              checked={teachers.kartik}
              onChange={() => handleTeacherChange("kartik")}
            />
            Kartik
          </label>
          <br />
          <label>
            <input
              type="checkbox"
              checked={teachers.sakshi}
              onChange={() => handleTeacherChange("sakshi")}
            />
            Sakshi
          </label>
          <br />
          <label>
            <input
              type="checkbox"
              checked={teachers.prajakta}
              onChange={() => handleTeacherChange("prajakta")}
            />
            Prajakta
          </label>
          <br />
          <label>
            <input
              type="checkbox"
              checked={teachers.sharyu}
              onChange={() => handleTeacherChange("sharyu")}
            />
            Sharyu
          </label>
          <br />
          <h2>Price Range:</h2>
          <input
            type="range"
            min="0"
            max="1000"
            value={priceRange}
            onChange={handlePriceRangeChange}
          />
          <p>Current Price Range: ${priceRange}</p>
        </div>
        <div className="div2">
          <p>byee</p>
          <ul>
    {courses.map(course => (
      <li key={course._id}>
        <courseinfo c={course} />
      </li>
    ))}
  </ul>
        </div>
      </div>

      <Footer />
    </div>
  );
}
