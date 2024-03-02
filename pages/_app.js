import Head from 'next/head'
import '../styles/global.css'
import '../styles/themify-icons.css'
import '../styles/animate.css'
import '../styles/slick.css'
import '@popperjs/core'
import 'bootstrap/dist/css/bootstrap.css'
import NavigationBar from '../src/app/Navigation'
import Footer from '../src/app/Footer';

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <NavigationBar/>
      <Component {...pageProps} />
      <Footer/>
    </>)
}