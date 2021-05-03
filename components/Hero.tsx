import { useRouter } from 'next/router';
import en from '@/locales/en';
import cs from '@/locales/cs';

export default function Hero() {
  const router = useRouter();
  const { locale } = router;
  const t = locale === 'cs' ? cs : en;

  return (
    <>
      <section className="grid place-items-center content-area">
        <div>
          <h1 className="text-4xl sm:text-6xl">{t.hero}</h1>
          <p className="text-lg  sm:text-2xl font-light pt-4 sm:pt-8 sm:w-3/4">
            {t.heroShort}
          </p>

          <div className="flex items-center justify-end mt-6 sm:mt-20">
            <p className="text-lg sm:text-2xl mr-6 font-light ">{t.heroHi}</p>
            <img
              className="border-2 border-black rounded-full w-12"
              src="/images/profile.jpeg"
              height="60"
              width="60"
            />
          </div>
        </div>
      </section>
    </>
  );
}
