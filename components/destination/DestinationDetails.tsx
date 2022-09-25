import { FC } from 'react'
import { P, H2, Divider } from '../shared'
import LabeledData from './LabeledData'

interface DestinationDetailsProps {
    name: string
    description: string
    distance: string
    travel: string
    show?: boolean
}

const DestinationDetails: FC<DestinationDetailsProps> = ({
    name,
    description,
    distance,
    travel,
    show
}) => {

    return (
        <div className={`${!show && "hidden"} motion-safe:animate-slide-in text-white`}>
            <H2 >{name.toLocaleUpperCase()}</H2>
            <div className='lg:py-6 sm:pt-4 text-accent'>
                <P>
                    {description}
                </P>
            </div>
            <Divider />
            <div className='flex flex-col sm:flex-row sm:gap-0 gap-8'>
                <LabeledData label={"Avg. distance".toUpperCase()} data={distance.toLocaleUpperCase()} />
                <LabeledData label={"Est. travel time".toUpperCase()} data={travel.toLocaleUpperCase()} />
            </div>
        </div>
    )
}

export default DestinationDetails