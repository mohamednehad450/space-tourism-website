
import { FC, HTMLAttributes, PropsWithChildren } from "react"



const H4: FC<PropsWithChildren<HTMLAttributes<HTMLHeadingElement>>> = (props) => {

    return (
        <h4 {...{ ...props }} className='sm:text-[20px] lg:text-[32px] leading-[18px] sm:leading-[36px] font-h4' />
    )
}


export default H4

