import React from 'react';
import { Link } from 'gatsby-plugin-react-i18next';
import { useTranslation } from 'react-i18next';
import Layout from '../layouts/layout';
import { LanguageNames } from './LanguageSelect';

const LanguageFallback = ({ altPosts }) => {
    const { t } = useTranslation();

    return (
        <Layout additionalClass={['bg-white px-6']}>
            <div className="max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8 leading-relaxed">
                <p>{ t('Sorry, this page is only available in the following languages:') }</p>
                <ul className="px-5 list-disc">
                    {altPosts.map((altPost) => (
                        <li>
                            <Link to={`/${altPost.slug}`} language={altPost.language}>
                                {`${LanguageNames[altPost.language]}: `}
                                {altPost.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </Layout>
    );
};

export default LanguageFallback;
