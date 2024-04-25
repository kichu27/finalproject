 import s from "@/app/styles/s.module.css"
import Header from "../components/Header"


export const metadata = {
  title: 'Your Favorite Courses on SKILLSAIL',
  description: 'Explore and manage your favorite courses on Skillsail. Keep track of courses you love and plan your learning journey!',
};

export default function RootLayout({ children }) {
    return (
       <html lang="en">
        
         <body className={s.body}><Header />{children}</body>
       </html>
     )
   }
   