import type { NextPage } from 'next'
import { Header } from '../components/shared'
import { useEffect } from 'react'
import { TechnologySelect } from '../components/technology'


const Technology: NextPage = () => {
    useEffect(() => {
        const container = document.getElementById("container")
        container?.classList.add("bg-technology-m", "sm:bg-technology-t", "lg:bg-technology", "bg-cover")
        return () => { container?.classList.remove("bg-technology-m", "sm:bg-technology-t", "lg:bg-technology", "bg-cover") }
    }, [])
    return (

        <div className='min-h-full lg:pt-20 sm:pt-10  flex flex-col max-w-[1440px] mx-auto'>
            <div className='lg:mx-40 sm:mx-10 motion-safe:animate-slide-in'>
                <Header prefix='03' title={"Space launch 101".toLocaleUpperCase()} />
            </div>
            <TechnologySelect />
        </div>
    )
}


export default Technology