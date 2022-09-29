
import { FC, HTMLAttributes, PropsWithChildren } from "react"



const H3: FC<PropsWithChildren<HTMLAttributes<HTMLHeadingElement>>> = (props) => {

    return (
        <h3 {...{ ...props }} className='text-[24px] sm:text-[40px] lg:text-[56px] leading-7 sm:leading-[64px] font-h3' />
    )
}


export default H3

