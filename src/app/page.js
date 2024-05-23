'use client' 
import styles from './page.module.css';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Link from "next/link"



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
<title>User Home</title>
<meta name="google-site-verification" content={process.env.GOOGLE_VERIFICATION_ID} />

<meta name="title" content="SKILLSAIL - Explore & Buy Exciting Courses" />
<meta name="description" content="Discover a wide range of engaging courses and make purchases conveniently." />

<meta property="og:type" content="website" />
<meta property="og:url" content="https://finalproject-gold.vercel.app/" />
<meta property="og:title" content="SKILLSAIL - Explore & Buy Exciting Courses" />
<meta property="og:description" content="Discover a wide range of engaging courses and make purchases conveniently." />
<meta property="og:image" content="https://metatags.io/images/meta-tags.png" />


<meta property="twitter:card" content="summary_large_image" />
<meta property="twitter:url" content="https://finalproject-gold.vercel.app/" />
<meta property="twitter:title" content="SKILLSAIL - Explore & Buy Exciting Courses" />
<meta property="twitter:description" content="Discover a wide range of engaging courses and make purchases conveniently." />
<meta property="twitter:image" content="https://metatags.io/images/meta-tags.png" />

</Head>

 
<div className={styles.header}>
  
<Link href="/LOGIN"> <button className={styles.but} > LOGIN  </button> </Link>  
<Link href="/SIGNUP"> <button className={styles.but} > SIGNUP </button> </Link>  

   </div>

      
    </div>
  );
}
