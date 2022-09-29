import '../styles/globals.css'

import { useEffect } from 'react';
import AOS from 'aos';

import "aos/dist/aos.css";
import Head from 'next/head'

function MyApp({ Component, pageProps }) {

  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 0,
      delay: 200,
      once: false,
      duration: 600
    });
  }, []);

  return <>
    <Head>
      <title>Arin Sinabian</title>
      <link rel="manifest" href="manifest.json" />
    </Head>
    <Component {...pageProps} />
  </>
}

export default MyApp
