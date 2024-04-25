import s from "@/app/styles/s.module.css"

import Header from '@/app/components/Header';


export const metadata = {
  title: 'Your SKILLSAIL Cart',
  description: 'Review and manage items in your cart on Skillsail. Proceed to checkout and start learning!',
};


export default function RootLayout({ children }) {
    return (
       <html lang="en">
       
         <body className={s.body}>
          
         <Header />
          {children}
          
          
          </body>
       </html>
     )
   }
   