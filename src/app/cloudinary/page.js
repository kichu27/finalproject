"use client"
import { CldUploadButton } from 'next-cloudinary';
import { CldImage } from 'next-cloudinary';
import { useState } from 'react';
import link from 'next/link'

export default function Page() {
  const [public_id, setPublicId] = useState("");

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
  
  
      console.log('Profile picture updated successfully');
  
    } catch (error) {
      console.error('Error updating profile picture:', error);
    
    }
  };
  


  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '20px', backgroundColor: '#f0f0f0', borderRadius: '10px' }}>
    <CldUploadButton
      uploadPreset="kartikp"
      cloudName={process.env.CLOUDINARY_NAME}
      onSuccess={handleSuccess}
    />
    <div style={{ marginTop: '20px' }}>
      <CldImage
        src={public_id}
        height={500}
        width={500}
     alt='Profile Image'
      />
    </div>
    <a href="/profiledashboard" style={{ marginTop: '20px', textDecoration: 'none', color: '#007bff' }}>Go to Profile Dashboard</a>
  </div>

  
  );
}
