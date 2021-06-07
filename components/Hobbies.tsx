import { useRouter } from 'next/router';
import en from '@/locales/en';
import cs from '@/locales/cs';
import {
  Html5Icon,
  NextIcon,
  VercelIcon,
  ReactIcon,
  FirebaseIcon,
  TailwindIcon
} from './Hobbies/IconsData';
import { Card } from './Hobbies/Card';
export default function Hobbies() {
  const router = useRouter();
  const { locale } = router;
  const t = locale === 'cs' ? cs : en;

  return (
    <section className="p-20vh">
      <div className="flex items-center justify-between ">
        <h1 className="text-4xl md:text-6xl">{t.hobbiesHeader}</h1>
      </div>

      <p className="text-lg sm:text-2xl mr-6 font-light pt-4 sm:pt-8">
        {t.hobbiesText}{' '}
        <a href="https://stackshare.io/AdamTretera" className="underline">
          {t.hobbiesStack}
        </a>
        .
      </p>
      <div className="grid grid-cols-3  md:grid-cols-6 gap-4 pt-8">
        <Card title="HTML5">
          <Html5Icon />
        </Card>
        <Card title="NEXT.JS">
          <NextIcon />
        </Card>
        <Card title="Vercel">
          <VercelIcon />
        </Card>
        <Card title="React JS">
          <ReactIcon />
        </Card>
        <Card title="Firebase">
          <FirebaseIcon />
        </Card>
        <Card title="Tailwind">
          <TailwindIcon />
        </Card>
      </div>
    </section>
  );
}
