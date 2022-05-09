import { FormattedMessage } from 'react-intl';
import Image from 'next/image';

export function Hero() {
    return (
        <>
            <section className="content-area grid place-items-center">
                <div>
                    <h1 className="p-0 text-4xl sm:pt-8 sm:text-6xl">
                        <FormattedMessage id={'hero.title'} />
                    </h1>
                    <p className="pt-4  text-lg font-light sm:w-3/4 sm:pt-8 sm:text-2xl">
                        <FormattedMessage id={'hero.subTitle'} />
                    </p>

                    <div className="mt-6 flex items-center justify-end sm:mt-20">
                        <p className="mr-6 text-lg font-light sm:text-2xl ">
                            <FormattedMessage id={'hero.sayHi'} />
                        </p>
                        <Image
                            className="w-12 rounded-full border-2 border-black"
                            src="/images/profile.jpeg"
                            alt="Adam Tretera - frontend developer"
                            height="120"
                            width="120"
                        />
                    </div>
                </div>
            </section>
        </>
    );
}
