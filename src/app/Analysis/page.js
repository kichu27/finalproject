"use client"
import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import style from '@/app/styles/ana.module.css';


function Analysis() {

 
  const [analyticsData, setAnalyticsData] = useState([]); 
  const [xa , setxa] = useState([])
  const [ya , setya] = useState([])

 const [d2 , setd2] = useState([])
   useEffect(() => {
    fetchAnalytics(); 
  }, []);




  const fetchAnalytics = async () => {

    try {
      const response = await fetch('/api/admin/analysis', { method: 'GET' }); 
      if (!response.ok) {
        throw new Error('Failed to fetch analytics data');
      }
      const {data , data2} = await response.json(); 

      setAnalyticsData(data);
      setd2(data2)
   
      
    
    } catch (error) {
      console.error('Error fetching analytics:', error.message);
    }
  };

  return (
    <div>
      <Header />


      <div className={style.maindiv}>
        <div className={style.ca}>
        
        <div className={style.p}> <p>COURSE ANALYTICS CATEGORY WISE</p></div>

          {analyticsData.length > 0 && (
            <div className={style.card4}>
           
              {analyticsData.map((item) => (
                <div className={style.card1} key={item._id}>
                  <div> <h2 className={style.head}>{item._id}</h2></div>

                 <div> <p className={style.label}>Category Count</p><p> {item.catcount} </p> </div>
<div className={style.card2}>    <div className={style.card3}><p className={style.label}>Max Course Name</p> <p>{item.maxcoursename} </p> </div>
                 <div className={style.card3}> <p className={style.label}>Max Course Price</p><p> ₹{item.maxcourseprice} </p> </div></div>
              
                 <div className={style.card2}>    <div className={style.card3}> <p className={style.label}>Min Course Name</p><p> {item.mincoursename} </p> </div>
                 <div className={style.card3}> <p className={style.label}>Min Course Price</p><p> ₹{item.mincourseprice} </p> </div>
</div>
               
                 <div><p className={style.label}> Total Courses Cost</p> <p> ₹{item.totalcoursesum} </p> </div>

                </div>
              ))}
         </div>
          )}
        </div>


      </div>


  
        <div className={style.ca}>
        
        <div className={style.p}> <p>COURSE ANALYTICS REVENUE </p></div>

           {d2.length > 0 && (
            <div className={style.card4}>
           
              {d2.map((item) => (
                <div className={style.card1} key={item._id}>
                  <div> <h2 className={style.head}>{item._id}</h2></div>

                 <div> <p className={style.label}>CourseCount Count</p><p> {item.CourseCount} </p> </div>
               
                 <div className={style.card2}>    <div className={style.card3}> <p className={style.label}>Revenue Generated</p><p> {item.RevenueGenerated} </p> </div>
            
</div>
               


                </div>
              ))}




         </div>
          )} 
        </div>


     




      <Footer />
    </div>
  );
}

export default Analysis;
