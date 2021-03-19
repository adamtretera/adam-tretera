
import { useRouter } from 'next/router';
import en from '../locales/en';
import cs from '../locales/cs';

export default function Home() {
    const router = useRouter();
    const { locale } = router;
    const t = locale === 'cs' ? cs : en;

    return (
        <main className="grid place-items-center content-area">
        <section>
            <header>
                <h1 className="text-8xl font-bold">{t.hero}</h1>
            </header>
        </section>
        </main>
    )
}