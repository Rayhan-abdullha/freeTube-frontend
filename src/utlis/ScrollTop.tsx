'use client';
import { Icons } from '@/components';
import ScrollToTop from 'react-scroll-to-top';

const ScrollTop = () => {
    return (
        <div className=''>
            <ScrollToTop
                smooth
                style={{
                    borderRadius: '99px',
                    backgroundColor: '#3d73ff'
                }}
                component={<Icons.MoveUp className='stroke-white' />}
                className='rounded-full flex items-center justify-center !bg-base-200'
            />
        </div>
    );
};

export default ScrollTop;
