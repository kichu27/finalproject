"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import style from "@/app/styles/info.module.css";

export default function Info1() {
  const { ref, inView } = useInView({
    triggerOnce: true, // Only trigger once
    threshold: 0.5, // Trigger when at least 50% of the component is in view
  });

  const variants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 50 },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants}
      transition={{ duration: 0.5 }}
      className={style.maindivv} // Update className using CSS module
    >
      <div className={style.subdiv2}> {/* Update className */}
        <Image
          src="/ii3.webp" // Update Image src path
          className={style.i2} // Update className using CSS module
          alt="course preview"
          width={400}
          height={300}
        />
      </div>
      <div className={style.subdiv1}> {/* Update className */}
        <h1>Why Choose Skillsail?</h1>
        <h2>Empower Yourself with Knowledge</h2>
        <p>
          At Skillsail, were passionate about empowering learners like you to
          thrive in todays dynamic world. Our platform offers a diverse range
          of courses designed to help you master new skills and advance your
          career. Whether youre looking to enhance your expertise in technology,
          business, arts, or personal development, Skillsail has you covered.
        </p>
        <p>
          Join a community of lifelong learners and discover expert-led courses
          that fit your interests and goals. Learn at your own pace, explore
          cutting-edge topics, and gain practical skills that can be applied
          immediately in your professional and personal life.
        </p>
        <p>
          Start your learning journey with Skillsail today and unlock a world
          of opportunities. Your success is our mission!
        </p>
      </div>
    </motion.div>
  );
}
