import { Icons } from '@/components';

export const CONTACT_US_PAGE = {
    title: 'Send message',
    content:
        'We thrive to ensure that you get the most out of your experience.',
    itemsList: [
        {
            id: 1,
            title: 'Address',
            content: '27 Division St, 1100. Co 80237, USA',
            icon: (
                <Icons.Map className='fill-base-100 stroke-red-500 dark:fill-gray-300' />
            )
        },
        {
            id: 2,
            title: 'Contact',
            content: '+XXXXXXXXXX, mail@mail.com',
            icon: (
                <Icons.Contact className='!fill-[#484848] stroke-[#484848] dark:fill-gray-300' />
            )
        },
        {
            id: 3,
            title: 'Hours of operation',
            content: 'Monday - Friday: 10:00 - 15:00',
            icon: <Icons.Clock className='fill-[#484848] dark:fill-gray-300' />
        }
    ]
};
