'use client'

import { Suspense, useEffect, useState } from 'react';
import Welcomeuser from '../components/Welcomeuser';
import s from "@/app/styles/s.module.css"
import CoursesDisplay from '../components/CoursesDisplay';
import CourseLoad from '../components/CourseLoad';
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';


export default function CoursePage() {

  const steps = [
    {
      id: '0',
      message: 'Welcome to SkillSail! How can I assist you today?',
      trigger: '1',
    },
    {
      id: '1',
      options: [
        { value: 'support', label: 'Support', trigger: 'support' },
        { value: 'view_blogs', label: 'View Blogs', trigger: 'view_blogs' },
        { value: 'filter_courses', label: 'Filter Courses', trigger: 'filter_courses' },
        { value: 'check_courses', label: 'Check Courses', trigger: 'check_courses' },
        { value: 'community', label: 'SkillSail Community', trigger: 'community' },
      ],
    },
    {
      id: 'support',
      message: 'For support, you can contact us at kartikpatekar27@gmail.com or call 9309065045.',
      trigger: 'anything_else',
    },
    {
      id: 'view_blogs',
      message: 'You can view our blogs. Would you like to continue?',
      trigger: 'anything_else',
    },
    {
      id: 'filter_courses',
      message: 'You can filter courses based on various criteria. Would you like to continue?',
      trigger: 'anything_else',
    },
    {
      id: 'check_courses',
      message: 'You can check our available courses. Would you like to continue?',
      trigger: 'anything_else',
    },
    {
      id: 'community',
      message: 'For any issues, you can check out the SkillSail Community. Would you like to continue?',
      trigger: 'anything_else',
    },
    {
      id: 'anything_else',
      message: 'Is there anything else I can help you with?',
      trigger: '1',
    },
    // Adding more relevant steps for a more detailed conversation
    {
      id: '10',
      message: 'Here are some common questions:',
      trigger: '11',
    },
    {
      id: '11',
      options: [
        { value: 'how_to_enroll', label: 'How to enroll in a course?', trigger: 'how_to_enroll' },
        { value: 'payment_options', label: 'What are the payment options?', trigger: 'payment_options' },
        { value: 'refund_policy', label: 'What is the refund policy?', trigger: 'refund_policy' },
      ],
    },
    {
      id: 'how_to_enroll',
      message: 'To enroll in a course, visit the courses section and click on enroll next to the desired course.',
      trigger: 'anything_else',
    },
    {
      id: 'payment_options',
      message: 'We accept various payment options including credit/debit cards and PayPal.',
      trigger: 'anything_else',
    },
    {
      id: 'refund_policy',
      message: 'Our refund policy allows you to request a refund within 30 days of purchase.',
      trigger: 'anything_else',
    },
    {
      id: '12',
      message: 'Would you like to learn about our top courses?',
      trigger: '13',
    },
    {
      id: '13',
      options: [
        { value: 'yes', label: 'Yes', trigger: 'top_courses' },
        { value: 'no', label: 'No', trigger: 'anything_else' },
      ],
    },
    {
      id: 'top_courses',
      message: 'Our top courses are Web Development, Data Science, and Digital Marketing. Would you like more details on any of these?',
      trigger: '14',
    },
    {
      id: '14',
      options: [
        { value: 'web_development', label: 'Web Development', trigger: 'web_development' },
        { value: 'data_science', label: 'Data Science', trigger: 'data_science' },
        { value: 'digital_marketing', label: 'Digital Marketing', trigger: 'digital_marketing' },
        { value: 'none', label: 'None', trigger: 'anything_else' },
      ],
    },
    {
      id: 'web_development',
      message: 'The Web Development course covers HTML, CSS, JavaScript, and React. It is designed for beginners and advanced learners alike.',
      trigger: 'anything_else',
    },
    {
      id: 'data_science',
      message: 'The Data Science course covers Python, R, Machine Learning, and Deep Learning. It includes hands-on projects and real-world data sets.',
      trigger: 'anything_else',
    },
    {
      id: 'digital_marketing',
      message: 'The Digital Marketing course covers SEO, SEM, Social Media Marketing, and Email Marketing. It includes practical assignments and case studies.',
      trigger: 'anything_else',
    },
    {
      id: '15',
      message: 'Do you have any questions about your account?',
      trigger: '16',
    },
    {
      id: '16',
      options: [
        { value: 'update_info', label: 'How to update my information?', trigger: 'update_info' },
        { value: 'change_password', label: 'How to change my password?', trigger: 'change_password' },
        { value: 'delete_account', label: 'How to delete my account?', trigger: 'delete_account' },
      ],
    },
    {
      id: 'update_info',
      message: 'To update your information, go to the account settings and edit your details.',
      trigger: 'anything_else',
    },
    {
      id: 'change_password',
      message: 'To change your password, go to the account settings and select change password.',
      trigger: 'anything_else',
    },
    {
      id: 'delete_account',
      message: 'To delete your account, please contact our support at kartikpatekar27@gmail.com.',
      trigger: 'anything_else',
    },
    {
      id: '17',
      message: 'Would you like to know about upcoming events?',
      trigger: '18',
    },
    {
      id: '18',
      options: [
        { value: 'yes', label: 'Yes', trigger: 'upcoming_events' },
        { value: 'no', label: 'No', trigger: 'anything_else' },
      ],
    },
    {
      id: 'upcoming_events',
      message: 'We have webinars and workshops on various topics scheduled for next month. Stay tuned for updates!',
      trigger: 'anything_else',
    },
    // Additional steps for other interactions
    {
      id: '19',
      message: 'Would you like to provide feedback?',
      trigger: '20',
    },
    {
      id: '20',
      options: [
        { value: 'yes', label: 'Yes', trigger: 'feedback' },
        { value: 'no', label: 'No', trigger: 'anything_else' },
      ],
    },
    {
      id: 'feedback',
      message: 'We value your feedback. Please send your feedback to kartikpatekar27@gmail.com.',
      trigger: 'anything_else',
    },
    {
      id: '21',
      message: 'Do you need help with anything else?',
      trigger: '1',
    },
  ];
  
  const theme = {
    background: '#C9FF8F',
    headerBgColor: '#197B22',
    headerFontSize: '20px',
    botBubbleColor: '#0F3789',
    headerFontColor: 'white',
    botFontColor: 'white',
    userBubbleColor: '#FF5733',
    userFontColor: 'white',
  };
  
  const config = {
    botAvatar: "/pp.jpg",
    floating: true,
  };
  

  const [name, setname] = useState("");
  const [array, setarray] = useState([]);
  const [stateD1, setStateD1] = useState([]);
  const [stateD2, setStateD2] = useState([]);
  const [stateD3, setStateD3] = useState([]);
  const [stateD4, setStateD4] = useState([]);

  async function checkuser() {

    try {
      const response = await fetch('/api/users/me', {
        method: 'GET',
      });

      const { user } = await response.json()

      if (user) {
        const Name = user.username;
        setname(Name)
      }
      else {
        alert(" no userdata ! ")
      }


    }
    catch (error) {
      console.log("the error from userhome", error);
    }
  }

  async function popularcourses() {
    try {
      const response = await fetch('/api/users/pc', {
        method: 'GET',
      });

      const rd = await response.json();
      const { courses } = rd;
      setarray(courses);
    } catch (error) {
      console.log(error);
    }
  }


  async function getcoursesdata() {

    try {
      const response = await fetch('/api/users/allcourses', {
        method: 'GET',
      });

      const data = await response.json();
      const { d1, d2, d3, d4 } = data;

      setStateD1(d1)
      setStateD2(d2)
      setStateD3(d3)
      setStateD4(d4)

    } catch (error) {
      console.log(error);
    }





  }

  useEffect(() => {
    checkuser();
    getcoursesdata();
    popularcourses();


  }, []);





  return (
    <div className={s.mdiv}>

      <div className={s.head}>
        <Welcomeuser username={name} className={s.div} />
      </div>


    

        <CoursesDisplay Heading="POPULAR COURSES" State={array} />
        <CoursesDisplay Heading="APP DEVELOPEMENT" State={stateD3} />
        <CoursesDisplay Heading="DATA SCIENCE PYTHON" State={stateD1} />
        <CoursesDisplay Heading="FULL STACK JAVA" State={stateD2} />
        <CoursesDisplay Heading="FULL STACK WEB DEVELOPEMENT" State={stateD4} />
  
        <div className="App">
      <ThemeProvider theme={theme}>
        <ChatBot
          headerTitle="SkillSail Bot"
          steps={steps}
          {...config}
        />
      </ThemeProvider>
    </div>
       

    </div>
  );
}

