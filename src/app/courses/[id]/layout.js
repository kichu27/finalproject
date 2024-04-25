

export const metadata = {
  title: 'Course Details',
  description: 'Discover a diverse range of exciting courses on Skillsail. Enhance your skills and knowledge today!',
};


export default function RootLayout({ children }) {
  return (
    <div>
      <div >
       
        <main>{children}</main>
        
      </div>
    </div>
  );
}
