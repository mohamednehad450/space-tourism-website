import { FC, HTMLAttributes, PropsWithChildren } from "react"



const H1: FC<PropsWithChildren<HTMLAttributes<HTMLHeadingElement>>> = (props) => {

    return (
        <h1 {...{ ...props }} className='text-[80px] sm:text-[150px] font-h1 lg:leading-[171.9px]' />
    )
}


export default H1