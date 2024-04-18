import React from 'react';
import Head from 'next/head';
import Herosection from '../components/Herosection';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Info from '../components/Info';
import Info1 from '../components/Info2';
import Testimonials from '../components/Testomonials';
import sty from "@/app/styles/page.module.css"

export default function UserHomepage() {
  return (
    <div className={sty.mmdiv}>
      <Head>
        <title>SkillSail - Embark on a Learning Odyssey</title>
        <meta
          name="description"
          content="Navigate your personal journey to success with SkillSail's compassionate guidance and expert courses."
        />z
      </Head>

      
      <Herosection
        url={'/unity.png'}
        title={'SkillSail'}
        content={
          "Embark on a Learning Odyssey: Navigate Your Personal Journey to Success with SkillSail's Compassionate Guidance and Expert Courses"
        }
      />

<Info />

<Info1 />

<Testimonials />

      <Footer />
    </div>
  );
}
