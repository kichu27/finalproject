"use client"

import React, { useEffect, useState } from 'react';
import styles from "@/app/styles/issues.module.css"
import Image from "next/image"
import router, { useRouter } from "next/navigation"

export default function Page() {
  const [mes , setmes] = useState("")

  const router = useRouter()

  const [liked , isliked] = useState(false)
  const [saved , issaved] = useState(false)


  const [formData, setFormData] = useState({
    issueContent: '',
  });

const [issuedata , setissuedata] = useState(null)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('api/users/createissue', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (!response.ok) {
        throw new Error('Failed to create issue');
      }
      const {message} = await response.json()
     setmes(message)
     setFormData({issueContent : ""})
     setTimeout(()=>{setmes("")} , 3000) ;
     getissues() 
    } catch (error) {
      console.error('Error creating issue:', error);
    }
  };

async function getissues() {

    try {
        const res = await fetch("/api/users/createissue" , {
            method : "GET" , 
        })

        const {resdata} = await res.json()
       
        setissuedata(resdata);

    } catch (error) {
        console.log(error);
    }


}

async function likeissue(id) {
  try {
    const response = await fetch(`/api/users/issuelike`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body : JSON.stringify({data : id})
    });
    if (!response.ok) {
      throw new Error('Failed to like issue');
    }
    getissues();
  } catch (error) {
    console.error('Error liking issue:', error);
  }
}


async function fetchchat(id)
{

  try {
    
router.push(`/community/${id}`)


  } catch (error) {
    console.log(error);
  }



}

async function bookmark(id)
{

  try {
    const response = await fetch(`/api/users/issuebookmark`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body : JSON.stringify({data : id})
    });
    if (!response.ok) {
      throw new Error('Failed to save issue');
    }
    getissues();
  } catch (error) {
    console.error('Error saving issue:', error);
  }


}

  useEffect(()=>{

    getissues()
  }, [])

  return (
    <div className={styles.maindiv}>

<div className={styles.imgdiv}> < Image src="/SKILLSAILCOMMUNITY.jpg" height={700} width={1400} alt='imgskillsail'className={styles.imgdiv} /> </div>


        <div className={styles.sd1}>
          <div className={styles.head}>  <h1>POST AN ISSUE</h1> </div>
        
      <form className={styles.forms} onSubmit={handleSubmit}>
        <div className={styles.innerform}>
          <textarea
            id="issueContent"
            name="issueContent"
            value={formData.issueContent}
            onChange={handleChange}
            required
            className={styles.txt}
          />
          <button className={styles.formbut} onClick={getissues} type="submit">Submit</button>
        
        </div>
      </form>
      <p className={styles.mess}>{mes}</p>
      </div>
     
  <div className="sd2">
    {issuedata &&  (
        <div className={styles.completediv}>

          {issuedata.map((issue) => (
            <div  className={styles.eachdiv} key={issue._id}>

<div className={styles.subsection1}>

<div className={styles.subsection1}>
  {issue.createdBy ? (
    <div>
      <Image
        className={styles.ppimg}
        src={issue.createdBy.profile_link}
        alt="pp"
        height={50}
        width={50}
      />
    </div>
  ) : (
    <div>
      {/* You can display a placeholder image or message if needed */}
      <Image
        className={styles.ppimg}
        src='/default-profile.png' // Placeholder image
        alt="pp"
        height={50}
        width={50}
      />
    </div>
  )}
</div>

<div className={styles.subsection2}>
  <h3>{issue.createdBy?.username || 'Unknown User'}</h3>
  <h6>{new Date(issue.issueCreated).toDateString()}</h6>
</div>
</div>

<div className={styles.subsection3}>

<p>{issue.issueContent}</p>

</div>

<div className={styles.subsection4} >


<Image   className={styles.emoji} onClick={()=>{likeissue(issue._id) ; getissues()  } }src="/love.png" width={30} height={30}alt='image'/>
<Image   className={styles.emoji} onClick={()=>{fetchchat(issue._id)}} src="/bubble-chat.png" width={30} height={30}  alt='image'></Image>
<Image   className={styles.emoji} onClick={()=>{bookmark(issue._id)}} src="/bookmark.png" width={30} height={30}  alt='image'></Image>

</div>
<div className={styles.subsection5} >

<p>{issue.likes.length}</p>
<p>{issue.comments.length}</p>
<p>{issue.saves.length}</p>


</div>
                     
           

            </div>
          ))}

        </div>
      )}
      </div>


    </div>
  );
}
