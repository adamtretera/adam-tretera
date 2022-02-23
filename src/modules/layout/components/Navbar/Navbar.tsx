import { Disclosure } from '@headlessui/react';
import { FormattedMessage } from 'react-intl';


export function Navbar() {
    return (
        <Disclosure
            as="nav"
            className="backdrop-contrast-5 sticky top-0  z-30 -mb-24 h-24 px-6 py-5 backdrop-blur-md backdrop-grayscale   backdrop-filter sm:relative sm:-mb-32 sm:h-32 sm:backdrop-filter-none md:px-12 "
        >
            {({ open }) => (
                <>
                    <div className="flex h-full max-w-full justify-between ">
                        <a href="/" className="hidden items-center justify-center font-normal sm:flex md:text-xl">
                            <FormattedMessage id="page.logo" />
                        </a>
                        <a className="flex items-center justify-center text-xl font-normal sm:hidden">Adam Tretera.</a>
                        <div className="flex items-center justify-center sm:items-stretch sm:justify-start "></div>
                    </div>
                </>
            )}
        </Disclosure>
    );
}
