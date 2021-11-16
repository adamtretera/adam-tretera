import { useRouter } from 'next/router';
import { Disclosure, Transition } from '@headlessui/react';


export default function Navbar() {

 
  return (
    <Disclosure
      as="nav"
      className="sm:h-32 h-24 -mb-24  sm:-mb-32 px-6 md:px-12 z-30 sticky top-0 sm:relative   py-5 backdrop-filter sm:backdrop-filter-none backdrop-grayscale backdrop-blur-md backdrop-contrast-5 "
    >
      {({ open }) => (
        <>
          <div className="max-w-full h-full flex justify-between ">
            <a
              href="/"
              className="items-center justify-center md:text-xl font-normal hidden sm:flex"
            >
              Adam Tretera.
            </a>
            <a className="flex items-center justify-center text-xl font-normal sm:hidden">
              Adam Tretera.
            </a>
            <div className="flex items-center justify-center sm:items-stretch sm:justify-start ">
            
          
            </div>
          </div>
       
         
        </>
      )}
    </Disclosure>
  );
}
