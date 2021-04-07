import '@/styles/tailwind.css';
import Navbar from '@/components/Navbar';
import { ThemeProvider } from 'next-themes';
import BottomNav from '@/components/BottomNav';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <Navbar />
      <Component {...pageProps} />
      <BottomNav />
    </ThemeProvider>
  );
}

export default MyApp;
