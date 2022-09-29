import type { NextPage } from 'next'
import { Header } from '../components/shared'
import { CrewSelect } from '../components/crew'
import { useEffect } from 'react'


const Crew: NextPage = () => {
    useEffect(() => {
        const container = document.getElementById("container")
        container?.classList.add("bg-crew-m", "sm:bg-crew-t", "lg:bg-crew", "bg-cover")
        return () => { container?.classList.remove("bg-crew-m", "sm:bg-crew-t", "lg:bg-crew", "bg-cover") }
    }, [])
    return (
        <div className='min-h-full lg:pt-20 sm:p-10 sm:pb-0 p-6 pb-0 flex flex-col'>
            <div className='lg:pl-40 motion-safe:animate-slide-in'>
                <Header prefix='02' title={"Meet your crew".toLocaleUpperCase()} />
            </div>
            <CrewSelect />
        </div>
    )
}

export default Crew
