import { FC, PropsWithChildren } from "react"


const SH2: FC<PropsWithChildren> = ({ children }) => {

    return (
        <span className='font-sh2 text-sm leading-[16.8px] tracking-[2.35px]'>{children}</span>
    )
}

export default SH2