'use client' 

import styles from './page.module.css';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

export default function Homepage() {
  const [User, setUser] = useState({ username: '', number: '', email: '', password: '' });
  const [passwordError, setPasswordError] = useState('');
  const [serverMessage, setServerMessage] = useState('');
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [evm , setevm] = useState(false)

    const router = useRouter() 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  useEffect(() => {
    if (User.password.length < 6 && User.password.length >0 ) {
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
    <div className={styles.container}>
      <h1 className={styles.title}>Sign Up</h1>
      <input
        className={styles.input}
        name="username"
        type="text"
        value={User.username}
        placeholder="Enter Full Name"
        onChange={handleChange}
      />
      <input
        className={styles.input}
        name="number"
        type="text"
        value={User.number}
        placeholder="Enter Phone Number"
        onChange={handleChange}
      />
      <input
        className={styles.input}
        name="email"
        type="email"
        value={User.email}
        placeholder="Enter Email"
        onChange={handleChange}
      />
      <input
        className={styles.input}
        name="password"
        type="password"
        value={User.password}
        placeholder="Enter Password"
        onChange={handleChange}
      />
      {passwordError && <p className={styles.error}>{passwordError}</p>}
      {serverMessage && <p className={styles.error}>{serverMessage}</p>}
      {evm && <p className={styles.error}>Check Email for Verification and Login !</p>}
      <button
        className={buttonDisabled ? styles.buttonDisabled : styles.button}
        onClick={handleSubmit}
        disabled={buttonDisabled}
      >
        {buttonDisabled ? 'NO SIGNUP' : 'SIGNUP'}
      </button>


      
    </div>
  );
}
