
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import Header from '../components/Header';
 
export const metadata = {
  title: 'SKILLSAIL',
  description: 'Explore & Buy Exciting Courses ',
}

export default function RootLayout({ children }) {
 return (
    <html lang="en">
      

      <body>
        <Header />
        {children}
      
      </body>
    
    </html>
  )
}
