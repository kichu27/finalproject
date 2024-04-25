import styles from "@/app/LOGIN/page.module.css";


export const metadata = {
  title: 'Login to SKILLSAIL',
  description: 'Log in to SKILLSAIL to access your account and explore exciting courses.',
};


export default function RootLayout({ children }) {
 return (
    <html lang="en">
      <body className={styles.body2}>{children}</body>
    </html>
  )
}
2