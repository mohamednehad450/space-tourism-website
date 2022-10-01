


import { FC, HTMLAttributes, PropsWithChildren } from "react"



const P: FC<PropsWithChildren<HTMLAttributes<HTMLParagraphElement>>> = (props) => {

    return (
        <p {...{ ...props }} className='text-[15px] sm:text-[16px] lg:text-lg lg:leading-8 font-p' />
    )
}


export default P

