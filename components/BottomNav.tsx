import { useTheme } from 'next-themes';
import { useRouter } from 'next/router';

export default function BottomNav() {
  const { theme, setTheme } = useTheme();
  const router = useRouter();
  const { locale } = router;
  const changeLanguage = (e) => {
    const locale = e.target.value;
    router.push(router.pathname, router.asPath, { locale });
  };

  return (
    <nav className="h-32 px-12  sticky bottom-0">
      <ul className="max-w-full h-full flex justify-between">
        <li className="font-light flex items-center justify-center text-2xl">
          <button
            onClick={changeLanguage}
            className="p-4 font-light"
            value={'cs'}
          >
            CZ
          </button>
          /
          <button
            onClick={changeLanguage}
            className="p-4 font-light"
            value={'en'}
          >
            ENG
          </button>
        </li>
        <li className=" flex items-center justify-center">
          {theme === 'dark' ? (
            <button
              aria-label="Toggle Dark Mode"
              type="button"
              className="w-10 h-10 btn rounded-full bg-primary-700"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
                <path
                  d="M26.715 16.018c-.981.26-1.995.393-3.011.393a11.5 11.5 0 01-8.187-3.388c-2.911-2.911-4.058-7.202-2.993-11.198A1.451 1.451 0 0010.748.052 14.52 14.52 0 004.24 3.796c-5.652 5.652-5.652 14.852 0 20.507a14.409 14.409 0 0010.255 4.248c3.872 0 7.513-1.508 10.251-4.247a14.51 14.51 0 003.745-6.512 1.452 1.452 0 00-1.774-1.774zm-4.019 6.236a11.523 11.523 0 01-8.201 3.397 11.531 11.531 0 01-8.204-3.398C1.77 17.73 1.77 10.37 6.29 5.847a11.488 11.488 0 012.987-2.15c-.322 4.183 1.18 8.37 4.19 11.38a14.46 14.46 0 0011.38 4.191 11.652 11.652 0 01-2.152 2.986z"
                  fill="#fff"
                />
              </svg>
            </button>
          ) : (
            <button
              aria-label="Toggle Dark Mode"
              type="button"
              className="w-10 h-10  rounded-full "
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 ">
                <path
                  d="M8.325 16.667c0 4.601 3.743 8.345 8.345 8.345s8.345-3.744 8.345-8.345c0-4.602-3.743-8.345-8.345-8.345s-8.345 3.743-8.345 8.345zm8.345-5.012a5.018 5.018 0 015.012 5.012 5.017 5.017 0 01-5.012 5.011 5.017 5.017 0 01-5.012-5.011 5.018 5.018 0 015.012-5.012zM15 28.333h3.333v5H15v-5zM15 0h3.333v5H15V0zM0 15h5v3.333H0V15zm28.333 0h5v3.333h-5V15zM3.702 27.272l3.534-3.536 2.358 2.356-3.535 3.537-2.357-2.357zM23.737 7.24l3.537-3.537L29.63 6.06l-3.537 3.536-2.357-2.357zM7.24 9.598L3.704 6.06l2.358-2.356L9.597 7.24 7.24 9.598zM29.63 27.273l-2.357 2.357-3.537-3.537 2.357-2.357 3.537 3.537z"
                  fill="#020202"
                />
              </svg>
            </button>
          )}
        </li>
      </ul>
    </nav>
  );
}
