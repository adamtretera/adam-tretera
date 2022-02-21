import 'styles/tailwind.css';

import { IntlProvider } from 'react-intl';
import { ThemeProvider } from 'next-themes';

import { useSwitchLang } from 'hooks';
import { Footer, BottomNav, Navbar } from 'modules/layout';

function MyApp({ Component, pageProps }) {
    const [locale, lang] = useSwitchLang();

    return (
        <ThemeProvider attribute="class">
            <IntlProvider locale={locale} messages={lang} onError={() => null}>
                <Navbar />
                <Component {...pageProps} />
                <BottomNav />
                <Footer />
            </IntlProvider>
        </ThemeProvider>
    );
}

export default MyApp;
