import Image from 'next/image'
import { FC, useState } from 'react'
import { useAppData } from '../hooks'
import DestinationDetails from './DestinationDetails'
import TabButton from './TabButton'



const DestinationSelect: FC = () => {


    const data = useAppData()
    const [active, setActive] = useState(0)

    if (!data || data === "Error") return null
    if (data === "Loading") return (<div>{"Loading"}</div>)

    const { destinations } = data

    return (
        <section className='flex flex-col lg:flex-row px-6 sm:px-24 lg:px-40 gap-9 lg:gap-0'>
            <div className='lg:flex-1 flex flex-col items-center sm:py-5 lg:py-8'>
                {destinations.map((d, i) => (
                    <div key={d.images.webp} className={`${i === active ? "" : "hidden"} w-[175px] sm:w-[300px] lg:w-[445px] motion-safe:animate-fade-in`} >
                        <Image src={d.images.webp} width={445} height={445} />
                    </div>
                ))}
            </div>
            <div className='flex-1 flex flex-col items-center'>
                <div className='lg:max-w-md'>
                    <div className='flex gap-8 justify-center lg:justify-start'>
                        {destinations.map((d, i) => (
                            <TabButton key={i} active={active === i} onClick={() => setActive(i)}>
                                {d.name.toLocaleUpperCase()}
                            </TabButton>
                        ))}
                    </div>
                    <div className='py-5 sm:py-9 text-center lg:text-start'>
                        {destinations.map((d, i) => (
                            <DestinationDetails
                                key={i}
                                name={d.name}
                                description={d.description}
                                distance={d.distance}
                                travel={d.travel}
                                show={active === i}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}


export default DestinationSelect
