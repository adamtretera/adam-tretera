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
    <header>
      <nav>
        <div className="">
          <Disclosure as="nav" className="h-32 -mb-32 md:m-auto  md:px-12">
            {({ open }) => (
              <>
                <div className="max-w-full h-full flex justify-between">
                  <a className="flex items-center justify-center md:text-xl font-normal">
                    Adam Tretera.
                  </a>
                  <div className="flex items-center justify-center sm:items-stretch sm:justify-start">
                    <div className="sm:hidden">
                      <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                        {open ? (
                          <XIcon className="block h-6 w-6" aria-hidden="true" />
                        ) : (
                          <MenuIcon
                            className="block h-6 w-6"
                            aria-hidden="true"
                          />
                        )}
                      </Disclosure.Button>
                    </div>
                    <div className="hidden sm:block sm:ml-6">
                      <div className="flex space-x-4 ">
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
                <Disclosure.Panel className="sm:hidden">
                  <div className="px-2 pt-3 pb-3 space-y-1 text-center ">
                    {navigation.map((item) => (
                      <NavLink
                        key={item.name}
                        href={item.href}
                        name={item.name}
                      />
                    ))}
                  </div>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </div>
      </nav>
    </header>
  );
}
