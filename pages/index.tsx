import { useRouter } from 'next/router';
import en from '@/locales/en';
import cs from '@/locales/cs';
import Hero from '@/components/Hero';
import Projects from '../components/Projects';
import About from '@/components/About';

export default function Home() {
  const router = useRouter();
  const { locale } = router;
  const t = locale === 'cs' ? cs : en;

  return (
    <main className="max-w-screen-md m-auto">
      <Hero />
      <Projects />
      <About />
    </main>
  );
}
