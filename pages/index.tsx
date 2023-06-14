
import AboutMe from './components/AboutMe'
import Head from './components/Head'
import Line from './components/Line'
import Skills from './components/Skills'
import cvData from "../cv-data/cv.json";
import { Cv } from "../cv-data/cv";
import Experiences from './components/Experiences'
import TechStack from './components/TechStack'
import React from 'react';
import StickyArin from './components/StickyArin';
import Educations from './components/Educations';
import Certication from './components/Certification';



export const PageContext = React.createContext({
  settings: { lang: 'sv', darkMode: false },
  setSettings: (lang: { lang: string, darkMode: boolean }) => { }
});



export default function Home({ cv }: { cv: Cv }) {

  const [settings, setSettings] = React.useState({ lang: 'sv', darkMode: false });
  const value = { settings, setSettings }


  return (
    <PageContext.Provider value={value}>


      <div className="flex flex-col">
        <div className="flex flex-col">
          <Head cv={cv}></Head>

        </div>
        <TechStack></TechStack>
        <div className='flex flex-row items-stretch'>
          <div className="flex flex-col md:w-10/12 lg:w-11/12 print:w-full w-full">
            
            <div className="flex flex-col md:flex-row pt-20 p-4 md:p-10 pb-20 flex-wrap overflow-hidden print:pr-10 print:pl-10">

              <AboutMe cv={cv}></AboutMe>

            </div>
            <div className="flex flex-col md:flex-row pt-20 p-4 md:p-10 pb-20 flex-wrap overflow-hidden print:pr-10 print:pl-10">

              <Certication cv={cv}></Certication>

            </div>
            <div className="flex flex-col p-4 md:p-10 overflow-hidden">
              <div data-aos="fade-left">
                <h2 className="text-2xl font-bold ">
                  {settings.lang == "sv" ? "Erfarenhet" : "Experience"}
                </h2>
                <Line></Line>
                <div className="mb-10 print:pr-10 print:pl-10">

                </div>
              </div>
              <div className="flex flex-row flex-wrap print:pr-10 print:pl-10">
                <Experiences cv={cv}></Experiences>

              </div>
            </div>
            <Line></Line>
            <div className="flex flex-col p-4 md:p-10">
              <h2 className="text-2xl font-bold ">
                {settings.lang == "sv" ? "Kompetens" : "Skills"}
              </h2>
              <Line></Line>
              <div className="mb-4"></div>
              <div className="flex flex-row flex-wrap">
                <Skills cv={cv}></Skills>
                
              </div>

            </div>
            <Line></Line>
            <div className="flex flex-col p-4 md:p-10">
              <h2 className="text-2xl font-bold">
                {settings.lang == "sv" ? "Utbildning" : "Education"}
              </h2>
              <Line></Line>
              <div className="mb-4"></div>
              <Educations educations={cv.education}></Educations>
              
              
            </div>
          </div>
          <div className='hidden md:w-2/12 lg:w-1/12 print:hidden md:flex items-start justify-around border-l-2 border-gray-200 mt-20' >
            <StickyArin settings={settings}></StickyArin>
          </div>
        </div>
      </div>
    </PageContext.Provider>
  )
}



export async function getStaticProps() {
  return {
    props: {
      cv: cvData as Cv,
    }
  }
}