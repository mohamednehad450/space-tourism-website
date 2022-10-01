import { H3, P, SH2 } from '../shared'
import { FC } from 'react'


const TechnologyDetails: FC<{ show: boolean, name: string, description: string }> = ({ show, name, description }) => {
    return (
        <div className={`${show ? "animate-slide-in" : "hidden"} flex flex-col gap-2 lg:text-start text-center`}>
            <span className='text-accent'>
                <SH2>{"The terminology...".toLocaleUpperCase()}</SH2>
            </span>
            <span className='text-white'>
                <H3>{name.toLocaleUpperCase()}</H3>
            </span>
            <div className='max-w-[444px] text-accent py-2 lg:mx-0 mx-auto'>
                <P>{description}</P>
            </div>
        </div>
    )
}


export default TechnologyDetails