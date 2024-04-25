
import styles from './page.module.css';

import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import Script from 'next/script';

export const metadata = {
  title: 'SKILLSAIL - Explore & Buy Exciting Courses',
  description: 'Discover a wide range of engaging courses and make purchases conveniently.' , 
}

export default function RootLayout({ children }) {
 return (
    <html className={styles.ht} lang="en">

      <head>
      <meta name="google-site-verification" content="TgYVk9UwiLqATcJpCDeqVhzZr7QeJFoHX614xxDqlMs" />
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-LE3N83ZXN0"></Script>


<Script id='google-analytics'>

  {`  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-LE3N83ZXN0');`}

</Script>

      </head>

      <body className={styles.body1}>{children}</body>
      <Analytics />
      <SpeedInsights />
    </html>
  )
}
