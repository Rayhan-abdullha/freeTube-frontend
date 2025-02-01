import Image from "next/image";
import logo from '../../public/logo.svg'

const Logo = ({ className }: { className?: string }) => {
    return (
        <Image src={logo} width={40} height={40} alt="Logo" className={className}/>
    );
};

export default Logo;
