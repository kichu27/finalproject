 import s from "@/app/styles/s.module.css"
import Header from "../components/Header"
export const metadata = {
  title: 'Your SKILLSAIL Profile Dashboard',
  description: 'Manage your profile and track your learning progress on Skillsail. Explore and engage with your personalized learning experience!',
};

export default function RootLayout({ children }) {
 
    return (
       <html lang="en">
        
         <body className={s.body}><Header />{children}</body>
       </html>
     )
   }
   