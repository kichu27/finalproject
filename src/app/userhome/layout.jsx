
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import Header from '../components/Header';
 
export const metadata = {
  title: 'About SKILLSAIL',
  description: 'Learn more about SKILLSAIL - your destination for discovering and purchasing exciting courses.',
};


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
