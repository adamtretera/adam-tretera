import { FormattedMessage } from 'react-intl';


import Image from 'next/image';
export function About() {

    return (
        <section>
            <div className="p-20vh flex items-end justify-between ">
                <h1 className="text-4xl md:text-6xl ">
                    <FormattedMessage id="about.title" />
                </h1>
                <div className="-mb-6 ">
                    <Image
                        className="w-16 rounded-full   sm:w-28 "
                        src="/images/profile.jpeg"
                        height="100"
                        width="100"
                        alt="Adam Tretera - frontend developer"
                    />
                </div>
            </div>

            <p className="mr-6 pt-4 text-lg font-light sm:pt-8 sm:text-2xl">
                <FormattedMessage id="about.subTitle" />
            </p>
        </section>
    );
}
