import { FC, HTMLAttributes, PropsWithChildren } from "react"



const H2: FC<PropsWithChildren<HTMLAttributes<HTMLHeadingElement>>> = (props) => {

    return (
        <h2 {...{ ...props }} className='text-[56px] sm:text-[80px] lg:text-[100px] font-h2 leading-[64px] sm:leading-[92px] lg:leading-[114.6px]' />
    )
}


export default H2