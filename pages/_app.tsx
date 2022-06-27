import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import Navbar from '../components/navbar'
import theme from '../styles/theme'
import Categorias from '../components/categorias'
import Hero from '../components/hero'
import Footer from '../components/footer'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <header>
      <Hero/>
      </header>
      <section id="more">
        <Categorias/>
      </section>
      <footer>
      <Footer/>
      </footer>
      <Component {...pageProps} />
      
    </ChakraProvider>
  )
}

export default MyApp
