import '../styles/globals.css'

import { useEffect } from 'react';
import AOS from 'aos';
import cvData from './../cv-data/cv.json'
import Cv from './../cv-data/cv'

import "aos/dist/aos.css";
import Head from 'next/head'
import ReactGA from "react-ga4";


let inDevEnvironment = false;

if (process && process.env.NODE_ENV === 'development') {
  inDevEnvironment = true;
}
if(!inDevEnvironment){
  ReactGA.initialize([
    {
      trackingId: "G-HTJHKGFL4F",
    }
  ]);
  ReactGA.send("pageview");
}

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
      <title>CV Arin Sinabian</title>
      <link rel="apple-touch-icon" href="apple-touch-icon.png"></link>
      <link rel="manifest" href="manifest.json" />
      <meta name="description" lang="sv" content={cvData.sv.aboutMe}></meta>
      <meta name="description" lang="en" content={cvData.en.aboutMe}></meta>
    </Head>
    <Component {...pageProps} />
  </>
}

export default MyApp
