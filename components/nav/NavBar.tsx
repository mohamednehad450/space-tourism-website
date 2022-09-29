import { FC, PropsWithChildren } from "react";



const NavBar: FC<PropsWithChildren> = ({ children }) => {

    return (
        <nav className='z-50 lg:pt-10 lg:pl-14 w-full flex flex-row justify-between' >
            {children}
        </nav>
    )
}

export default NavBar