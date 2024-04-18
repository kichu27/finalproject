"use client"
import React, { useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import styles from "@/app/styles/info.module.css"

export default function Info() {
  const { ref, inView } = useInView({
    triggerOnce: true, // Only trigger once
    threshold: 0.5, // Trigger when at least 50% of the component is in view
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
      transition={{ duration: 1.5 }}
      className={styles.maindivv}
    >
      <div className={styles.subdiv1}>
        <h1> Welcome to SKILLSAIL</h1>
        <p>
         
Welcome to Skillsail, your premier destination for unlocking your full potential and mastering new skills! At Skillsail, were dedicated to empowering individuals like you to embark on a transformative learning journey across diverse domains. Whether youre seeking to expand your expertise in technology, business, arts, or personal development, we offer a curated selection of courses tailored to your interests and goals. <br/><br/>

Discover a wealth of high-quality courses crafted by industry experts and thought leaders. From beginner-friendly tutorials to advanced masterclasses, our platform caters to learners of all levels. Explore innovative topics, stay ahead of industry trends, and gain practical insights that will propel your career and personal growth forward.
        </p>
      </div>

      <div className={styles.subdiv2}>
        <Image  src="/i1.png" alt="info" height={400} width={500} />
      </div>
    </motion.div>
  );
}