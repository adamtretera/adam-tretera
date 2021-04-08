import { useRouter } from 'next/router';
import en from '@/locales/en';
import cs from '@/locales/cs';

export default function About() {
  const router = useRouter();
  const { locale } = router;
  const t = locale === 'cs' ? cs : en;

  return (
    <section>
      <div className="flex items-center justify-between ">
        <h1 className="text-6xl">{t.aboutHeader}</h1>
        <img
          className="rounded-full "
          src="/images/profile.jpeg"
          height="120"
          width="120"
        />
      </div>

      <p className="text-2xl mr-6 font-light ">{t.aboutText}</p>
    </section>
  );
}
