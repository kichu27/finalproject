
import styles from './page.module.css';

import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
 
export const metadata = {
  title: 'SKILLSAIL',
  description: 'Explore & Buy Exciting Courses ',
}

export default function RootLayout({ children }) {
 return (
    <html className={styles.ht} lang="en">
      

      <body className={styles.body1}>{children}</body>
      <Analytics />
      <SpeedInsights />
    </html>
  )
}
