'use client';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import AOS from 'aos';

const AosInit = () => {
    useEffect(() => {
        AOS.init({
            easing: 'ease-out-quad',
            duration: 1000
        });
    }, []);
    return <></>;
};

export default AosInit;
