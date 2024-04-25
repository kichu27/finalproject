'use client' 
import styles from './page.module.css';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Link from "next/link"
import Script from 'next/script';



export default function Homepage() {
  const [User, setUser] = useState({ username: '', number: '', email: '', password: '' });
  const [passwordError, setPasswordError] = useState('');
  const [serverMessage, setServerMessage] = useState('');
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [evm , setevm] = useState(false);
  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  useEffect(() => {
    if (User.password.length < 6 && User.password.length > 0) {
      setPasswordError('The Password Should Be At Least 6 Characters Long');
      setButtonDisabled(true);
    } 
    else {
      setPasswordError('');
      setButtonDisabled(false);
    }
  }, [User.password]);

  const handleSubmit = async () => {
    try {
      const response = await fetch('/api/users/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(User),
      });

      const data = await response.json();
   
      if (data.success) {
        setPasswordError('');
        setServerMessage(data.message);
        setevm(true)
        router.push('/LOGIN')
        
      } else {
        setServerMessage(data.message);
      }
    } catch (error) {
      console.error('User Registration Failed ', error);
    }
  };


  return (
    <div className={styles.body}>

<Head> 
  
<meta name="google-site-verification" content="TgYVk9UwiLqATcJpCDeqVhzZr7QeJFoHX614xxDqlMs" />

  
<meta property="og:title" content="SkillSail" />
<meta property="og:description" content="
Skillsail is an innovative online platform designed to empower learners by offering a diverse range of exciting courses. Whether you're looking to enhance your professional skills, explore new interests, or simply expand your knowledge, Skillsail provides a curated selection of courses taught by expert instructors."/>
<meta property="og:image" content="https://finalproject-p54m2jb9j-kartiks-projects-3fb81984.vercel.app/opengraph-image.png?3fe51da6361755b1"/>
<meta property="og:url" content="https://finalproject-p54m2jb9j-kartiks-projects-3fb81984.vercel.app/"/>
<meta property="og:site_name" content="Skillsail "/>
<meta property="og:type" content="website"/>
        

<meta name="twitter:card" content="summary_large_image"/>
<meta name="twitter:title" content="SkillSail"/>
<meta name="twitter:description" content="
Skillsail is an innovative online platform designed to empower learners by offering a diverse range of exciting courses. Whether you're looking to enhance your professional skills, explore new interests, or simply expand your knowledge, Skillsail provides a curated selection of courses taught by expert instructors."/>
<meta name="twitter:image" content="https://finalproject-p54m2jb9j-kartiks-projects-3fb81984.vercel.app/opengraph-image.png?3fe51da6361755b1"/>




</Head>

 
<div className={styles.header}>
  
<Link href="/LOGIN"> <button className={styles.but} > LOGIN  </button> </Link>  
<Link href="/SIGNUP"> <button className={styles.but} > SIGNUP </button> </Link>  

   </div>

      
    </div>
  );
}
