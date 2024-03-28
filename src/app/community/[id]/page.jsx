"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import Image from "next/image";
import styles from "@/app/styles/issues2.module.css";

export default function Profilepage({ params }) {
  const [show, setShow] = useState(false);
  const [messages , setmessage] = useState("")
  const [comment, setComment] = useState(""); 
  const [commentdata , setcommentdata] = useState([])
  const router = useRouter();
  const i = params.id;
  const [data, setData] = useState(null);

  async function fetchIssuePost(id) {
    const res = await fetch(`/api/users/issuecomment`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ id: id }) // Sending ID in the request body
    });

    const { data } = await res.json();
    setData(data);
    console.log(data);
  }

  useEffect(() => {
    fetchIssuePost(i);
    getcommentdata(i)
  }, [i]);

  const getcommentdata = async (i) => {

try {
  const res = await fetch(`/api/users/commentpostdata`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ id: i })
  });

const {resdata} = await res.json()
setcommentdata(resdata)
} catch (error) {
  console.log(error);
}

  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      const res = await fetch("/api/users/commentpost", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          data : comment , id :i 
        })
      });

      const {message} = await res.json()
      
      setmessage(message)
      setTimeout(()=>{setmessage("") ; setShow(!show)}  , 3000) 
      getcommentdata(i)
    } catch (error) {
      console.log(error);
    }
    setComment("") ; 

    


  };


  return (
    <div className={styles.maindiv}>
      <div className="sd2">
        {data && (
          <div className={styles.completediv}>
            <div className={styles.eachdiv} key={data._id}>
              <div className={styles.subsection1}>
                <div>
                  <img
                    className={styles.ppimg}
                    src={data.createdBy.profile_link}
                    alt="pp"
                    height={50}
                    width={50}
                  />
                </div>
                <div className={styles.subsection2}>
                  <h3>{data.createdBy.username}</h3>{" "}
                  <h6>{new Date(data.issueCreated).toDateString()}</h6>{" "}
                </div>
              </div>
              <div className={styles.subsection3}>
                <p>{data.issueContent}</p>
              </div>
              <div className={styles.subsection4}>
                <Image
                  className={styles.emoji}
                  onClick={() => setShow(!show)}
                  src="/bubble-chat.png"
                  width={30}
                  height={30}
                  alt="image"
                />
              </div>
              <div className={styles.subsection5}>
                <p>{data.comments.length}</p>
              </div>
            </div>
            {show ? (
  <div className={styles.commentForm}>
    <form onSubmit={handleSubmit}>
      <textarea
        placeholder="Enter your comment..."
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
    
  </div>
) : (null)}
{<p className={styles.txt}>{messages}</p>}



<div className={styles.commentsection}>


{commentdata && (<div>  
  
  
  {commentdata.map((cd)=>{
console.log(cd);
return <div className={styles.commentbox} key={cd._id}> 

<div className={styles.upper}> 
  <img className={styles.ppimg2} src={cd.user.profile_link} alt="pp" height={50} width={50} />

  <div className={styles.dipper}>  <p className={styles.na}>{cd.user.username}</p> <p>{cd.content}</p>  </div>
  
  
   </div>


</div>





  })}
  
  
  
  
  
  
  
  
          </div>)}


</div>


          </div>




        )}
      </div>
    </div>
  );
}
