import { useRouter } from 'next/router';
import en from '@/locales/en';
import cs from '@/locales/cs';
import BottomNav from '@/components/BottomNav';

export default function Hero() {
  const router = useRouter();
  const { locale } = router;
  const t = locale === 'cs' ? cs : en;

  return (
    <>
      <section className="grid place-items-center content-area">
        <div className="">
          <h1 className="text-6xl">{t.hero}</h1>
          <p className="text-2xl font-light pt-8 w-3/4">{t.heroShort}</p>
          <div className="flex justify-end ">
            <div className="flex items-center justify-center mt-20">
              <p className="text-2xl mr-6 font-light">{t.heroHi}</p>
              <img
                className="border-2 border-black rounded-full"
                src="/images/profile.jpeg"
                height="60"
                width="60"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
