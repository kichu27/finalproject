"use client";
import React from 'react';
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';

const steps = [
  // Welcome and user greeting
  {
    id: '0',
    message: 'Welcome to SkillSail! How can I assist you today?',
    trigger: '1',
  },
  // Options for the main functionalities
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
  // Support process
  {
    id: 'support',
    message: 'For support, you can contact us at kartikpatekar27@gmail.com or call 9309065045.',
    trigger: 'continue',
  },
  // View Blogs
  {
    id: 'view_blogs',
    message: 'You can view our blogs at the following link: /blogs',
    trigger: 'continue',
  },
  // Filter Courses
  {
    id: 'filter_courses',
    message: 'You can filter courses based on various criteria at the following link: /filtercourses',
    trigger: 'continue',
  },
  // Check Courses
  {
    id: 'check_courses',
    message: 'You can check our available courses at the following link: /courses',
    trigger: 'continue',
  },
  // SkillSail Community
  {
    id: 'community',
    message: 'For any issues, you can check out the SkillSail Community at the following link: /community',
    trigger: 'continue',
  },
  // Continue loop
  {
    id: 'continue',
    message: 'Is there anything else I can help you with?',
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

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <ChatBot
          headerTitle="SkillSail Bot"
          steps={steps}
          {...config}
        />
      </ThemeProvider>
    </div>
  );
}

export default App;
