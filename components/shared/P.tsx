


import { FC, HTMLAttributes, PropsWithChildren } from "react"



const P: FC<PropsWithChildren<HTMLAttributes<HTMLParagraphElement>>> = (props) => {

    return (
        <p {...{ ...props }} className='text-[15px] sm:text-base lg:text-lg font-p' />
    )
}


export default P

