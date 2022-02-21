import { useIntl, FormattedMessage } from 'react-intl';

import { Html5Icon, NextIcon, VercelIcon, ReactIcon, FirebaseIcon, TailwindIcon } from './IconsData';
import { HobbiesCard } from './HobbiesCard';

export function Hobbies() {
    const intl = useIntl();
    const HobbiesData = [
        {
            title: intl.formatMessage({ id: 'hobbies.html' }),
            icon: <Html5Icon />,
        },
        {
            title: intl.formatMessage({ id: 'hobbies.next' }),
            icon: <NextIcon />,
        },
        {
            title: intl.formatMessage({ id: 'hobbies.vercel' }),
            icon: <VercelIcon />,
        },
        {
            title: intl.formatMessage({ id: 'hobbies.firebase' }),
            icon: <FirebaseIcon />,
        },
        {
            title: intl.formatMessage({ id: 'hobbies.react' }),
            icon: <ReactIcon />,
        },
        {
            title: intl.formatMessage({ id: 'hobbies.tailwind' }),
            icon: <TailwindIcon />,
        },
    ];

    return (
        <section className="p-20vh">
            <div className="flex items-center justify-between ">
                <h1 className="text-4xl md:text-6xl">
                    <FormattedMessage id={'hobbies.title'} />
                </h1>
            </div>

            <p className="mr-6 pt-4 text-lg font-light sm:pt-8 sm:text-2xl">
                <FormattedMessage id={'hobbies.subTitle'} />
            </p>
            <div className="grid grid-cols-3  gap-4 pt-8 md:grid-cols-6">
                {HobbiesData.map(item => (
                    <HobbiesCard title={item.title}>{item.icon}</HobbiesCard>
                ))}
            </div>
        </section>
    );
}
