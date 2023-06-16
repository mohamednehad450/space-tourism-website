import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

const NavLogo: FC<{ src: string; href: string }> = ({ src, href }) => {
    return (
        <Link href={href}>
            <a
                href="#"
                className="w-10 sm:w-12 h-10 sm:h-12 m-6 sm:ml-10 lg:ml-0"
                aria-label="Home page"
            >
                <Image alt="Logo" src={src} width={48} height={48} />
            </a>
        </Link>
    );
};

export default NavLogo;
