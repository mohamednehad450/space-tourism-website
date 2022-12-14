import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { NavBar, NavLink, NavLinks } from '../components/nav'
import NavLogo from '../components/nav/NavLogo'
import { useRouter } from 'next/router'
import { ProvideAppData } from '../components/hooks'
import getConfig from 'next/config'

const routes = [
  { href: "/", label: 'Home', prefix: '00' },
  { href: "/destination", label: 'Destination', prefix: '01' },
  { href: "/crew", label: 'Crew', prefix: '02' },
  { href: "/technology", label: 'Technology', prefix: '03' },

]


function MyApp({ Component, pageProps }: AppProps) {

  const router = useRouter()
  const prefix = getConfig().publicRuntimeConfig?.assetsPrefix || ""

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" type="image/png" sizes="32x32" href="./assets/favicon-32x32.png" />
        <title>Frontend Mentor | Space tourism website</title>
      </Head>
      <div id="container" className='h-screen grid grid-rows-layout-m sm:grid-rows-layout-t lg:grid-rows-layout'>
        <NavBar>
          <NavLogo src={prefix + '/assets/shared/logo.svg'} href="/" />
          <div className='hidden lg:flex items-center grow h-24'>
            <div className='border-b border-white border-opacity-25 translate-x-8 w-full z-10' />
          </div>
          <NavLinks>
            {routes.map(r => (
              <NavLink key={r.href} {...{ ...r }} active={r.href === router.pathname} />
            ))}
          </NavLinks>
        </NavBar>
        <ProvideAppData>
          <main className='overflow-scroll' >
            <Component {...pageProps} />
          </main>
        </ProvideAppData>

      </div>
    </>
  )
}

export default MyApp
