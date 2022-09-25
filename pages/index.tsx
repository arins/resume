
import ContactInfo from './components/ContactInfo'
import cvData from "./api/cv.json"
import AboutMe from './components/AboutMe'
import Head from './components/Head'
import Line from './components/Line'
import Skills from './components/Skills'
import { Cv } from './api/cv'
import ContactInfo2 from './components/ContactInfo2'
import Experiences from './components/Experiences'

export default function Home({cv}: {cv: Cv}) {
  return (
    <div className="flex flex-col">
      <div className="shadow-slate-500 shadow-md flex flex-col">
        <Head cv={cv}></Head>
        <ContactInfo2 cv={cv}></ContactInfo2>
      </div>
      <div className="flex flex-col md:flex-row p-10 flex-wrap">
        <div className="flex flex-col bg-gray-500 mb-10 md:mb-0 md:flex-1 border-gray-300 border-solid border-[1px] p-4 rounded-md mr-4 text-white">
          <AboutMe cv={cv}></AboutMe>
        </div>
        <div className="p-4 border-gray-300 border-solid border-[1px] rounded-md">
          <ContactInfo cv={cv}></ContactInfo>
        </div>
        
      </div>
      <Line></Line>
      <div className="flex flex-col p-10">
        <h2 className="text-2xl font-bold">Experience</h2>
        
        <div className="flex flex-row flex-wrap">
          <Experiences cv={cv}></Experiences>
          
        </div>
      </div>
      <Line></Line>
      <div className="flex flex-col p-10">
        <h2 className="text-2xl font-bold">Skills</h2>
        
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