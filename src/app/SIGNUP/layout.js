import styles from './page.module.css';

export const metadata = {
  title: 'Sign Up for SKILLSAIL',
  description: 'Join SKILLSAIL to explore and buy exciting courses. Sign up today!',
};

export default function RootLayout({ children }) {
 return (
    <html lang="en">
      <body className={styles.body}>{children}</body>
    </html>
  )
}
