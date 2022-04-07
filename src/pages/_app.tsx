import 'styles/tailwind.css';

import { IntlProvider } from 'react-intl';
import { ThemeProvider } from 'next-themes';

import { useSwitchLang } from 'hooks';
import { Footer, BottomNav, Navbar } from 'modules/layout';

export default function MyApp({ Component, pageProps }) {
    const [locale, lang] = useSwitchLang();

    return (
        <IntlProvider locale={locale} messages={lang} onError={() => null}>
            <ThemeProvider attribute="class">
                <Navbar />
                <Component {...pageProps} />
                <BottomNav />
                <Footer />
            </ThemeProvider>
        </IntlProvider>
    );
}
