
import Link from 'next/link'
import { FC } from 'react'

const NavLink: FC<{ href: string, label: string, prefix: string, active?: boolean }> = ({ label, prefix, href, active }) => {
    return (
        <li className={`
            sm:h-auto h-8
            lg:mx-6 sm:m-0 my-2 mr-0 ml-8
            border-r-[3px] sm:border-r-0  sm:border-b-[3px] border-transparent 
            ${active ? 'sm:border-b-white border-r-white' : "sm:hover:border-b-gray-400 hover:border-r-gray-400"}
        `}>
            <Link href={href}>
                <a className='flex items-center font-nav text-white h-full gap-3' >
                    <span className='sm:hidden lg:block font-bold tracking-[2.7px] leading-5'>{prefix}</span>
                    <span className='tracking-[2.7px] leading-5'>{label}</span>
                </a>
            </Link>
        </li>
    )
}

export default NavLink
