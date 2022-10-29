


import React from "react";
import { Cv } from "../../api/cv";
import cvData from "../../api/cv.json";
import Skills from "../../components/Skills";



export default function SkillPage({cv, lang}: {cv:Cv, lang:string})
{
    
    return (
        
         <div className="pr-10 pl-10 pt-10">
            <h2 className="text-2xl font-bold mb-10">
                { lang === 'sv' ? 'Kompetens' : 'Skills' }
            </h2>
            <div className="flex flex-row flex-wrap">
                <Skills cv={cv}></Skills>
            </div>
        </div>
          
    );
}

export async function getServerSideProps(context) {
    return {
      props: {
        lang: context.query?.lang || 'sv',
        cv: cvData as Cv,
      }, // will be passed to the page component as props
    }
  }
  