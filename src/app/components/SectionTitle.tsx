import { Icons } from '@/components';
import React from 'react';

interface IProps {
    title: string;
    iconColor?: string;
    className?: string;
    titleColor?: string;
}

const SectionTitle = ({ title, iconColor, className, titleColor }: IProps) => {
    return (
        <div className={`flex gap-2.5 items-center ${className}`}>
            <Icons.FourDot
                className={`fill-base-500 dark:fill-white ${iconColor}`}
            />
            <h2 className={`text-[26px] ${titleColor}`}>{title}</h2>
        </div>
    );
};

export default SectionTitle;
