import { FC } from 'react'
import { H3, H4, P } from '../shared'

interface CrewDetailsProps {
    name: string
    role: string
    bio: string
    show: boolean
}

const CrewDetails: FC<CrewDetailsProps> = ({ name, role, bio, show }) => {
    return (
        <div className={`flex flex-col lg:items-start items-center lg:gap-3 sm:gap-0 gap-2 text-white ${show ? "animate-slide-in" : "hidden"}`}>
            <span className='opacity-50 '>
                <H4>
                    {role.toLocaleUpperCase()}
                </H4>
            </span>
            <span className='whitespace-nowrap'>
                <H3>
                    {name.toLocaleUpperCase()}
                </H3>
            </span>
            <div className='text-accent lg:py-4 sm:py-0 py-2 lg:max-w-md text-center lg:text-start'>
                <P>
                    {bio}
                </P>
            </div>
        </div>
    )
}


export default CrewDetails