
import ContactInfo from './components/ContactInfo'
import cvData from "./api/cv.json"
import AboutMe from './components/AboutMe'
import Head from './components/Head'
import Line from './components/Line'
import Skills from './components/Skills'
import { Cv } from './api/cv'
import Experiences from './components/Experiences'
import TechStack from './components/TechStack'


export default function Home({cv}: {cv: Cv}) {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col">
        <Head cv={cv}></Head>
        
      </div>
      <TechStack></TechStack>
      <div className="flex flex-col md:flex-row pt-20 p-4 md:p-10 pb-20 flex-wrap overflow-hidden">
        
          <AboutMe cv={cv}></AboutMe>
        
      </div>  
      <div className="flex flex-col p-4 md:p-10 overflow-hidden">
        <div data-aos="fade-left">
          <h2 className="text-2xl font-bold mb-10">Erfarenhet</h2>
        </div>
        <div className="flex flex-row flex-wrap">
          <Experiences cv={cv}></Experiences>
          
        </div>
      </div>
      <Line></Line>
      <div className="flex flex-col p-4 md:p-10">
        <h2 className="text-2xl font-bold mb-4">Kompetens</h2>
        
        <div className="flex flex-row flex-wrap">
          <Skills cv={cv}></Skills>
          
        </div>
      </div>

    </div>
  )
}



export async function getStaticProps() {
  return {
    props: {
      cv: cvData as Cv,
    }
  }
}