import '@/styles/tailwind.css';
import Navbar from '@/components/Navbar';
import { ThemeProvider } from 'next-themes';
import BottomNav from '@/components/BottomNav';
import Footer from '@/components/Footer';
import '@/styles/notion.css';
import 'prismjs/themes/prism-tomorrow.css';
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
