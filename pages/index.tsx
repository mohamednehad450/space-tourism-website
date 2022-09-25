import type { NextPage } from 'next'
import { RoundButton } from '../components/home'
import { Container, H1, H5, P } from '../components/shared'




const Home: NextPage = () => {
  return (
    <main className={`
      h-screen w-screen bg-black overflow-scroll
      bg-home-m sm:bg-home-t lg:bg-home bg-cover
    `}>
      <Container>
        <div className='flex flex-col lg:flex-row h-full pt-7 sm:pt-20 py-11 sm:px-20 px-6'>

          <div className='lg:flex-1 text-white flex items-center justify-end flex-col lg:p-0 sm:p-10 animate-slide-in'>
            <div className='sm:w-[450px] lg:pb-24 text-center'>
              <span className='text-accent lg:text-start text-center'>
                <H5>{"So, you want to travel to".toLocaleUpperCase()}</H5>
              </span>
              <H1>{"Space".toLocaleUpperCase()}</H1>
              <div className='lg:text-start text-center lg:pt-14 text-accent'>
                <P>
                  Let’s face it; if you want to go to space, you might as well genuinely go to
                  outer space and not hover kind of on the edge of it. Well sit back, and relax
                  because we’ll give you a truly out of this world experience!
                </P>
              </div>

            </div>
          </div>

          <div className='lg:flex-1 flex items-center lg:items-end justify-end sm:justify-center lg:justify-end flex-col lg:p-0 sm:p-10 grow animate-fade-in'>
            <RoundButton onClick={() => alert('CLICKED')} >
              {"Explore".toLocaleUpperCase()}
            </RoundButton>
          </div>

        </div>
      </Container>
    </main>
  )
}

export default Home
