"use client"
import React, { useState } from 'react';
import './CoursePage.css';
import Head from 'next/head';
import Image from 'next/image';

const videos = [
  { id: 1, title: "Introduction to Postman", url: "https://www.youtube.com/embed/A36VQFdIAkI" },
  { id: 2, title: "Installing and Setting up Postman", url: "https://www.youtube.com/embed/Z1RJmh_OqeA" },
  { id: 3, title: "Creating Your First API Request", url: "https://www.youtube.com/embed/Ez8F0nW6S-w" },
  { id: 4, title: "Working with Postman Collections", url: "https://www.youtube.com/embed/rr9cI4u1_88" },
  { id: 5, title: "Environment Variables in Postman", url: "https://www.youtube.com/embed/bMknfKXIFA8" },
  { id: 6, title: "Writing Tests in Postman", url: "https://www.youtube.com/embed/TRWUSvb0uNE" },
  { id: 7, title: "Automating Tests", url: "https://www.youtube.com/embed/30LWjhZzg50" },
  { id: 8, title: "Using Mock Servers", url: "https://www.youtube.com/embed/ZJJHm_bd9Zo" },
  { id: 9, title: "Monitoring APIs", url: "https://www.youtube.com/embed/bMknfKXIFA8" },
  { id: 10, title: "Postman Pro and Enterprise Features", url: "https://www.youtube.com/embed/Z1RJmh_OqeA" }
];

