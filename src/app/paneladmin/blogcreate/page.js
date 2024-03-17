'use client'
import { useEffect, useState } from 'react';
import Head from 'next/head';
import styles from '@/app/styles/common.module.css';
import { CldUploadButton } from 'next-cloudinary';
import { CldImage } from 'next-cloudinary';

export default function WriteablogPage() {

  const [message, setMessage] = useState('');
  const [dataresponse, setdataresponse] = useState([]);
  const [msg, setmsg] = useState('');
  const [file , setfile] = useState(null) ; 
  const [public_id, setPublicId] = useState("");

  const [formData, setFormData] = useState({
    title: '',
    content: '',
    imgurl : '' , 
  });

  
    
    const handleSubmit = async (event) => {
    event.preventDefault();

    const apiUrl = '/api/admin/createblog';
    
   
     
        try { 

          const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
          });

          const responseData = await response.json();
          setmsg(responseData.msg);
  
          if (!response.ok) {
            console.error('Error submitting data');
          }
        } catch (error) {
          console.error('Error:', error);
        }

  };
  

  const handleSuccess = async (res) => {
    try {
      const { event, info } = res;
      setPublicId(info.public_id);

      setFormData((prevFormData) => ({
        ...prevFormData,
        imgurl: info.public_id
      }));

      const response = await fetch('/api/admin/addblogimg', {
        method: 'POST',
        headers: {  
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          publicId: info.public_id , 
        })
      });
  
      if (!response.ok) {
        throw new Error('Failed to update blog picture');
      }
  
  
      console.log('blog picture updated successfully');
  
    } catch (error) {
      console.error('Error updating blog picture:', error);
    
    }
  };
  

  
  const handleChange = (event) => {
    const { name, value} = event.target;
      setFormData((prevData) => ({ ...prevData, [name]: value }));
  };


  async function handledelete(item) {
    try {
      const todeleteblog = item._id;

      const response = await fetch('/api/admin/createblog', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ blogId: todeleteblog }),
      });

      if (response.ok) {
        const { message } = await response.json();
        setMessage(message);
      } else {
        console.log('Failed to delete user');
      }
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  }

  useEffect(() => {
    async function getblogdata() {
      const response = await fetch('/api/admin/createblog', {
        method: 'GET',
      });
      const res = await response.json();

      setdataresponse(res.data);
      console.log(res.data);
    }

    getblogdata();
  }, []);



  return (
    <div className={styles.frm}>
      <Head>
        <title>Write a Blog - Skillsail</title>
        <meta
          name="description"
          content="Write and manage blogs on Skillsail. Share your knowledge and experiences with the Skillsail community."
        />
      </Head>

      <div className={styles.sdiv}>
        <form className={styles.f} onSubmit={handleSubmit}>
          <input
            className={styles.t}
            type="text"
            name="title"
            placeholder="Enter Title"
            onChange={handleChange}
          />
          <textarea
            className={styles.t}
            type="text"
            name="content"
            placeholder="Enter Content"
            onChange={handleChange}
          />
        
      <CldUploadButton
      uploadPreset="kartikp"
      cloudName={process.env.CLOUDINARY_NAME}
      onSuccess={handleSuccess}
      /> 
          
          <button className={styles.b} type="submit">
            Submit
          </button>
          {msg && (
            <p style={{ color: 'green', fontWeight: 'bold' }}>{msg}</p>
          )}
        </form>
      </div>

      <div className={styles.blogdiv}>
        <h2>SKILLSAIL BLOGS</h2>
        {dataresponse.map((item) => (
          <div className={styles.md} key={item.id}>

<div className={styles.md1}> 

<CldImage
          src={item.imgurl || ''}
          height={300}
          width={300}
          alt="Profile_Image"
        />

</div>
            <div className={styles.md1}>
              <p>TITLE</p>
              {item.title}
            </div>



            <div className={styles.md2}>
              <p>CONTENT</p>
              {item.content}
            </div>
            <button onClick={() => handledelete(item)}>DELETE</button>
          </div>
        ))}
      </div>
    </div>
  );
}
