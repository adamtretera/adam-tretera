import '@/styles/tailwind.css';
import Navbar from '@/components/Navbar';
import { ThemeProvider } from 'next-themes';
import BottomNav from '@/components/BottomNav';
import Footer from '@/components/Footer';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <Navbar />
      <Component {...pageProps} />
      <BottomNav />
      <Footer />
    </ThemeProvider>
  );
}

export default MyApp;
