import '../styles/globals.css'

import { useEffect } from 'react';
import AOS from 'aos';

import "aos/dist/aos.css";


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

  return <Component {...pageProps} />
}

export default MyApp
