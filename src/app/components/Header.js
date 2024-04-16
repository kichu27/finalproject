
"use client"
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import styles from 'src/app/styles/nav.module.css';
import { useRouter } from 'next/navigation';
import { useAnimate, stagger, motion } from "framer-motion";
import Image from "next/image"

export default function Header() {

  const router = useRouter()
  const [isadmin, setisadmin] = useState(false);
  const [open, setOpen] = useState(false);
const [scope, animate] = useAnimate();
const [num , setnum] = useState(0)
const [d  , setd] = useState(false)
const [noti, setnotis] = useState([])

  async function checkuser() {
    try {
      const response = await fetch('/api/users/me', {
        method: 'GET',
      });

      if (response.ok) {
        const responsedata = await response.json();
      

        const { user } = responsedata;
       

        if (user.isAdmin === true) {
          setisadmin(true);
        }
      } else {
        console.log('BAD RESPONSE checkuser ROUTE!');
      }
    } catch (error) {
      console.error('Error checking user:', error);
    }
  }

  async function checkandgetnotifications() {
    try {
      const response = await fetch('/api/users/notiinfo', {
        method: 'GET',
      });

      const resdata = await response.json()
      const {number , notis} = resdata ;
      setnum(number)
      setnotis(notis)
      console.log(notis);
     
    } catch (error) {
      console.error('Error checking notification info :', error);
    }
  }

  useEffect(() => {
    checkuser();
    checkandgetnotifications();
  }, []);


  const handlelogout = async () => {
    try {
      const response = await fetch('/api/users/logout', { method: 'GET' });

      if (response.status === 200) {
        try{router.push("/") }
       catch(error){
         console.log("error" , error)
       } 
        console.log('Success Logout!');
      } else {
        console.log('BAD RESPONSE logout ROUTE!');
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    document.title = isadmin ? 'Admin Panel - Skillsail' : 'Skillsail - Online Courses Platform';
  }, [isadmin]);

  return (
    <div>
      <Head>
        <meta name="description" content={`Explore ${isadmin ? 'admin panel' : 'online courses and blogs'} on Skillsail. Enhance your skills and knowledge with our high-quality courses.`} />
      </Head>

      <nav className={styles.nav}>
        <ul className={styles.navList}>
          {!isadmin && <li><Link  className={styles.navbut} href="/courses">COURSES</Link></li>}
  {!isadmin && <li><Link  className={styles.navbut} href="/FILTERPAGE">FILTER</Link></li>}
          {!isadmin && <li><Link className={styles.navbut} href="/blog">BLOGS</Link></li>}
          {isadmin ? <li><Link href="/paneladmin">PANEL</Link></li> : null }
          
          {isadmin ? (
            <li className={styles.dropdown}>
              <button className={styles.dropbtn}>ADMIN</button>
              <div className={styles.dropdownContent}>
                <Link href="" onClick={handlelogout}>Logout</Link>
              </div>
            </li>
          ) : (
            <li className={styles.dropdown}>
              <button className={styles.dropbtn}>PROFILE</button>
              <div className={styles.dropdownContent}>
                <Link href="/profiledashboard">View Profile</Link>
                <Link href="/yourcourses">Cart</Link>
                <Link href="/favcourse">Liked Courses</Link>
                <Link href="" onClick={handlelogout}>Logout</Link>
              </div>
            </li>

    
            
          )}

          {!isadmin && <li> <Image onClick={()=>{setd(!d) }} className={styles.bell} src="/nb.png" alt='bell' width={35} height={35}/></li>}
          <div  className={styles.notidiv}> <p>{num}</p></div>
          {d === true ? (
 <div className={styles.notifidiv}>
 {noti.map((n) => (
   <div className={styles.sepdiv} key={n._id}>
     <div> {n.message}</div> <div className={styles.timediv}>{new Date(n.createdAt).toLocaleString()}</div>
   </div>
 ))}
</div>
) : null}

<div className={styles.forumchat}> <Link href="/community" > <Image src="/group.png" alt='forum chat' height={43} width={43} /></Link>     </div>

        </ul> 
      </nav>
    </div>
  );
}
