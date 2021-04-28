import { useRouter } from 'next/router';
import en from '@/locales/en';
import cs from '@/locales/cs';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline';
import { Fragment } from 'react';
import NavLink from './Elements/NavLink';

export default function Navbar() {
  const router = useRouter();
  const { locale } = router;
  const t = locale === 'cs' ? cs : en;

  const navigation = [
    { name: t.projects, href: '#' },
    { name: t.about, href: '#' },
    { name: t.contact, href: '#' }
  ];
  return (
    <Disclosure
      as="nav"
      className="sm:h-32 h-24 -mb-24  sm:-mb-32 px-6 md:px-12 sticky top-0 backdrop-filter backdrop-grayscale backdrop-blur-md backdrop-contrast-5 py-5 "
    >
      {({ open }) => (
        <>
          <div className="max-w-full h-full flex justify-between ">
            <a className="items-center justify-center md:text-xl font-normal hidden sm:flex">
              Adam Tretera.
            </a>
            <a className="flex items-center justify-center text-xl font-normal sm:hidden">
              Adam Tretera.
            </a>
            <div className="flex items-center justify-center sm:items-stretch sm:justify-start ">
              <div className="sm:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="hidden sm:flex  sm:ml-6 ">
                <div className="flex items-center justify-center ">
                  {navigation.map((item) => (
                    <NavLink
                      key={item.name}
                      href={item.href}
                      name={item.name}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
          <Transition
            show={open}
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-100"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Disclosure.Panel className="sm:hidden z-20 py-5 mt-5 backdrop-filter backdrop-grayscale backdrop-blur-md backdrop-contrast-5">
              <div className="px-2 pt-3 pb-3 space-y-1 text-right">
                {navigation.map((item) => (
                  <NavLink key={item.name} href={item.href} name={item.name} />
                ))}
              </div>
            </Disclosure.Panel>
          </Transition>
        </>
      )}
    </Disclosure>
  );
}
