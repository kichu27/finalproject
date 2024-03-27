"use client"
import React, { useRef, useState } from 'react';
import { useEffect } from 'react';

const CameraComponent = () => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [isCameraOn, setIsCameraOn] = useState(true); // State to track camera status

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
    } catch (error) {
      console.error('Error accessing camera:', error);
    }
  };

  const stopCamera = () => {
    const tracks = videoRef.current.srcObject?.getTracks(); // Get tracks from the stream
    if (tracks) {
      tracks.forEach(track => track.stop()); // Stop each track
      videoRef.current.srcObject = null; // Clear video source
    }
  };

  const toggleCamera = () => {
    if (isCameraOn) {
      stopCamera(); // Stop the camera if it's on
    } else {
      startCamera(); // Start the camera if it's off
    }
    setIsCameraOn(prevState => !prevState); // Toggle camera status
  };

  const takeScreenshot = () => {
    const canvas = canvasRef.current;
    const video = videoRef.current;
    if (canvas && video) {
      const context = canvas.getContext('2d');
      context.drawImage(video, 0, 0, canvas.width, canvas.height);
      const screenshot = canvas.toDataURL('image/png');
      
      // Create a temporary anchor element
      const link = document.createElement('a');
      link.href = screenshot;
      link.download = 'screenshot.png'; // Name for the downloaded file
  
      // Simulate a click on the anchor element to trigger download
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };
  

  useEffect(() => {
    startCamera(); // Start the camera when the component mounts
    return () => {
      stopCamera(); // Stop the camera when the component unmounts
    };
  }, []);

  return (
    <div>
      <h2>Camera Component</h2>
      <video ref={videoRef} autoPlay playsInline />
      <canvas ref={canvasRef} style={{ display: 'none' }} />
      <button onClick={toggleCamera}>{isCameraOn ? 'Turn Off Camera' : 'Turn On Camera'}</button>
      <button onClick={takeScreenshot}>Take Screenshot</button>
    </div>
  );
};

export default CameraComponent;
