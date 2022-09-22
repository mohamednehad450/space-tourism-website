import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { NavBar, NavLink, NavLinks } from './components/nav'
import NavLogo from './components/nav/NavLogo'

function MyApp({ Component, pageProps }: AppProps) {

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" type="image/png" sizes="32x32" href="./assets/favicon-32x32.png" />
        <title>Frontend Mentor | Space tourism website</title>
      </Head>
      <NavBar>
        <NavLogo src={'/assets/shared/logo.svg'} href="/" />
        <div className='hidden lg:flex items-center grow h-24'>
          <div className='border-b border-white border-opacity-25 translate-x-8 w-full z-10' />
        </div>
        <NavLinks>
          <NavLink href='#' prefix='00' label='Home' active />
          <NavLink href='#' prefix='01' label='Destination' />
          <NavLink href='#' prefix='02' label='Crew' />
          <NavLink href='#' prefix='03' label='Technology' />
        </NavLinks>
      </NavBar>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
