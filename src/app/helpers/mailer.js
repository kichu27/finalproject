import nodemailer from 'nodemailer'
import { User } from '@/models/usermodel'
import bcryptjs from 'bcryptjs'
import { NextResponse } from 'next/server'
import Connect from '@/lib/dbconn'

export async function sendemail(email , emailtype , UserID)
{


try {
    
await Connect() ; 

const hashedToken = await bcryptjs.hash(UserID.toString() , 10)

if (emailtype ==="VERIFY") {
    
    await User.findByIdAndUpdate(UserID , {verifyToken:hashedToken , verifyTokenExpiry:Date.now()+360000  })


} else if (emailtype === "RESET") {
    
    await User.findByIdAndUpdate(UserID , {forgotPasswordToken:hashedToken , forgotPasswordTokenExpiry:Date.now()+360000  })

}


var transport = nodemailer.createTransport({
    service  : "gmail" , 
    port : 465 , 
    secure  : true ,
    logger : true , 
    debug : true , 
    secureConnection :false ,  
    auth: {
      user : "kartikpatekar27@gmail.com"   , 
      pass: "nxgt kpym nrvp xzij"
    } , 

    tls : {


      rejectUnauthorized : true 
    }
  }); 

 
    const mailOptions = {
        from:'kartikpatekar27@gmail.com',
        to: email,
        subject: emailtype === "VERIFY" ? "Verify your email" : "Reset your password",
        html: `
        <div
  style="background-image: url('https://i.pinimg.com/originals/8f/c5/3f/8fc53fc5d0336c5eec2921c0033e33fc.png'); height: 100vh; background-repeat: no-repeat; background-size: cover; width: 100%; display: flex; justify-content: center; align-items: center; flex-direction: column; text-align: center;"
>
  <div
    style="background-color: rgba(240, 255, 255, 0.458); padding: 50px; border-radius: 20px; font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif; font-size: larger; display: flex; flex-direction: row; justify-content: center; align-items: center;"
  >
    <p>
      Click
      <div
        style="padding: 20px; background-color: rgba(219, 218, 218, 0.892); height: max-content; width: max-content; margin: 10px; transition: all 1s ease-in-out;"
        onmouseover="this.style.borderRadius='50px'; this.style.backgroundColor='rgb(182, 182, 255)'; this.style.color='white';"
        onmouseout="this.style.borderRadius=''; this.style.backgroundColor='rgba(219, 218, 218, 0.892)'; this.style.color='black';"
      >
        <a
          href="https://finalproject-gold.vercel.app/verifyemail?token=${hashedToken}"
          style="text-decoration: none; color: black; cursor: pointer;"
          >here</a
        >
      </div>
      to ${emailtype === 'VERIFY' ? 'verify your email' : 'reset your password'}
    </p>
  </div>

  <div
    style="background-color: rgba(240, 255, 255, 0.99); padding: 50px; border-radius: 20px; font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif; font-size: larger; display: flex; flex-direction: column; justify-content: center; align-items: center; margin-top: 60px;"
  >
    <p>or copy and paste the link in your browser.</p>

    <h4>https://finalproject-gold.vercel.app/verifyemail?token=${hashedToken}</h4>
  </div>
</div>

      `,
    }

    const mailresponse = await transport.sendMail(mailOptions);
    return mailresponse;

} catch (error) {
console.log(error);
    return NextResponse.json({status:400 , message:"Email verification failed !" , success : false})
    
}








}