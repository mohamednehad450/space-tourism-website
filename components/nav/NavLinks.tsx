import Image from "next/image";
import { FC, PropsWithChildren, useState } from "react";



const NavLinks: FC<PropsWithChildren> = ({ children }) => {

    const [open, setOpen] = useState(false)

    return (
        <>
            <button className="sm:hidden py-8 px-6 h-5" onClick={() => setOpen(true)} >
                <Image src="/assets/shared/icon-hamburger.svg" width={24} height={20} />
            </button>
            <ul className={`
                    flex flex-col sm:flex-row
                    h-screen sm:h-24  lg:w-3/5 sm:w-7/12 w-4/6  lg:px-24 
                    bg-white backdrop-blur-2xl bg-opacity-5 
                    lg:justify-start sm:justify-evenly
                    sm:relative sm:right-auto sm:translate-x-0
                    absolute right-0 ${open ? "translate-x-[0]" : "translate-x-[100%]"} transition-all ease-in-out overflow-hidden
                `}>
                <button className="sm:hidden my-8 mx-6 mb-14 text-end h-5" onClick={() => setOpen(false)}>
                    <Image src="/assets/shared/icon-close.svg" width={20} height={20} />
                </button>
                {children}
            </ul>
        </>
    )
}
export default NavLinks