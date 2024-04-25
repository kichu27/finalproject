import Header from '@/app/components/Header';


export const metadata = {
  title: 'Skillsail Blog',
  description: 'Explore insightful articles and updates on industry trends and learning topics at Skillsail.',
};


export default function Layout({ children }) {
  return (
    <div>
      <Header />
      <main>{children}</main>
     
    </div>
  )
}