const CoursePage = () => {
  const [selectedVideo, setSelectedVideo] = useState(videos[0]);

  return (
    <div className="course-page">
      <Head> 

      <title>The Complete Guide | Courses</title>
      <meta name="description" content="A page that shows all course curriculum. This comprehensive course covers everything from basics to advanced features." />
        <meta name="keywords" content="Postman, API Testing, Postman Course, API Development, Postman Guide, Learn Postman, API Automation, Postman Features" />

      </Head>
      <header className="course-header">
        <h1>The Complete Guide</h1>
        <p>Let us Learn</p>
      </header>

      <div className="course-content">
        <div className="course-main">
          <div className="course-video">
            <iframe 
              width="100%" 
              height="450" 
              src={selectedVideo.url} 
              title={selectedVideo.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            ></iframe>
          </div>

          <section className="course-curriculum">
            <h2>Curriculum</h2>
            <ul>
              {videos.map(video => (
                <li key={video.id} className={video.id === selectedVideo.id ? 'selected' : ''} onClick={() => setSelectedVideo(video)}>
                  {video.title}
                </li>
              ))}
            </ul>
          </section>

          <section className="course-description">
            <h2>Course Description</h2>
            <p>
              This course is designed to take you through the fundamentals of using Postman to test your APIs. Whether you are a beginner or an experienced developer, this course has something for everyone.
            </p>
            <p>
              You will start with the basics of Postman and gradually move to more advanced topics. By the end of this course, you will be able to efficiently test your APIs, automate tests, and integrate Postman with your development workflow.
            </p>
          </section>

          <section className="course-objectives">
            <h2>Course Objectives</h2>
            <ul>
              <li>Understand the basics of Postman</li>
              <li>Install and set up Postman</li>
              <li>Create your first API request</li>
              <li>Work with Postman collections</li>
              <li>Manage environment variables</li>
              <li>Write and automate tests</li>
              <li>Utilize Postmans advanced features</li>
            </ul>
          </section>

          <section className="course-instructor">
            <h2>Instructor</h2>
            <div className="instructor-info">
              <Image height= {150} width = {200} src="/pp.jpg" alt="Instructor" />
              <div>
                <p><strong>John Doe</strong></p>
                <p>John is a seasoned software engineer with over 10 years of experience in API development and testing. He has worked with numerous companies to improve their API testing processes and is passionate about teaching others how to use Postman effectively.</p>
              </div>
            </div>
          </section>

          <section className="course-reviews">
            <h2>Reviews</h2>
            <div className="review">
              <p>This course was very comprehensive and easy to follow. I learned a lot about Postman and feel confident in my skills now. - Jane Smith</p>
            </div>
            <div className="review">
              <p>The instructor explained everything clearly and the examples were very practical. Highly recommend this course! - Mike Johnson</p>
            </div>
          </section>

          <section className="student-feedback">
            <h2>Student Feedback</h2>
            <div className="feedback">
              <p>I love how the course is structured. It made learning Postman so much easier! - Sarah Lee</p>
            </div>
            <div className="feedback">
              <p>The hands-on examples really helped me understand the concepts. - David Kim</p>
            </div>
            <div className="feedback">
              <p>Excellent course! I would recommend it to anyone looking to improve their API testing skills. - Anna Brown</p>
            </div>
          </section>

          <section className="related-courses">
            <h2>Related Courses</h2>
            <div className="related-course">
              <h3>API Testing with Postman</h3>
              <p>Deep dive into API testing with Postman and learn advanced testing techniques.</p>
            </div>
            <div className="related-course">
              <h3>Mastering RESTful APIs</h3>
              <p>Learn how to build and test RESTful APIs with various tools and frameworks.</p>
            </div>
            <div className="related-course">
              <h3>Advanced API Automation</h3>
              <p>Automate your API testing workflows with advanced techniques and tools.</p>
            </div>
          </section>

          <section className="course-faq">
            <h2>Frequently Asked Questions</h2>
            <div className="faq-item">
              <h3>What are the prerequisites for this course?</h3>
              <p>Basic understanding of APIs and familiarity with HTTP requests is recommended, but not required.</p>
            </div>
            <div className="faq-item">
              <h3>Do I need to have Postman installed before starting the course?</h3>
              <h6>Yes, you should have Postman installed on your computer. Instructions on how to install Postman are provided in the course.</h6>
            </div>
            <div className="faq-item">
              <h3>Is there a certificate of completion?</h3>
              <h6>Yes, you will receive a certificate of completion once you finish the course.</h6>
            </div>
            <div className="faq-item">
              <h3>Can I access the course materials anytime?</h3>
              <h6>Yes, you will have lifetime access to the course materials once you enroll.</h6>
            </div>
            <div className="faq-item">
              <h3>How long do I have access to the course?</h3>
              <h6>Once you enroll, you have lifetime access to the course materials.</h6>
            </div>
            <div className="faq-item">
              <h3>What is the refund policy?</h3>
              <h6>We offer a 30-day money-back guarantee if you are not satisfied with the course.</h6>
            </div>
            <div className="faq-item">
              <h3>Are there any additional resources provided?</h3>

              <h6>Yes, you will have access to additional resources such as downloadable guides and code samples.</h6>
            </div>
            <div className="faq-item">
              <h3>Can I interact with the instructor?</h3>
              <h6>Yes, you can ask questions and interact with the instructor through the course discussion forums.</h6>
            </div>
            <div className="faq-item">
              <h3>Is there any support if I get stuck?</h3>
              <h6>Yes, you will have access to support through the course discussion forums and email.</h6>
            </div>
          </section>
        </div>

        <aside className="course-sidebar">
          <div className="sidebar-section">
            <h3>Course Information</h3>
            <p>Duration: 10 hours</p>
            <p>Lectures: 50</p>
            <p>Level: Beginner to Advanced</p>
          </div>

          <div className="sidebar-section">
            <h3>Requirements</h3>
            <ul>
              <li>Basic understanding of APIs</li>
              <li>Computer with internet access</li>
              <li>Postman installed</li>
            </ul>
          </div>

          <div className="sidebar-section">
            <h3>What You will Learn</h3>
            <ul>
              <li>Mastering Postman basics</li>
              <li>Advanced Postman features</li>
              <li>Automating API tests</li>
              <li>Using Postman in a development workflow</li>
              <li>Creating and managing API collections</li>
              <li>Working with environment variables</li>
            </ul>
          </div>

          <div className="sidebar-section">
            <h3>Benefits of the Course</h3>
            <ul>
              <li>Hands-on learning with real-world examples</li>
              <li>Access to course materials anytime</li>
              <li>Support from the instructor</li>
              <li>Certificate of completion</li>
              <li>30-day money-back guarantee</li>
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default CoursePage;
