import { FC } from "react";
import H5 from "./H5";



const Header: FC<{ title: string, prefix: string }> = ({ prefix, title }) => {


    return (
        <span className='sm:text-start font-h5 text-[28px] tracking-[4.7px] leading-8 text-white flex sm:justify-start justify-center lg:gap-7 gap-4 '>
            <span className='font-bold opacity-25 text-[15px] sm:text-[20px] lg:text-[28px]'>{prefix}</span>
            <H5>{title}</H5>
        </span>
    )
}

export default Header