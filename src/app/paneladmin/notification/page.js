"use client"

import React, { useState } from 'react';
import style from "@/app/styles/courseManagement.module.css"

function Page() {
  const [noti, setNoti] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/admin/sendnoti", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ msg: noti }),
      });

      if (response.ok) {
        setMessage('Notification sent successfully!');
        setNoti('');
      } else {
        setError('Failed to send notification.');
      }
    } catch (error) {
      setError('An error occurred while sending the notification.');
      console.log(error);
    }
  };

  return (
    <div className={style.md1}>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {message && <p style={{ color: 'green' }}>{message}</p>}
      <form onSubmit={handleSubmit} className={style.md3} >
        <input
          type='text'
          required={true}
          placeholder='Enter the notification'
          id='notification'
          value={noti}
          onChange={(e) => setNoti(e.target.value)}
        />
        <button className={style.but1}type='submit'>SUBMIT</button>
      </form>
    </div>
  );
}

export default Page;
