import { useRouter } from 'next/router';
import en from '@/locales/en';
import cs from '@/locales/cs';

export default function Projects() {
  const router = useRouter();
  const { locale } = router;
  const t = locale === 'cs' ? cs : en;

  return (
    <section>
      <h1 className="text-6xl">{t.projects}</h1>
      <p className="text-2xl font-light pt-8 w-3/4">{t.projectsShort}</p>
    </section>
  );
}
