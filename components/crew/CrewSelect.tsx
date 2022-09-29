import { useState } from 'react'
import { useAppData } from '../hooks'
import CrewDetails from './CrewDetails'
import CrewImage from './CrewImage'
import SliderButton from './SliderButton'


const CrewSelect = () => {

    const data = useAppData()
    const [active, setActive] = useState(0)

    if (!data || data === "Error") return null
    if (data === "Loading") return (<div>{"Loading"}</div>)

    const { crew } = data


    return (
        <div className='sm:grow flex flex-col-reverse sm:flex-col lg:flex-row lg:p-0 sm:px-10 '>

            <section className='lg:pl-40 lg:flex-1 lg:pt-24 sm:pt-16 pt-8 flex lg:justify-start sm:justify-center bg-fuchsia-500-50 bg-opacity-25' >

                <div className='flex sm:flex-col flex-col-reverse lg:items-start items-center  justify-between max-w-md  '>

                    {crew.map((c, i) => (
                        <CrewDetails key={i} {...{ ...c }} show={active === i} />
                    ))}

                    <div className='flex gap-4 lg:pt-0 lg:pb-24 sm:pb-0 pb-8 sm:pt-8 '>
                        {crew.map((_, i) => (
                            <SliderButton key={i} active={i === active} onClick={() => setActive(i)} />
                        ))}
                    </div>

                </div>

            </section>


            <section className='flex-1 flex flex-col items-center lg:justify-end justify-start lg:pt-0 sm:pt-10 pt-8 p-0 border-b border-b-gray-600 sm:border-b-0'>
                {crew.map((c, i) => (
                    <CrewImage key={i} src={c.images.png} show={active === i} />
                ))}
            </section>

        </div>
    )
}


export default CrewSelect