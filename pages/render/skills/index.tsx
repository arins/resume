


import React from "react";
import { Cv } from "../../api/cv";
import cvData from "../../api/cv.json";
import Skills from "../../components/Skills";



export default function SkillPage({cv}: {cv:Cv})
{
    
    return (
        
         <div className="flex flex-row flex-wrap pr-10 pl-10 pt-10">
          <Skills cv={cv}></Skills>
          
        </div>
          
    );
}

export async function getServerSideProps(_) {
    return {
      props: {
        cv: cvData as Cv,
      }, // will be passed to the page component as props
    }
  }
  