import { useRouter } from 'next/router';
import en from '@/locales/en';
import cs from '@/locales/cs';
import Image from "next/image"
export default function About() {
  const router = useRouter();
  const { locale } = router;
  const t = locale === 'cs' ? cs : en;

  return (
    <section>
      <div className="flex items-end justify-between p-20vh ">
        <h1 className="text-4xl md:text-6xl ">{t.aboutHeader}</h1>
       <div className="-mb-6 ">
        <Image
          className="rounded-full w-16   sm:w-28 "
          src="/images/profile.jpeg"

          height="100"
          width="100"
          alt="Adam Tretera - frontend developer"
        />
       </div>
      </div>

      <p className="text-lg sm:text-2xl mr-6 font-light pt-4 sm:pt-8">
        {t.aboutText}
      </p>
    </section>
  );
}
