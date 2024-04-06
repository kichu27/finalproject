'use client'
import UserCard from "@/app/components/UserCard";
import { useEffect, useState } from "react";
import styles from "@/app/paneladmin/userm/styles.module.css"

export default function Userm() {
  const [data, Setdata] = useState();

  async function fetchdata() {
    try {
      const response = await fetch('/api/admin/UM', { method: 'GET' });

      if (response.ok) {
        const responsedata = await response.json();
        
        Setdata(responsedata);
      } else {
        console.log('Response Not Okay!');
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchdata();
  }, []);

  
  return (
    <div className={styles.maindiv}>
      <div className={styles.div1}> <h1> USER MANAGEMENT </h1>
      <h4>Total Users : {data && data.length}</h4> <br /></div>

      <div className={styles.div2}> 
      {data &&
        data.map((user) => (
          <UserCard key={user._id} user={user} />
        ))}</div>
     
     
    </div>
  );
}
