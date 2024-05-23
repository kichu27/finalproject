'use client';

import React, { useState } from 'react';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';
import Link from "next/link"
import style from "@/app/LOGIN/page.module.css"
import Head from 'next/head';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function Loginpage() {
  
  const notify = () => toast(" SUCCESSFULL LOGIN !");

  const [user, setuser] = useState({ email: '', password: '' });
  const [servermsg, setservermsg] = useState('');
  const router = useRouter();

  function handlechange(e) {
    const { name, value } = e.target;

    setuser((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  async function handlesubmit() {
    try {
      const response = await fetch('/api/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      });

      const { status, message, token } = await response.json();
      setservermsg(message);
      notify()
      if (status === 200) {
        Cookies.set('token', token, { expires: 1 });
        router.push('/userhome');
      } else {
        console.log('No Cookie Generated!');
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className={style.container}>
      <Head>


  <meta name="google-site-verification" content="TgYVk9UwiLqATcJpCDeqVhzZr7QeJFoHX614xxDqlMs" />




      </Head>
      <h1 className={style.title}>LOG IN</h1>
      <div className={style.containerStyle}>
        <input
          type="text"
          placeholder="Email"
          value={user.email}
          onChange={handlechange}
          name="email"
          className={style.input}
        />
        <input
          type="password"
          placeholder="Password"
          value={user.password}
          onChange={handlechange}
          name="password"
          className={style.input}
        />
        <p className={style.errorStyle}>{servermsg}</p>
        <div className={style.divdiv}>
          <button onClick={handlesubmit} className={style.button}>
            LOGIN
          </button>
          <button className={style.button}>
            <Link className={style.link} href="/SIGNUP">
              SIGNUP
            </Link>
          </button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

