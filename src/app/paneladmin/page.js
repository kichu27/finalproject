'use client'

import React from 'react';
import { useRouter } from 'next/navigation';
import pastyles from "src/app/paneladmin/pa.module.css";

export default function AdminPage() {
  const router = useRouter();

  const handleUserManagementClick = () => {
    router.push('/paneladmin/userm');
  };

  const handleCourseManagementClick = () => {
    router.push('/paneladmin/coursem');
  };

  const handleblogManagementClick = () => {
    router.push('/paneladmin/blogcreate');
  };

  const handlenotificationManagementClick = () => {
    router.push('/paneladmin/notification');
  };



  return (
    <div className={pastyles.mainbody}>

<div className={pastyles.body}>
      <h1 className={pastyles.h1}>WELCOME ADMIN !</h1>

      <div className={pastyles.MaindivManagement}>
        <div onClick={handleUserManagementClick} className={pastyles.div}>
          <h2>User Management</h2>
        </div>

        <div onClick={handleCourseManagementClick} className={pastyles.div}>
          <h2>Course Management</h2>
        </div>

        <div onClick={handleblogManagementClick} className={pastyles.div}>
          <h2>Blog Management</h2>
        </div>

        <div onClick={handlenotificationManagementClick} className={pastyles.div}>
          <h2>Notification Management</h2>
        </div>
      </div></div>

    </div>
  );
}
