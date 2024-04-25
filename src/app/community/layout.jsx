import Header from "../components/Header"

export const metadata = {
  title: 'Join the SKILLSAIL Community',
  description: 'Connect with other learners, instructors, and enthusiasts in the Skillsail community. Share knowledge, ask questions, and collaborate!',
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
