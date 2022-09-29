import type { NextPage } from 'next'
import { Header } from '../components/shared'
import { DestinationSelect } from '../components/destination'
import { useEffect } from 'react'





const Destination: NextPage = () => {
    useEffect(() => {
        const container = document.getElementById("container")
        container?.classList.add("bg-destination-m", "sm:bg-destination-t", "lg:bg-destination", "bg-cover")
        return () => { container?.classList.remove("bg-destination-m", "sm:bg-destination-t", "lg:bg-destination", "bg-cover") }
    }, [])
    return (

        <>
            <div className='mb-8 sm:m-10 lg:my-16  lg:mx-40 motion-safe:animate-slide-in'>
                <Header prefix='01' title={"Pick your destination".toLocaleUpperCase()} />
            </div>
            <DestinationSelect />
        </>
    )
}

export default Destination
