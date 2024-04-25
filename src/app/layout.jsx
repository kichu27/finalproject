
import styles from './page.module.css';

import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

export const metadata = {
  title: 'SKILLSAIL - Explore & Buy Exciting Courses',
  description: 'Discover a wide range of engaging courses and make purchases conveniently.'
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
