import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { Container, RoundButton } from '../components/home'
import { H1, H5, P } from '../components/shared'


const Home: NextPage = () => {

  const router = useRouter()

  useEffect(() => {
    const container = document.getElementById("container")
    container?.classList.add("bg-home-m", "sm:bg-home-t", "lg:bg-home", "bg-cover")
    return () => { container?.classList.remove("bg-home-m", "sm:bg-home-t", "lg:bg-home", "bg-cover") }
  }, [])

  return (
    <Container>

      <section className='flex-1 flex lg:items-end lg:justify-start justify-center animate-slide-in max-h-[650px]'>

        <div className='sm:w-[450px] text-center'>

          <span className='text-accent lg:text-start text-center'>
            <H5>{"So, you want to travel to".toLocaleUpperCase()}</H5>
          </span>

          <span className='text-white'>
            <H1>{"Space".toLocaleUpperCase()}</H1>
          </span>

          <div className='lg:text-start text-center lg:pt-14 text-accent'>
            <P>
              Let’s face it; if you want to go to space, you might as well genuinely go to
              outer space and not hover kind of on the edge of it. Well sit back, and relax
              because we’ll give you a truly out of this world experience!
            </P>
          </div>

        </div>

      </section>

      <section className='flex-1 flex items-end lg:justify-end justify-center animate-fade-in max-h-[650px]'>

        <RoundButton onClick={() => router.push("/destination")} >
          {"Explore".toLocaleUpperCase()}
        </RoundButton>

      </section>

    </Container>
  )
}

export default Home
