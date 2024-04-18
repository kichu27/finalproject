"use client"

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import styles from "@/app/styles/test.module.css";
import Image from "next/image";

export default function Testimonials() {
  const { ref, inView } = useInView({
    triggerOnce: true, 
    threshold: 0.5, 
  });

  const variants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants}
      transition={{ duration: 0.5 }}
      className={styles.maindivvv} 
    >
      <div className={styles.subdiv111}>
        <h1>OUR TESTIMONIALS</h1>
        <Image src="/star.png" className={styles.star} alt="star"  height={200} width={200} /> {/* Update image path */}
      </div>

      <div className={styles.subdiv3}>
  <div className={styles.subbox}>
    <div className={styles.sbcon}>
      <p>
        Skillsail has been instrumental in expanding my knowledge in digital marketing.
        The courses are well-structured and practical, allowing me to apply what
        I learn directly to my work. Highly recommended!
      </p>
    </div>
    <div className={styles.sbdes}>
      <p>Alice Thompson</p>
      <p>Marketing Professional</p>
    </div>
  </div>

  <div className={styles.subbox}>
    <div className={styles.sbcon}>
      <p>
        Ive discovered my passion for web development through Skillsail.
        The instructors are engaging and supportive, making complex concepts
        easy to grasp. Now Im confident in building my own websites!
      </p>
    </div>
    <div className={styles.sbdes}>
      <p>Michael Johnson</p>
      <p>Web Developer</p>
    </div>
  </div>
</div>

    </motion.div>
  );
}
