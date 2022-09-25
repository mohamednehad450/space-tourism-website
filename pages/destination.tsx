import type { NextPage } from 'next'
import { Container, Header } from '../components/shared'
import { DestinationSelect } from '../components/destination'





const Destination: NextPage = () => {
    return (
        <main className={`
            h-screen w-screen overflow-scroll
            bg-destination-m sm:bg-destination-t lg:bg-destination bg-cover
      `}>
            <Container>
                <div className='mb-8 sm:m-10 lg:my-16  lg:mx-40 motion-safe:animate-slide-in'>
                    <Header prefix='01' title={"Pick your destination".toLocaleUpperCase()} />
                </div>
                <DestinationSelect />
            </Container>
        </main>
    )
}

export default Destination
