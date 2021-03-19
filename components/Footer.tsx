
import {useTheme} from 'next-themes'
import {useRouter} from 'next/router';

import en from '../locales/en';
import cs from '../locales/cs';

export default function Footer() {

    const {theme, setTheme} = useTheme()
    const router = useRouter();
    const {locale} = router;
    const changeLanguage = (e) => {
        const locale = e.target.value;
        router.push(router.pathname, router.asPath, {locale})

    };


    return (
        <nav className="h-20 px-8">
            <ul className="max-w-full h-full flex justify-between">
                <li className="font-light flex items-center justify-center text-2xl ">
                    <button onClick={changeLanguage} className="p-4 font-light" value={"cs"}>CZ</button>
                    /
                    <button onClick={changeLanguage} className="p-4 font-light" value={"en"}>ENG</button>
                </li>
                <li className=" flex items-center justify-center">
                    {theme === "dark" ?
                        <a className="w-14 h-14 text-2xl  rounded-full bg-primary-700 items-center justify-center flex px-1 hover:bg-opacity-80 transition duration-500 ease"
                           href={"#"} onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
                            🌙
                        </a>
                        :
                        <a className="w-14 h-14 text-2xl rounded-full bg-primary-100 items-center justify-center flex px-1 hover:bg-opacity-80 transition duration-500 ease"
                           href={"#"} onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
                            ☀️
                        </a>
                    }
                </li>


            </ul>


        </nav>

    );
}

