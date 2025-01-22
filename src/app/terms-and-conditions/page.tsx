import React from 'react';
import { SectionTitle } from '../components';
import { Avatar } from '@/components';
import { PRIVACY_POLICY, TERMS_AND_CONDITION } from '@/static/PrivacyPolicy';

const page = () => {
    return (
        <div className='mb-6'>
            <div className='container'>
                <div className='grid grid-cols-12 gap-6 mb-6'>
                    <div
                        className='col-span-12 lg:col-span-4 bg-white dark:!bg-main-600 rounded-3xl px-8 py-10'
                        data-aos='fade-up'
                    >
                        <Avatar
                            src={PRIVACY_POLICY?.image}
                            className='w-full h-auto'
                        />
                    </div>

                    <div
                        className='col-span-12 lg:col-span-8 bg-white dark:!bg-main-600 py-8 px-8 rounded-3xl'
                        data-aos='fade-up'
                    >
                        <SectionTitle
                            title={PRIVACY_POLICY?.title}
                            className='mb-8'
                        />
                        <p className='mb-4'>{PRIVACY_POLICY?.contentOne}</p>
                        <p className='mb-4'>{PRIVACY_POLICY?.contentTwo}</p>
                    </div>
                </div>

                {/* choose us */}
                <div className='grid grid-cols-12 gap-6'>
                    <div
                        className='col-span-12 lg:col-span-8 bg-white dark:!bg-main-600 py-8 px-8 rounded-3xl'
                        data-aos='fade-left'
                    >
                        <SectionTitle
                            title={TERMS_AND_CONDITION?.title}
                            className='mb-8'
                        />
                        {TERMS_AND_CONDITION?.conditionList.map(
                            ({ id, title, content }) => (
                                <div
                                    className='pb-4'
                                    data-aos='flip-up'
                                    key={id}
                                >
                                    <h3 className='mb-2'>{title}</h3>
                                    <p className=''>{content}</p>
                                </div>
                            )
                        )}
                    </div>

                    <div
                        className='col-span-12 lg:col-span-4 bg-white dark:!bg-main-600 rounded-3xl px-8 py-10'
                        data-aos='fade-left'
                    >
                        <Avatar
                            src={TERMS_AND_CONDITION?.image}
                            className='w-full h-auto'
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default page;
