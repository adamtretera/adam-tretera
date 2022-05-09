import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
    return (
        <Html>
            <Head>
                <link rel="icon" type="image/svg+xml" href="images/favicon.svg" />
                <link rel="apple-touch-icon" sizes="180x180" href="images/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="images/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="images/favicon-16x16.png" />
                <link rel="manifest" href="images/site.webmanifest" />
                <link rel="shortcut icon" href="images/favicon.ico" />
                <link rel="mask-icon" href="images/safari-pinned-tab.svg" color="#5bbad5" />
                <meta name="msapplication-TileColor" content="#da532c" />
                <meta name="theme-color" content="#ffffff" />
                <title>It's me Adam</title>
                <meta
                    name="description"
                    content="I'm a software developer based in Prague, Czech Republic. I'm a self-taught developer with a passion for creating clean and intuitive interfaces."
                />
            </Head>

            <body className="bg-text.primary-0 text-dark-0  dark:bg-dark-0 dark:text-primary-0">
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
