import { useRouter } from 'next/router';
import en from '@/locales/en';
import cs from '@/locales/cs';

export default function Navbar() {
  const router = useRouter();
  const { locale } = router;
  const t = locale === 'cs' ? cs : en;
  return (
    <header>
      <nav className="h-32 px-12">
        <ul className="max-w-full h-full flex justify-between">
          <li className="flex items-center justify-center text-xl font-normal">
            Adam Tretera.
          </li>
          <ul className="flex items-center justify-center text-xl font-light">
            <li className="m-8">{t.projects}</li>
            <li className="m-8">{t.about}</li>
            <li className="m-8">{t.contact}</li>
          </ul>
        </ul>
      </nav>
    </header>
  );
}
