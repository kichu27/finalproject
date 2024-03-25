"use client"
import { CldUploadButton } from 'next-cloudinary';
import { CldImage } from 'next-cloudinary';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from "@/app/styles/profiledash.module.css"


export default function Page() {
  const [public_id, setPublicId] = useState("");
const Router = useRouter()

  const handleSuccess = async (res) => {
    try {

      const { event, info } = res;
      setPublicId(info.public_id);


      const response = await fetch('/api/users/profilepic', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          publicId: info.public_id
        })
      });
  
      if (!response.ok) {
        throw new Error('Failed to update profile picture');
      }
      Router.push("/profiledashboard")

    } catch (error) {
      console.error('Error updating profile picture:', error);
    
    }
  };
  


  return (
    <div className={styles.css}>
     

    
    <CldUploadButton
      uploadPreset="kartikp" 
      cloudName={process.env.CLOUDINARY_NAME}
      onSuccess={handleSuccess}
      className={styles.uploadButton} // Apply CSS class
    >
      Upload
    </CldUploadButton>

    <div style={{ marginTop: '20px' }}>

    
    </div>

  </div>

  
  );
}
