import { FC, PropsWithChildren } from "react"



const SH1: FC<PropsWithChildren> = ({ children }) => {

    return (
        <span className='text-[28px] leading-[32px] sm:leading-none font-sh1'>{children}</span>
    )
}

export default SH1