import { useTheme } from 'next-themes';
const Logo = ({ className }: { className?: string }) => {
    const { theme } = useTheme();

    return (
        <h3 className={`${theme === 'dark' ? '/logo_white.png' : '/logo_white.png'} ${className}`}>
            CleanView 
        </h3>
    );
};

export default Logo;
