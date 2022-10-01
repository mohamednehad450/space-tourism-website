import { FC, useState } from 'react'
import { useAppData } from '../hooks'
import RoundSliderButton from './RoundSliderButton'
import TechnologyDetails from './TechnologyDetails'
import TechnologyImage from './TechnologyImage'

const TechnologySelect: FC = () => {

    const data = useAppData()
    const [active, setActive] = useState(0)

    if (!data || data === 'Loading') return (<div>Loading</div>)
    if (data === 'Error') return (<div>Error</div>)

    const { technology } = data

    return (
        <div className='grow lg:ml-40 flex lg:flex-row flex-col-reverse'>

            <section className='flex-1 flex lg:flex-row flex-col lg:gap-20 lg:mt-32'>

                <div className='flex lg:flex-col lg:gap-8 gap-4 lg:mx-0 mx-auto'>
                    {technology.map((_, i) => (<RoundSliderButton key={i} onClick={() => setActive(i)} active={i === active}>{i + 1}</RoundSliderButton>))}
                </div>

                <div className='py-7 sm:py-11 lg:py-0 sm:px-0 px-6'>
                    {technology.map(({ name, description }, i) => (<TechnologyDetails key={i} name={name} description={description} show={active === i} />))}
                </div>

            </section>

            <section className='lg:flex-1 flex items-start justify-end lg:pt-6 sm:py-14 py-8'>
                {technology.map((t, i) => <TechnologyImage key={i} src={t.images} show={i === active} />)}
            </section>

        </div>
    )
}


export default TechnologySelect