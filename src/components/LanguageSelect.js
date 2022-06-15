import React from 'react';
import { useI18next } from 'gatsby-plugin-react-i18next';
import { Menu } from '@headlessui/react';

import { ChevronDownIcon } from '@heroicons/react/solid';
import { useTranslation } from 'react-i18next';

const LanguageSelect = () => {
    const { language, languages, changeLanguage } = useI18next();
    const { t } = useTranslation();

    return (
        <Menu as="div" className="relative inline-block text-left">
            <div>
                <Menu.Button className="
                inline-flex justify-center w-full px-3 py-1 hover:text-secondary underline focus:outline-none"
                >
                    { `${t('Language')} (${language})`}
                    <ChevronDownIcon className="-mr-1 ml-1 h-5 w-5" aria-hidden="true" />
                </Menu.Button>
            </div>
            <Menu.Items className="
                absolute right-0 mt-2 w-24 rounded-md shadow-lg
                bg-white ring-1 ring-black ring-opacity-5 focus:outline-none overflow-hidden"
            >
                {languages.map((lng) => (
                    <Menu.Item
                        key={lng}
                        as="a"
                        href="#"
                        className="px-3 py-1 block text-sm text-right border-b last:border-0 border-gray-100"
                        onClick={(e) => {
                            e.preventDefault();
                            changeLanguage(lng);
                        }}
                    >
                        {LanguageNames[lng]}
                    </Menu.Item>
                ))}
            </Menu.Items>
        </Menu>
    );
};

export const LanguageNames = {
    en: 'English',
    de: 'Deutsch',
    pl: 'Polish',
};

export default LanguageSelect;
