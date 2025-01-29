'use client';
import RoundedBtn from '@/components/core/buttons/RoundedBtn';
import { Icons } from '@/components/Icons';
import Logo from '@/components/Logo';
import { ThemeSwitcher } from '@/components/themeSwitcher';
import { AUTH_MENU, MENUS } from '@/static';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const TheHeader = () => {
    const [isShowMobileMenu, setIsShowMobileMenu] = useState(false);
    const pathName = usePathname();

    useEffect(() => {
        document.body.classList.toggle('modal-open', isShowMobileMenu);
    }, [isShowMobileMenu]);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024) {
                setIsShowMobileMenu(false);
            }
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const closeMobileMenu = () => setIsShowMobileMenu(false);

    return (
        <header className='sticky top-0 py-4 z-50 bg-white dark:bg-gray-900 shadow-md mb-3 xl:mb-6'>
            <div className='container flex justify-between items-center px-4'>
                <Link href={'/'}>
                    <Logo className='h-8 dark:text-white' />
                </Link>
                <nav className='hidden lg:flex items-center gap-6 text-gray-900 dark:text-white'>
                    {MENUS.map(({ id, route, label }) => (
                        <Link key={id} href={route} className={`hover:text-primary-500 px-3 py-2 ${pathName === route ? 'font-bold text-blue-500' : ''}`}>
                            {label}
                        </Link>
                    ))}
                    {AUTH_MENU.map(({ id, route, label }) => (
                        <RoundedBtn key={id} href={route}>
                            {label}
                        </RoundedBtn>
                    ))}
                    <ThemeSwitcher />
                </nav>
                <div className='lg:hidden flex items-center gap-4'>
                    <ThemeSwitcher />
                    <button onClick={() => setIsShowMobileMenu(!isShowMobileMenu)}>
                        <Icons.HamMenu />
                    </button>
                </div>
            </div>
            
            {/* Mobile Menu */}
            <div 
                className={`fixed inset-0 bg-black opacity-50 transition-opacity duration-300 ${isShowMobileMenu ? 'block' : 'hidden'}`} 
                onClick={closeMobileMenu}
            />
            <div 
                className={`fixed inset-y-0 left-0 bg-white dark:bg-gray-900 text-gray-900 dark:text-white flex flex-col items-center gap-6 pt-20 shadow-lg rounded-lg w-full sm:w-1/2 transition-transform duration-300 ${isShowMobileMenu ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}`}>
                <button className='absolute top-4 right-4' onClick={closeMobileMenu}>
                    <Icons.X className='text-gray-600 dark:text-white' />
                </button>
                {MENUS.map(({ id, route, label }) => (
                    <Link key={id} href={route} className='text-lg font-medium py-2 hover:text-primary-500' onClick={closeMobileMenu}>
                        {label}
                    </Link>
                ))}
                {AUTH_MENU.map(({ id, route, label }) => (
                    <RoundedBtn key={id} href={route} className='w-40 text-center' onClick={closeMobileMenu}>
                        {label}
                    </RoundedBtn>
                ))}
            </div>
        </header>
    );
};

export default TheHeader;
