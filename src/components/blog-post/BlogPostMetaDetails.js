import React from 'react';
import { useTranslation } from 'react-i18next';

const BlogPostMetaDetails = ({ date, readingTime, tags, additionalClass }) => {
    const { t } = useTranslation();

    return (
        <div
            className={['px-6 md:px-12 flex flex-wrap items-center justify-between font-light',
                ...additionalClass].join(' ')}
        >
            <div className="basis-full md:basis-1/2 flex flex-wrap
                            items-center justify-center md:justify-start space-x-6"
            >
                <p>
                    { t('Date') }
                    :
                    {date}
                </p>
                <p>
                    { t('Reading time') }
                    :
                    {readingTime}
                </p>
                <div />
            </div>
            {/* Uncomment this to add tags to your posts */}
            {/* <div className="mt-4 md:mt-0 basis-full md:basis-1/2 */}
            {/* flex flex-wrap items-center justify-center md:justify-end space-x-6 md:space-x-8" */}
            {/* > */}
            {/*    {tags && tags.map((tag) => ( */}
            {/*        <a */}
            {/*            href="/" */}
            {/*            className="hover:text-secondary" */}
            {/*            key={tag} */}
            {/*        > */}
            {/*            {tag} */}
            {/*        </a> */}
            {/*    ))} */}
            {/* </div> */}
        </div>
    );
};

export default BlogPostMetaDetails;
