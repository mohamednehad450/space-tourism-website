import { FC, PropsWithChildren } from "react";



const NavBar: FC<PropsWithChildren> = ({ children }) => {

    return (
        <nav className='absolute z-10 lg:top-10 top-0 lg:pl-14 w-full flex flex-row justify-between' >
            {children}
        </nav>
    )
}

export default NavBar