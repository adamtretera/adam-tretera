import { useMemo } from 'react';
import { useRouter } from 'next/router';

import { LANG } from 'config';
import CS from '../localization/translations/cs.json';
import EN from '../localization/translations/en.json';

import type { MessageFormatElement } from 'react-intl';

export const useSwitchLang = (): [string, Record<number, string> | Record<number, MessageFormatElement[]>] => {
    const { locale } = useRouter();
    const shortLocale = locale ? locale : LANG.CS;

    const lang = useMemo(() => {
        switch (shortLocale) {
            case LANG.CS:
                return CS;
            case LANG.EN:
                return EN;
            default:
                return CS;
        }
    }, [shortLocale]);

    return [shortLocale, lang];
};
