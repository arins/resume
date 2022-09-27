
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
      <div className="flex flex-col md:flex-row pt-20 p-10 pb-40 flex-wrap">
        <div className="flex flex-col mb-10 md:mb-0 md:flex-1 p-4 mr-4 text-black">
          <AboutMe cv={cv}></AboutMe>
        </div>
    
        
        
      </div>  
      <div className="flex flex-col p-10">
        <h2 className="text-2xl font-bold mb-10" data-aos="fade-left">Erfarenhet</h2>
        
        <div className="flex flex-row flex-wrap">
          <Experiences cv={cv}></Experiences>
          
        </div>
      </div>
      <Line></Line>
      <div className="flex flex-col p-10">
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