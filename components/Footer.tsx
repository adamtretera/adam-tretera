import { useRouter } from 'next/router';
import en from '@/locales/en';
import cs from '@/locales/cs';

import Link from 'next/link';

export default function Footer() {
  const router = useRouter();
  const { locale } = router;
  const t = locale === 'cs' ? cs : en;
  return (
    <footer className="h-40 px-16 bg-primary-100 dark:bg-dark-100 flex items-center justify-between">
      <ul>
        <li>Adam Tretera</li>
        <li className="font-light pt-2">
          Copyright © 2021 Adam Tretera. All rights reserved.
        </li>
      </ul>
      <div className="flex gap-3">
        <a href="https://github.com/adamtretera">
          <svg
            enableBackground="new 0 0 32 32"
            id="Layer_1"
            version="1.0"
            viewBox="0 0 32 32"
            width="43"
            height="43"
            className="fill-current"
          >
            <path
              clipRule="evenodd"
              d="M16.003,0C7.17,0,0.008,7.162,0.008,15.997  c0,7.067,4.582,13.063,10.94,15.179c0.8,0.146,1.052-0.328,1.052-0.752c0-0.38,0.008-1.442,0-2.777  c-4.449,0.967-5.371-2.107-5.371-2.107c-0.727-1.848-1.775-2.34-1.775-2.34c-1.452-0.992,0.109-0.973,0.109-0.973  c1.605,0.113,2.451,1.649,2.451,1.649c1.427,2.443,3.743,1.737,4.654,1.329c0.146-1.034,0.56-1.739,1.017-2.139  c-3.552-0.404-7.286-1.776-7.286-7.906c0-1.747,0.623-3.174,1.646-4.292C7.28,10.464,6.73,8.837,7.602,6.634  c0,0,1.343-0.43,4.398,1.641c1.276-0.355,2.645-0.532,4.005-0.538c1.359,0.006,2.727,0.183,4.005,0.538  c3.055-2.07,4.396-1.641,4.396-1.641c0.872,2.203,0.323,3.83,0.159,4.234c1.023,1.118,1.644,2.545,1.644,4.292  c0,6.146-3.74,7.498-7.304,7.893C19.479,23.548,20,24.508,20,26c0,2,0,3.902,0,4.428c0,0.428,0.258,0.901,1.07,0.746  C27.422,29.055,32,23.062,32,15.997C32,7.162,24.838,0,16.003,0z"
              fillRule="evenodd"
            />
            <g />
            <g />
            <g />
            <g />
            <g />
            <g />
          </svg>
        </a>
        <a href="https://www.linkedin.com/in/adam-tretera/">
          <svg
            viewBox="0 0 512 512"
            width="43"
            height="43"
            xmlns="http://www.w3.org/2000/svg"
            className="fill-current"
          >
            <path d="M256,0c141.29,0 256,114.71 256,256c0,141.29 -114.71,256 -256,256c-141.29,0 -256,-114.71 -256,-256c0,-141.29 114.71,-256 256,-256Zm-80.037,399.871l0,-199.921l-66.464,0l0,199.921l66.464,0Zm239.62,0l0,-114.646c0,-61.409 -32.787,-89.976 -76.509,-89.976c-35.255,0 -51.047,19.389 -59.889,33.007l0,-28.306l-66.447,0c0.881,18.757 0,199.921 0,199.921l66.446,0l0,-111.65c0,-5.976 0.43,-11.95 2.191,-16.221c4.795,-11.935 15.737,-24.299 34.095,-24.299c24.034,0 33.663,18.34 33.663,45.204l0,106.966l66.45,0Zm-272.403,-296.321c-22.74,0 -37.597,14.95 -37.597,34.545c0,19.182 14.405,34.544 36.717,34.544l0.429,0c23.175,0 37.6,-15.362 37.6,-34.544c-0.43,-19.595 -14.424,-34.545 -37.149,-34.545Z" />
          </svg>
        </a>
      </div>
    </footer>
  );
}
