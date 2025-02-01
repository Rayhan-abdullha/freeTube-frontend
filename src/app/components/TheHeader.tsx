'use client';
import { Icons } from '@/components/Icons';
import Logo from '@/components/Logo';
import { ThemeSwitcher } from '@/components/themeSwitcher';
import { MENUS } from '@/static';
import { BookOpen, GraduationCap, Home, LayoutDashboard, Menu } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const TheHeader = () => {
    const [isShowMobileMenu, setIsShowMobileMenu] = useState(false);
    const isLogin = true
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
        <header className='sticky top-0 py-4 z-50 bg-main-500 dark:bg-gray-900 sm:shadow-sm mb-3 xl:mb-6'>
            <div className='container flex justify-between sm:justify-center items-center px-4'>
                <Link href={'/'} className='flex gap-2 items-center block sm:hidden'>
                    <Logo />
                    <h3 className='font-bold text-[18px]'>MindSync</h3>
                </Link>
                <nav className='hidden sm:flex items-center gap-6 text-gray-900 dark:text-white'>
                    {
                        MENUS.map(({ id, route, label }) => (
                            <Link key={id} href={route} className={`hover:text-primary-500 px-3 py-2 ${pathName === route ? 'font-medium text-[#5f27cd]' : ''}`}>
                                {label === 'Home' && <Home className='w-8 h-8' /> }
                                {label === 'Dashboard' && <LayoutDashboard className='w-[30px] h-[30px]' /> }
                                {label === 'Courses' && <GraduationCap className='w-10 h-10' /> }
                                {label === 'Blog' && <BookOpen className='w-8 h-8' /> }
                            </Link>
                        ))
                    }
                   {
                    !isLogin ?  <Link
                    href={'/auth?tab=login'}
                    className={`bg-[#5f27cd] py-1 px-4 text-white rounded-full font-medium hover:scale-105 transition-all duration-300`}
                    >
                        Login
                        </Link> :
                        <Link href={'/profile'}>
                            <Image
                                src="https://th.bing.com/th/id/OIP.wEsBe2udHBieFeZVmus8qAHaHk?rs=1&pid=ImgDetMain"
                                alt="Avatar"
                                width={40}
                                height={40}
                                className="rounded-full w-9 h-9 object-cover shadow-md cursor-pointer hover:scale-105 transition-all duration-300"
                                />
                        </Link>
                }
                    <ThemeSwitcher />
                </nav>
                <div className='sm:hidden flex items-center gap-4'>
                    <ThemeSwitcher />
                    <button onClick={() => setIsShowMobileMenu(!isShowMobileMenu)}>
                        <Menu className='w-8 h-8'/>
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
                 {
                    isLogin ?  <Link
                    href={'/auth?tab=login'}
                    className={`bg-[#5f27cd] px-5 py-2 text-white rounded-full font-medium hover:scale-105 transition-all duration-300`}
                    >
                        Login
                    </Link> : <Image
                        src="https://th.bing.com/th/id/OIP.wEsBe2udHBieFeZVmus8qAHaHk?rs=1&pid=ImgDetMain"
                        alt="Avatar"
                        width={50}
                        height={50}
                        className="rounded-full"
                    />
                }
            </div>
        </header>
    );
};

export default TheHeader;
