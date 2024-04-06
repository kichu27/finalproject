"use client"

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import styles from "@/app/paneladmin/userm/styles.module.css"

function UserCard({ user }) {

  const [message , Setmessage] = useState('');

  async function handledeltebutton() {
    try {
      const toDeleteUser = user._id;

      const response = await fetch('/api/admin/deleteuser', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userId: toDeleteUser }),
      });

      if (response.ok) {
        const { message } = await response.json();
        Setmessage(message);
      } else {
        console.log('Failed to delete user');
      }
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  }
  return (
    <motion.div
      initial={{ opacity: 0, x: 50, y: 0 }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      exit={{ opacity: 0, x: -50, y: -50 }}
      transition={{ duration: 0.5 }}
      className={styles.userCardStyle}
    >
      <Helmet>
        <title>{user.username} Profile - Admin Dashboard - Skillsail</title>
        <meta name="description" content={`User ID: ${user._id}, Username: ${user.username}, Email: ${user.email}. Manage and delete user profiles in the Skillsail admin dashboard.`} />
      </Helmet>
      <div className={styles.subdiv1}>
        <p className={styles.userInfo}>User ID: {user._id}</p>
        <p className={styles.userInfo}>Username: {user.username}</p>
        <p className={styles.userInfo}>Email: {user.email}</p>
        <p className={styles.userInfo}>Number: {user.number}</p>
        <p className={styles.userInfo}>Verified: {user.isVerified ? 'Yes' : 'No'}</p>
        <button className={styles.deleteButton} onClick={handledeltebutton}>Remove</button>
        {message && <p className={styles.message}>{message}</p>}
      </div>
    </motion.div>
  );
  ;
}



export default UserCard;
