import Header from '@/app/components/Header';
import Footer from '../components/Footer';

export const metadata = {
  title: 'Filter Courses on SKILLSAIL',
  description: 'Refine your course search on Skillsail using powerful filters. Find the perfect courses for your learning goals!',
};


export default function Layout({ children }) {
  return (
    <div>
      <Header />
      <main>{children}</main>
    <Footer />
    </div>
  )
}