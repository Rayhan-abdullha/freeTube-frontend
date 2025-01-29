/* eslint-disable @typescript-eslint/no-unused-expressions */
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
    useEffect(() => {
        const bodyEl = document.querySelector('body');

        if (isShowMobileMenu) {
            bodyEl && bodyEl.classList.add('modal-open');
        } else {
            bodyEl && bodyEl.classList.remove('modal-open');
        }
    }, [isShowMobileMenu]);

    const getFirstTwoSegments = (path: string): string => {
        const segments = path.split('/').filter(Boolean);
        return `/${segments.slice(0, 1).join('/')}`;
    };

    const pathName = usePathname();
    const pathNameAbsolute = getFirstTwoSegments(pathName);

    return (
        <header className='sticky top-0 py-4 z-50'>
            <div className='container'>
                {/* larger device menu */}
                <div className=' bg-white backdrop-blur-sm border border-primary-50/40 dark:bg-gray-900/60 py-2 px-4 rounded-full hidden lg:flex items-center justify-between'>
                    <div className=''>
                        <Link href={'/'}>
                            <Logo />
                        </Link>
                    </div>
                    <div className='flex justify-end items-center gap-4 text-gray-800  dark:text-gray-100'>
                        {MENUS.map(({ id, route, label, isButton }) => (
                            <Link
                                className={`whitespace-nowrap transition-colors duration-300 px-3 py-2.5  hover:font-medium  ${
                                    isButton
                                        ? 'px-4 py-3 text-white rounded-full bg-gradient-to-tr from-primary-800 to-fuchsia-900 hover:bg-gradient-to-tl'
                                        : 'hover:text-primary-900'
                                } ${pathNameAbsolute === route ? 'bg-base-200 text-white px-4 py-2.5 rounded-full font-medium transition-all duration-300' : ''}`}
                                key={id}
                                href={route}
                            >
                                {label}
                            </Link>
                        ))}
                    </div>
                    <div className='flex items-center justify-end gap-5'>
                        {AUTH_MENU.map(({ id, route, label }) => (
                            <RoundedBtn key={id} href={route}>
                                {label}
                            </RoundedBtn>
                        ))}
                        <div className='min-w-8 min-h-12 flex items-center justify-center'>
                            <ThemeSwitcher />
                        </div>
                    </div>
                </div>
                {/* Mobile menu */}
                {!isShowMobileMenu ? (
                    <div className='bg-white lg:hidden flex justify-between items-center bg-primary-200/40 backdrop-blur-sm dark:bg-gray-800/60 mt-3 px-4 py-3 rounded-full'>
                        <Link href={'/'}>
                            <Logo className='!h-7' />
                        </Link>
                        <div className='flex items-center justify-end gap-6'>
                            <ThemeSwitcher />
                            <button
                                onClick={() => setIsShowMobileMenu(true)}
                                className='no-underline  rounded-md'
                            >
                                <Icons.HamMenu />
                            </button>
                        </div>
                    </div>
                ) : (
                    <div className='bg-main-500 block lg:hidden dark:bg-slate-900 h-full w-full fixed top-0 left-0 py-'>
                        <div className='px-6 mt-8'>
                            <div className='bg-white dark:bg-gray-800/30 px-4 py-3 rounded-full flex justify-between items-center mb-2'>
                                <Logo className='!h-7' />
                                <div className='flex items-center justify-end gap-6'>
                                    <ThemeSwitcher />
                                    <button
                                        onClick={() =>
                                            setIsShowMobileMenu(false)
                                        }
                                        className='no-underline  rounded-md'
                                    >
                                        <Icons.X />
                                    </button>
                                </div>
                            </div>
                            <div className='flex flex-col justify-end gap-4  '>
                                {MENUS.map(({ id, route, label, isButton }) => (
                                    <Link
                                        className={`whitespace-nowrap transition-colors duration-300 px-3 py-2.5 hover:text-base-300 hover:font-medium  ${
                                            isButton
                                                ? 'px-4 py-3 text-white rounded-full bg-gradient-to-tr from-primary-800 to-fuchsia-900 hover:bg-gradient-to-tl'
                                                : 'hover:text-primary-900'
                                        }`}
                                        key={id}
                                        href={route}
                                    >
                                        {label}
                                    </Link>
                                ))}

                                {AUTH_MENU.map(({ id, route, label }) => (
                                    <div className='w-[200px]' key={id}>
                                        <RoundedBtn
                                            key={id}
                                            href={route}
                                            className='!inline-block'
                                        >
                                            {label}
                                        </RoundedBtn>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
};

export default TheHeader;
