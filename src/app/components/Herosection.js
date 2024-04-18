"use client"

import React from 'react';
import Head from 'next/head';
import styles from 'src/app/styles/page.module.css';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Herosection(props) {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
  };

  const contentVariants = {
    hidden: { y: -50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5, delay: 0.5 } },
  };

  return (
    <motion.div
      className={styles.maindiv}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <Head>
        <title>{props.title} - Skillsail</title>
        <meta name="description" content={props.content} />
      </Head>

      <div className={styles.d1}>
        <div className={styles.sd1}>
          <motion.div className={styles.centerContent} variants={contentVariants}>
            <h1>{props.title}</h1>
            <p>{props.content}</p>
          </motion.div>
        </div>

        <div className={styles.sd2}>
          <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.5 }}>
            <Image src={props.url} height={250} width={250} alt="Hero Image" />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

