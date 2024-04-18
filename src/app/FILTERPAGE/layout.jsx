import Header from '@/app/components/Header';
import Footer from '../components/Footer';


export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
    <Footer />
    </>
  )
}