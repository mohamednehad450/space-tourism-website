
import { FC, HTMLAttributes, PropsWithChildren } from "react"



const H5: FC<PropsWithChildren<HTMLAttributes<HTMLHeadingElement>>> = (props) => {

    return (
        <h5 {...{ ...props }} className='text-[15px] sm:text-xl lg:text-[28px] font-h5 tracking-[2.7px] sm:tracking-[4.75px]' />
    )
}


export default H5

