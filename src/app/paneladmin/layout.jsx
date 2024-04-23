import Footer from "../components/Footer"
import Header from "../components/Header"

 
export const metadata = {
  title: 'SKILLSAIL',
  description: 'Explore & Buy Exciting Courses ',
}

export default function RootLayout({ children }) {
 return (
    <html lang="en">
      

      <body>
        <Header />
        {children}</body>
      <Footer />
    </html>
  )
}
